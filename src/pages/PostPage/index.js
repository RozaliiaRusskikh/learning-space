import { useParams } from "react-router-dom";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import NoPage from '../NoPage';

function PostPage({ posts }) {
    const { postSlug } = useParams();
    let contentHTML = '';
    const post = posts.find((post) =>
        post.slug === postSlug);

    if (post) {
        const converter = new QuillDeltaToHtmlConverter(post.content.ops, {});
        contentHTML = converter.convert();
    }

    return (
        <div>
            {post
                ? (<article className="post-container">
                    <h2> {post.title}</h2 >
                    <div dangerouslySetInnerHTML={{ __html: contentHTML }}></div>
                </article>)
                : <NoPage />
            }
        </div>
    )
}


export default PostPage;