import PostLink from "./PostLink";

function PostList({ posts }) {

    const renderedPosts = posts.map((post) => {
        return <PostLink key={post.id} post={post} />
    });

    const showNoPosts = <p>Sorry! No posts yet!</p>

    return (
        <ul>
            {posts.length !== 0 ? renderedPosts : showNoPosts}
        </ul>
    )
}

export default PostList;