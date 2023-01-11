import "./index.css"
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const PostFormPage = (props) => {
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");

    const handleTitleChange = (event) => {
        setPostTitle(event.target.value);
    }

    const handleContentChange = (postContent, delta, source, editor) => {
        setPostContent(editor.getContents());
    }

    const handlePostForm = (event) => {
        event.preventDefault();
        if (postTitle && postContent) {
            const post = {
                title: postTitle,
                content: postContent,
            }
            console.log(post);
        }
        else {
            alert("Title and content are required.")
        }
    }

    return (
        <form onSubmit={handlePostForm} className="post-form-container">
            <h1>Add a new post:</h1>
            <p>
                <label htmlFor="form-title">
                    Title:
                </label>
                <br />
                <input id="form-title" value={postTitle} onChange={handleTitleChange}></input>
            </p>
            <p>
                <label htmlFor="form-content">
                    Content:
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