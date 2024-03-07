import { useEffect } from "react";
import Collection from "../Components/Collection";
import CreateCollection from "../Components/CreateCollection";
import NavBar from "../Components/NavBar";
import { useCollectionsStore } from "../store";

const Collections = (props) => {
  const collections = useCollectionsStore((store) => store.collections);

  
  const authToken = localStorage.getItem('authToken')
  // console.log(authToken)

const getShelves = async () => { 
  const res = await fetch('https://www.googleapis.com/books/v1/mylibrary/bookshelves', {headers: {Authorization: `Bearer ${authToken}`}})
  const data = await res.json()
  // console.log(data)
 }  
  getShelves()
  return (
    <>
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
