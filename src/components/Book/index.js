import './index.css'
import BookEdit from "../BookEdit"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../../context/userContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

function Book({ book, onDelete, onEdit }) {

    const [showEdit, setShowEdit] = useState(false);
    const { user } = useContext(UserContext);

    const handleDelete = () => {
        onDelete(book.key);
    }

    const handleEdit = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (key, newTitle) => {
        setShowEdit(false);
        if (book.title === newTitle) {
            <Navigate to='/reading-list' />
        }
        else {
            onEdit(key, newTitle, book.preview)
        }
    }

    const iconStyle = {
        margin: '.3rem',
        color: "#727af2"
    };

    let content = <h3>{book.title}</h3>;

    let icon = faEdit;

    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />;
        icon = faClose;
    }

    return (
        <div className="book-container">
            <div className='book-card'>
                <img src={book.preview} alt="book preview"></img>
                <div>{content}</div>
                {user.isAuthenticated &&
                    <div className='two-icons'>
                        <FontAwesomeIcon onClick={handleEdit} icon={icon} style={iconStyle} />
                        <FontAwesomeIcon onClick={handleDelete} icon={faTrash} style={iconStyle} />
                    </div>
                }
            </div>
        </div>
    )
}

export default Book;