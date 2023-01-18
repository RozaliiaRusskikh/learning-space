import PostLink from "./PostLink";
import Spinner from '../components/Spinner/index';

function PostList({ posts, onDelete, isLoading }) {

    const renderedPosts = posts.map((post) => {
        return <PostLink onDelete={onDelete} key={post.key} post={post} />
    });

    const showNoPosts = <p>Sorry! No posts yet!</p>

    if (!isLoading && posts.length === 0) {
        return showNoPosts;
    }

    else if (isLoading && posts.length === 0) {
        return <Spinner />
    }

    else return (
        <div>
            {posts.length !== 0 && renderedPosts}
        </div>
    )
}

export default PostList;