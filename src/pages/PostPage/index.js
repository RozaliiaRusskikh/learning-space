import { useParams } from "react-router-dom";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import NoPage from '../NoPage';
import './index.css';

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
        <div className="post-page-container">
            {post
                ? (<article className="post-container">
                    <h2> {post.title}</h2 >
                    <div className='content' dangerouslySetInnerHTML={{ __html: contentHTML }}></div>
                </article>)
                : <NoPage />
            }
        </div>
    )
}


export default PostPage;