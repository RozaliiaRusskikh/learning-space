import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function Book({ book, onDelete }) {

    const handleDelete = () => {
        onDelete(book.id);
    }

    const handleEdit = () => {
        console.log('Hi');
    }

    return (
        <div className="book-container">
            <div className='book-card'>
                <img src={book.preview} alt="book preview"></img>
                <h3>{book.title}</h3>
                <div className='two-icons'>
                    <FontAwesomeIcon className='edit' onClick={handleEdit} icon={faEdit} color="#727af2" style={{ margin: '.3rem'}} />
                    <FontAwesomeIcon className='delete' onClick={handleDelete} icon={faTrash} color="#727af2" style={{ margin: '.3rem' }} />
                </div>
            </div>
        </div>
    )
}

export default Book;