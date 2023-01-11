import { useParams } from "react-router-dom";
import NoPage from "../NoPage";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

function PostPage({ posts }) {
    const { postSlug } = useParams();
    const post = posts.find((post) =>
        post.slug === postSlug);
    const converter = new QuillDeltaToHtmlConverter(post.content.ops, {});
    const contentHTML = converter.convert();

    if (post) {
        return (
            <article className="post-container">
                <h2>{post.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: contentHTML }}></div>
            </article>
        )
    }
    else {
        return <NoPage />
    }

}

export default PostPage;