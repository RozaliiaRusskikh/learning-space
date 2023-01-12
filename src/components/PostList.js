import PostLink from "./PostLink";

function PostList({ posts, onDelete }) {

    const renderedPosts = posts.map((post) => {
        return <PostLink onDelete={onDelete} key={post.id} post={post} />
    });

    const showNoPosts = <p>Sorry! No posts yet!</p>

    return (
        <div>
            {posts.length !== 0 ? renderedPosts : showNoPosts}
        </div>
    )
}

export default PostList;