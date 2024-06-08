import BookList from "../Components/BookList";

const HomePage = () => {
  return (
    <>
      <BookList header="Recommended Reading" itemsPerRow="5" />
    </>
  );
};

export default HomePage;
