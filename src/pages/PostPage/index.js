import { useParams } from "react-router-dom";
import Spinner from '../../components/Spinner/index'
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import NoPage from '../NoPage';
import './index.css';

function PostPage({ posts, isLoading }) {
    const { postSlug } = useParams();
    let contentHTML = '';

    if (isLoading && posts.length === 0) {
        return <Spinner />
    }

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
                    <div className='ql-editor' dangerouslySetInnerHTML={{ __html: contentHTML }}></div>
                </article>)
                : <NoPage />
            }
        </div>
    )
}


export default PostPage;

