import "./index.css"
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { Navigate } from "react-router-dom";

const PostFormPage = ({ post, onCreate, updatePost, action }) => {
    const [postTitle, setPostTitle] = useState(post.title);
    const [postContent, setPostContent] = useState(post.content);
    const [saved, setSaved] = useState(false);


    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'color': [] }],
            ['link', 'image', 'code-block'],
            ['clean'] // remove formatting button
        ]
    }

    const handleTitleChange = (event) => {
        setPostTitle(event.target.value)
    }

    const handleCancel = () => {
        window.history.back();
    }

    const handleContentChange = (postContent, delta, source, editor) => {
        setPostContent(editor.getContents()
        );
    }

    const handlePostForm = (event) => {
        event.preventDefault();
        if (postTitle && postContent) {
            if (updatePost) {
                if (post.title === postTitle || post.content === postContent) {
                    window.history.back();
                }
                else {
                    updatePost(postTitle, postContent, post.key);
                    window.history.back();
                }
            }
            else {
                onCreate(postTitle, postContent);
                setSaved(true);
            }

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
            <h1>{action} a note:</h1>
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
            <ReactQuill theme="snow" value={postContent} onChange={handleContentChange} modules={modules} placeholder='Write something...' />
            <p>
                <button type='submit'>Save</button>
                <button type='button' className="cancel" onClick={handleCancel}>Cancel</button>
            </p>

        </form>
    )
}

export default PostFormPage;