import { useState } from "react";
import { Container, Divider, Form, Header } from "semantic-ui-react";
import BookList from "./BookList";

const CreateCollection = () => {
  const [newCollection, setNewCollection] = useState({
    newCollectionTitle: "",
    newCollectionDesc: "",
    newCollectionBooks: [],
  });
  const handleChange = (e, { name, value }) => {
    setNewCollection((prev) => ({ ...prev, [name]: value }));
  };
  const handleAddBookToCollection = () => {

  };
  return (
    <Container>
      <Divider />
      <Header as="h3" content="New Collection" />
      <Form>
        <Form.Group inline>
          <Form.Input
            label="Collection Title"
            placeholder="Name this collection"
            name="newCollectionTitle"
            onChange={handleChange}
          />
          <Form.TextArea
            label="Description"
            placeholder="Describe this collection"
            name="newCollectionDesc"
            onChange={handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
      <BookList
        itemsPerRow="7"
        header="Add some books to your collection"
        handleAddBookToCollection={handleAddBookToCollection}
        currentCollection={newCollection}
      />
    </Container>
  );
};

export default CreateCollection;
