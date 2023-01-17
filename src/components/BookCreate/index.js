import { useState, useEffect, useRef } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [openForm, setIsOpenForm] = useState(false);
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
        setIsOpenForm(false);
    }
    const handleOpenForm = () => {
        setIsOpenForm(true);

    }

    const handleCancel = () => {
        setIsOpenForm(false);
        setTitle('');
        imageInputRef.current.value = null;
    }

    useEffect(() => {
        if (!selectedFile) {
            return
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreview(fileReader.result);
        }

        fileReader.readAsDataURL(selectedFile);



    }, [selectedFile])

    return (
        <div className='book-create-container'>
            {openForm ?
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input className='title' type='text' value={title} onChange={handleChange} required />
                    <label className='custom-file-upload'>
                        <input className='file' type="file" name="filename" accept="image/*" required
                            ref={imageInputRef} onChange={handleUpload}></input>
                        Choose Image  <FontAwesomeIcon icon={faUpload} color="#727af2" />
                    </label>
                    <div className='two-buttons'>
                        <button>Add</button>
                        <button type="button" onClick={handleCancel}>Cancel</button>
                    </div>
                </form> : <button className='add-button-top' onClick={handleOpenForm}>Add a book
                    <FontAwesomeIcon icon={faAdd} color="#727af2" style={{ marginLeft: '.3rem' }} />
                </button>}
        </div>
    )
}

export default BookCreate;