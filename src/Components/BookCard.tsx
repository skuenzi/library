import { Card } from "semantic-ui-react";

const BookCard = (props: any) => {
  return (
    <Card
      id={props.title}
      image={props.image}
      header={props.title}
      meta={`by ${props.authors}`}
      description={`${
        props.description &&
        props.description.substring(0, props.description.lastIndexOf(" ", 100))
      }...`}
    />
  );
};

export default BookCard;
