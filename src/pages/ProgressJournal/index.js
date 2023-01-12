import PostList from '../../components/PostList'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import '../../components/Message/index';
import Message from '../../components/Message/index';

function ProgressJournal({ posts, message }) {

    return (
        <div>
            <article>
                {message && <Message message={message} />}
                <h1>My Learning Diary</h1>
                <PostList posts={posts} />
            </article>
            <Link to='/progress-journal/new' className='add-post-button'>Add a post
                <FontAwesomeIcon icon={faAdd} color="#727af2" style={{ marginLeft: '.3rem' }}></FontAwesomeIcon></Link>
        </div>
    )
}

export default ProgressJournal;