import { useState, useEffect, useRef } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const imageInputRef = useRef();

    const handleUpload = (e) => {
        setSelectedFile(e.target.files[0])
    }

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title, preview);
        setTitle('');
        imageInputRef.current.value = null;
    }


    useEffect(() => {
        if (!selectedFile) {
            setPreview(null)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    return (
        <div className='book-create-container'>
            <button className='add-button-top' onClick={() => { }}>Add a book
                <FontAwesomeIcon icon={faAdd} color="#727af2" style={{ marginLeft: '.3rem' }} />
            </button>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className='title' type='text' value={title} onChange={handleChange} required />
                <label className='custom-file-upload'>
                    <input className='file' type="file" name="filename" accept="image/*" required
                        ref={imageInputRef} onChange={handleUpload}></input>
                    Choose Image  <FontAwesomeIcon icon={faUpload} color="#727af2" />
                </label>
                <button class='add-button-bottom'>Add</button>
            </form>
        </div>
    )
}

export default BookCreate;