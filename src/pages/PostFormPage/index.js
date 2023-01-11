import "./index.css"
import { Quill } from "react-quill"

const PostFormPage = (props) => {
    return (
        <form className="post-form-container">
            <h1>Add a new post:</h1>
            <p>Title</p>
            <p>Editor</p>
            <p>
                <button type='submit'>Save</button>
            </p>
        </form>
    )
}

export default PostFormPage;