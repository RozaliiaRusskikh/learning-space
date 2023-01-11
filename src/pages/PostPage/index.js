import { useParams } from "react-router-dom";
import NoPage from "../NoPage"

function PostRelatedPage({ posts }) {

    const { postSlug } = useParams();
    const post = posts.find((post) =>
        post.slug === postSlug);

    if (post) {
        return (
            <article className="post-container">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </article>
        )
    }
    else {
        return <NoPage />
    }

}

export default PostRelatedPage;