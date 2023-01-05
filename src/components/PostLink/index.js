import { Link } from "react-router-dom";
import './index.css'

function PostShow({ post }) {
    return (
        <h3>
            <Link to={`/progress-journal/${post.slug}`}>{post.title}</Link>
        </h3>
    )
}

export default PostShow; 