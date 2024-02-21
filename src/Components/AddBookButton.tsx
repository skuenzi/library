import {
  Button,
  Icon,
  List,
  ListContent,
  ListItem,
  Popup,
} from "semantic-ui-react";
import { useCollectionsStore } from "../store";

const AddBookButton = (props: any) => {
  const collections = useCollectionsStore((store) => store.collections);
  const addBookToCollection = useCollectionsStore((store) => store.addBookToCollection)
  return (
    <Popup trigger={<Icon name="plus" />} hoverable on="click">
      Collections
      <List selection>
        {collections.map((collection) => (
          <ListItem key={collection.key}>
            <ListContent>
              <Button onClick={() => addBookToCollection(collection.key)}>{collection.title}</Button>
            </ListContent>
          </ListItem>
        ))}
      </List>
    </Popup>
  );
};

export default AddBookButton;
