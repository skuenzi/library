import { useState } from "react";
import { Container, Divider, Form, Header } from "semantic-ui-react";
import BookList from "./BookList";
import { useCollectionsStore } from "../store";
import { nanoid } from "nanoid";

const CreateCollection = () => {
  const [newCollection, setNewCollection] = useState({
    title: "",
    desc: "",
  });
  const handleChange = (e, { name, value }) => {
    setNewCollection((prev) => ({ ...prev, [name]: value }));
  };

  const addCollection = useCollectionsStore(store => store.addCollection)

  const handleSubmit = (e) => { 
    const {title, desc} = newCollection
    addCollection(nanoid(), title, desc) 
    setNewCollection({
      title: "",
      desc: "",
    })
  }


  return (
    <Container>
      <Divider />
      <Header as="h3" content="New Collection" />
      <Form onSubmit={handleSubmit}>
        <Form.Group inline>
          <Form.Input
            label="Collection Title"
            placeholder="Name this collection"
            value={newCollection.title}
            name="title"
            onChange={handleChange}
          />
          <Form.TextArea
            label="Description"
            placeholder="Describe this collection"
            value={newCollection.desc}
            name="desc"
            onChange={handleChange}
          />
          <Form.Button>Submit</Form.Button>
        </Form.Group>
      </Form>
      {/* <BookList
        itemsPerRow="7"
        header="Add some books to your collection"
        currentCollection={newCollection}
      /> */}
    </Container>
  );
};

export default CreateCollection;
