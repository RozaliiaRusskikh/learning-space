import PostList from '../../components/PostList'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import '../../components/Message/index';
import Message from '../../components/Message/index';
import { useContext } from 'react';
import UserContext from '../../context/userContext';

function ProgressJournal({ posts, message, onDelete }) {

    const { user } = useContext(UserContext);

    return (
        <div>
            <article>
                {message && <Message message={message} />}
                <h1>My Learning Diary</h1>
                <PostList onDelete={onDelete} posts={posts} />
            </article>
            {user.isAuthenticated && <Link to='/progress-journal/new' className='add-post-button'>Add a post
                <FontAwesomeIcon icon={faAdd} color="#727af2" style={{ marginLeft: '.3rem' }}></FontAwesomeIcon></Link>}
        </div>
    )
}

export default ProgressJournal;