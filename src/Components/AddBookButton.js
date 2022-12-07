import { Icon, Popup } from "semantic-ui-react"

const AddBookButton = () => {
    return (
        <Popup trigger={<Icon name='plus'/>} hoverable>
            Collection Nanes
        </Popup>
    )
}


export default AddBookButton