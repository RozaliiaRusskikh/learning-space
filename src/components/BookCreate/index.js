import { useState } from 'react';
import './index.css'

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return <div className='book-create-container'>
        <h3>Add a book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={title} onChange={handleChange} required/>
            <button>Add</button>
        </form>
    </div>
}

export default BookCreate;