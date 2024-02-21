import Collection from "../Components/Collection";
import CreateCollection from "../Components/CreateCollection";
import NavBar from "../Components/NavBar";
import { useCollectionsStore } from "../store";

const Collections = (props) => {
  const collections = useCollectionsStore((store) => store.collections);


  
  return (
    <>
      <NavBar />
      {collections.map((collection) => (
        <Collection
          key={collection.key}
          title={collection.title}
          books={collection.books}
        />
      ))}
      <CreateCollection />
    </>
  );
};

export default Collections;
