import { Link } from "react-router-dom";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../../context/userContext';
import { useContext } from 'react';

function PostLink({ post, onDelete }) {

    const { user } = useContext(UserContext);

    const handleClick = () => {
        onDelete(post.id);
    }

    return (
        <h3>
            <Link to={`/progress-journal/${post.slug}`}>{post.title + " "}</Link>
            {user.isAuthenticated && <FontAwesomeIcon className="remove" onClick={handleClick} icon={faRemove} />}
        </h3>
    )
}

export default PostLink; 