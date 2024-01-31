import { Card } from "semantic-ui-react";
import AddBookButton from "./AddBookButton";

interface BookCardProps {
  image: string;
  title: string;
  authors: string;
  description: string;
}

const BookCard = (props:BookCardProps) => {
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
        />
      }
    />
  );
};

export default BookCard;
