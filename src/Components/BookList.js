import { useEffect, useState } from "react";
import { Card, Container, Header } from "semantic-ui-react";
import BookCard from "./BookCard";

const BookList = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const url =
    "https://www.googleapis.com/books/v1/volumes?q=+subject:fiction&orderBy=newest&key=AIzaSyCxrOmawhlEXmACL87Lm_tlZCWhgpYqST4";

  useEffect(() => {
    setLoading(true);
    const getBooks = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setBooks(
        data.items.map((book) => (
          <BookCard
            key={book.id}
            image={book.volumeInfo.imageLinks.smallThumbnail}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
          />
        ))
      );
    };
    getBooks();
    console.log(books);
    setLoading(false);
  }, []);

  return (
    <Container fluid>
      <Header size="large" textAlign="center">
        Recommended Reading
      </Header>
      {loading && <div>Loading...</div>}
      {!loading && <Card.Group centered>{books}</Card.Group>}
    </Container>
  );
};

export default BookList;
