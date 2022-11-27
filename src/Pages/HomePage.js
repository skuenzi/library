import BookCard from "../Components/BookCard"
import BookList from "../Components/BookList"
import Collections from "../Components/Collections"
import NavBar from "../Components/NavBar"

const HomePage = () => {
    return (
        <>
        <NavBar/>
        <Collections/>
        <BookList/>
        </>
    )
}

export default HomePage