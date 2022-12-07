import { Card } from "semantic-ui-react";
import AddBookButton from "./AddBookButton";

const BookCard = (props) => {
  return (
    <Card
      image={props.image}
      header={props.title}
      meta={`by ${props.authors}`}
      description={`${props.description.substring(
        0,
        props.description.lastIndexOf(" ", 100)
      )}...`}
      extra={
        <AddBookButton
          addBook={props.addBookToCollection}
          currentCollection={props.currentCollection}
        />
      }
    />
  );
};

export default BookCard;
