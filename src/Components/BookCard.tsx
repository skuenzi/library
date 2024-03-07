import { Card } from "semantic-ui-react";
import AddBookButton from "./AddBookButton";

interface BookCardProps {
  image: string;
  title: string;
  authors: string;
  description: string;
}

const BookCard = (props: any) => {
  return (
    <Card
      id={props.title}
      image={props.image}
      header={props.title}
      meta={`by ${props.authors}`}
      description={`${props.description.substring(
        0,
        props.description.lastIndexOf(" ", 100)
      )}...`}
      extra={<AddBookButton key={props.key} />}
    />
  );
};

export default BookCard;
