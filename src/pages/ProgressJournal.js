import PostShow from '../components/PostShow/index'

function ProgressJournal({ posts }) {

    const renderedPosts = posts.map((post) => {
        return <PostShow key={post.id} post={post} />
    });

    const showNoPosts = <li>No notes yet!</li>

    return (
        <article>
            <h1>My Learning Diary</h1>
            <ul>
                {posts.length !== 0 ? renderedPosts : showNoPosts}
            </ul>
        </article>
    )
}

export default ProgressJournal;