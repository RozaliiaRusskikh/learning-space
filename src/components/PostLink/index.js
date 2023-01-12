import { Link } from "react-router-dom";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

function PostLink({ post, onDelete }) {

    const handleClick = () => {
        onDelete(post.id);
    }

    return (
        <h3>
            <Link to={`/progress-journal/${post.slug}`}>{post.title + " "}</Link>
            <FontAwesomeIcon className="remove" onClick={handleClick} icon={faRemove} />
        </h3>
    )
}

export default PostLink; 