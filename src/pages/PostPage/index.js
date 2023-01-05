import { useParams } from "react-router-dom";

function PostPage({ posts }) {

    const { postSlug } = useParams();

    const post = posts.find((post) =>
        post.slug === postSlug);

    return (
        <article className="post-container">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </article>
    )
}

export default PostPage;