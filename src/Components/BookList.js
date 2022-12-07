import { useEffect, useState } from "react";
import {
  Card,
  Container,
  Form,
  Header,
} from "semantic-ui-react";
import BookCard from "./BookCard";

const BookList = (props) => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("fiction");
  const [search, setSearch] = useState("");
  const url = `https://www.googleapis.com/books/v1/volumes?q=+subject:${searchInput}&maxResults=20&orderBy=newest&key=AIzaSyCxrOmawhlEXmACL87Lm_tlZCWhgpYqST4`;

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
    setLoading(false);
  }, [searchInput, url]);

  const handleSubmit = (e) => {
    setSearchInput(search)
    setSearch('')
  };

  const handleChange = (e) => {
    setSearch(e.target.value)
  };

  return (
    <Container>
      <Header size="large" textAlign="center">
        {props.header}
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input
            type="text"
            placeholder="Search for a subject"
            name="search"
            value={search}
            onChange={handleChange}
          />
          <Form.Button content="Search"  />
        </Form.Group>
      </Form>
      {loading && <div>Loading...</div>}
      {!loading && (
        <Card.Group centered itemsPerRow={props.itemsPerRow}>
          {books}
        </Card.Group>
      )}
    </Container>
  );
};

export default BookList;
