import Collection from "../Components/Collection";
import CreateCollection from "../Components/CreateCollection";
import NavBar from "../Components/NavBar";

const Collections = (props) => {
  return (
    <>
      <NavBar />
      {props.collections.map((collection) => (
        <Collection title={collection.title} />
      ))}
      <CreateCollection />

      <Collection />
    </>
  );
};

export default Collections;