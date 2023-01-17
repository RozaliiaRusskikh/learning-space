import ProgressJournal from './pages/ProgressJournal';
import PostPage from './pages/PostPage/index';
import Login from './pages/Login/index'
import NoPage from './pages/NoPage';
import ReadingList from './pages/ReadingList/index';
import Layout from './components/Layout/index';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import PostFormPage from './pages/PostFormPage';
import { useEffect, useState } from 'react';
import firebase from './firebase';
import UserContext from './context/userContext';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, push, set, onValue, remove } from 'firebase/database';

function App() {

  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState(null);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const auth = getAuth(firebase); //Firebase auth


  useEffect(() => {
    const db = getDatabase(firebase); //Firebase database
    const postListRef = ref(db, 'posts');
    onValue(postListRef, (snapshot) => {
      const posts = snapshot.val();
      const newStatePosts = [];
      for (let post in posts) {
        newStatePosts.push({
          key: post,
          slug: posts[post].slug,
          title: posts[post].title,
          content: posts[post].content,
        });
      }
      setPosts(newStatePosts)
    });
  }, [setPosts]);

  const onLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser({
          email: response.user['email'],
          isAuthenticated: true
        });
        setError(false);
      })
      .catch(error => {
        setError(true);
        console.error(error)
      }
      );
  }

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({ isAuthenticated: false });
      })
      .catch((error) => console.error(error))
  }

  const setFlashMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null)
    }, 1600)
  }

  const createPost = (postTitle, postContent) => {
    const db = getDatabase(firebase); //Firebase database
    const postSlug = postTitle.toLowerCase().split(" ").join("-");
    const postListRef = ref(db, 'posts');
    const newPostRef = push(postListRef);
    set(newPostRef, {
      title: postTitle,
      content: postContent,
      slug: postSlug
    });
    setFlashMessage('saved');
  }

  const deletePost = (key) => {
    const db = getDatabase(firebase); //Firebase database

    if (window.confirm('Delete this post?')) {
      const postRef = ref(db, 'posts/' + key);
      remove(postRef);
      setFlashMessage('deleted')
    }
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, onLogin, onLogout }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="reading-list" element={<ReadingList />} />
            <Route path="progress-journal" element={<ProgressJournal onDelete={deletePost} message={message} posts={posts} />} />
            <Route path="progress-journal/:postSlug" element={<PostPage posts={posts} />} /> :
            <Route path="progress-journal/new" element={user.isAuthenticated ? <PostFormPage onCreate={createPost} /> : <Navigate to='/login' />} />
            <Route path="/login" element={!user.isAuthenticated ? <Login error={error} /> : <Navigate to='/' />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;


