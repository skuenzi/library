import { Card, Container, Header } from "semantic-ui-react";
import BookCard from "./BookCard";
import { nanoid } from "nanoid";

const Collection = (props) => {

  return (
    <Container>
      <Header>{props.title}</Header>
      <Card.Group itemsPerRow={5}>

      {props.books && 
        props.books.map((book) => (
          <BookCard
            key={nanoid()}
            image={book.image}
            title={book.title}
            authors={book.authors}
            description={book.description}
          />
        ))}
      </Card.Group>
    </Container>
  );
};

export default Collection;
