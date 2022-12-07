import { useState } from "react";
import { Form, Header, Segment } from "semantic-ui-react";
import BookList from "./BookList";

const CreateCollection = () => {

  return (
    <Segment>
      <Header as="h3" content="New Collection" />
      <Form>
        <Form.Group>
          <Form.Input
            label="Collection Title"
            placeholder="Name this collection"
          />
          <Form.TextArea
            label="Description"
            placeholder="Describe this collection"
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
        <BookList itemsPerRow='7' header='Add some books to your collection'/>
    </Segment>
  );
};

export default CreateCollection;
