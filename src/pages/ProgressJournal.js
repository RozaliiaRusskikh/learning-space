import PostLink from '../components/PostLink/index';
import { Link } from 'react-router-dom';

function ProgressJournal({ posts }) {

    const renderedPosts = posts.map((post) => {
        return <PostLink key={post.id} post={post} />
    });

    const showNoPosts = <p>Sorry! No notes yet!</p>

    return (
        <div>
            <article>
                <h1>My Learning Diary</h1>
                <ul>
                    {posts.length !== 0 ? renderedPosts : showNoPosts}
                </ul>
            </article>
            <Link to='/progress-journal/new'>Add a post</Link>
        </div>
    )
}

export default ProgressJournal;