import ProgressJournal from './pages/ProgressJournal';
import PostPage from './pages/PostPage/index';
import Login from './pages/Login/index'
import NoPage from './pages/NoPage';
import ReadingList from './pages/ReadingList/index';
import Layout from './components/Layout/index';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import './App.css';
import PostFormPage from './pages/PostFormPage';
import { useEffect, useState } from 'react';
import firebase from './firebase';
import UserContext from './context/userContext';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, push, set, onValue, remove, update } from 'firebase/database';
import EditPostFormPage from './components/EditPostFormPage';


function App() {

  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState(null);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth(firebase); //Firebase auth


  useEffect(() => {
    const db = getDatabase(firebase); //Firebase database
    const postListRef = ref(db, 'posts');
    onValue(postListRef, (snapshot) => {
      if (!snapshot.exists()) {
        setIsLoading(false);
      }
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
      setPosts(newStatePosts);
    });
  }, [setPosts]);

  useEffect(() => {
    const data = sessionStorage.getItem('user');
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);


  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);

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

  const getNewSlugFromTitle = (title) => {
    return encodeURIComponent(
      title.trim().toLowerCase().split(" ").join("-"));
  }

  const createPost = (postTitle, postContent) => {
    const db = getDatabase(firebase); //Firebase database
    const postSlug = getNewSlugFromTitle(postTitle);
    const postListRef = ref(db, 'posts');
    const newPostRef = push(postListRef);
    set(newPostRef, {
      title: postTitle,
      content: postContent,
      slug: postSlug
    });
    setFlashMessage('saved');
  }

  const updatePost = (postTitle, postContent, key) => {
    const db = getDatabase(firebase); //Firebase database
    const postSlug = getNewSlugFromTitle(postTitle);
    const postListRef = ref(db, 'posts/' + key);
    update(postListRef, {
      title: postTitle,
      content: postContent,
      slug: postSlug
    })
    setFlashMessage('updated');
  }

  const deletePost = (key) => {
    const db = getDatabase(firebase); //Firebase database

    if (window.confirm('Delete this post?')) {
      const postRef = ref(db, 'posts/' + key);
      remove(postRef);
      setFlashMessage('deleted');
    }
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, onLogin, onLogout }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="reading-list" element={<ReadingList />} />
            <Route path="progress-journal" element={<ProgressJournal onDelete={deletePost} isLoading={isLoading} message={message} posts={posts} />} />
            <Route path="progress-journal/:postSlug" element={<PostPage isLoading={isLoading} posts={posts} />} /> :

            <Route path="progress-journal/new" element={user.isAuthenticated ? <PostFormPage
              onCreate={createPost} action='Add'
              post={{ key: 0, slug: "", title: "", content: "" }}
            /> :
              <p>Please <Link to='/login'>Log In</Link> to add a post.</p>} />

            <Route path="progress-journal/edit/:postSlug" element={
              user.isAuthenticated ? (
                <EditPostFormPage posts={posts} updatePost={updatePost} />
              ) : (
                <p>Please <Link to='/login'>Log In</Link> to edit a post.</p>)} />

            <Route path="login" element={!user.isAuthenticated ? <Login error={error} /> : <Navigate replace to='/' />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;


