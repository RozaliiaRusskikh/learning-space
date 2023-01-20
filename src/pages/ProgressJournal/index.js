import PostList from '../../components/PostList'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import '../../components/Message/index';
import Message from '../../components/Message/index';
import { useContext } from 'react';
import UserContext from '../../context/userContext';

function ProgressJournal({ posts, message, onDelete, isLoading }) {

    const { user } = useContext(UserContext);

    return (
        <div>
            <article>
                <h1>My Learning Diary</h1>
                {message && <Message message={message} item='Note'/>}
                <PostList onDelete={onDelete} posts={posts} isLoading={isLoading} />
            </article>
            {user.isAuthenticated && <Link to='/progress-journal/new' className='add-post-button'>Add a note
                <FontAwesomeIcon icon={faAdd} color="#727af2" style={{ marginLeft: '.3rem' }}></FontAwesomeIcon></Link>}
        </div>
    )
}

export default ProgressJournal;