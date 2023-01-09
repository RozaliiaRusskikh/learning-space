import PostLink from '../components/PostLink/index'

function ProgressJournal({ posts }) {

    const renderedPosts = posts.map((post) => {
        return <PostLink key={post.id} post={post} />
    });

    const showNoPosts = <li>SORRY! No notes yet!</li>

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