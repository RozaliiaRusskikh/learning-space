import "./index.css"
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { Navigate } from "react-router-dom";

const PostFormPage = ({ onCreate }) => {
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const [saved, setSaved] = useState(false);

    const handleTitleChange = (event) => {
        setPostTitle(event.target.value);
    }

    const handleContentChange = (postContent, delta, source, editor) => {
        setPostContent(editor.getContents());
    }

    const handlePostForm = (event) => {
        event.preventDefault();
        if (postTitle && postContent) {
            onCreate(postTitle, postContent);
            setSaved(true);
        }
        else {
            alert("Title and content are required.")
        }
    }

    if (saved) {
        return <Navigate to='/progress-journal' />
    }

    return (
        <form onSubmit={handlePostForm} className="post-form-container">
            <h1>Add a new post:</h1>
            <p>
                <label htmlFor="form-title">
                    Title
                </label>
                <br />
                <input value={postTitle} onChange={handleTitleChange}></input>
            </p>
            <p>
                <label>
                    Content
                </label>
            </p>
            <ReactQuill theme="snow" onChange={handleContentChange}></ReactQuill>
            <p>
                <button type='submit'>Save</button>
            </p>

        </form>
    )
}

export default PostFormPage;