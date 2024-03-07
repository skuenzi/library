
import BookList from "../Components/BookList"
import NavBar from "../Components/NavBar"

const HomePage = () => {
    return (
        <>
        <BookList header='Recommended Reading' itemsPerRow='5'/>
        </>
    )
}

export default HomePage