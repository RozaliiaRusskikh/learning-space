import { Link } from "react-router-dom";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../../context/userContext';
import { useContext } from 'react';

function PostLink({ post, onDelete }) {

    const { user } = useContext(UserContext);

    const handleClick = () => {
        onDelete(post.key);
    }

    return (
        <ul>
            <li className="post-item">
                <Link className='post-list' to={`/progress-journal/${post.slug}`}>{post.title}</Link>
                {user.isAuthenticated && (
                    <>
                        {" "}
                        <Link to={`/progress-journal/edit/${post.slug}`}>
                            <FontAwesomeIcon className="edit" icon={faEdit} />
                        </Link>
                        {" "}
                        <FontAwesomeIcon className="remove" onClick={handleClick} icon={faRemove} />
                    </>)}
            </li>
        </ul>
    )
}

export default PostLink; 