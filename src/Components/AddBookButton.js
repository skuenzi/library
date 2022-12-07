import { Icon, Popup } from "semantic-ui-react"

const AddBookButton = () => {
    return (
        <Popup trigger={<Icon name='plus'/>} hoverable>
            Collections
        </Popup>
    )
}


export default AddBookButton