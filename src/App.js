import ProgressJournal from './pages/ProgressJournal';
import PostPage from './pages/PostPage/index';
import Login from './pages/Login/index'
import NoPage from './pages/NoPage';
import ReadingList from './pages/ReadingList/index';
import Layout from './components/Layout/index';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import PostFormPage from './pages/PostFormPage';
import { useState } from 'react';
import firebase from './firebase';


function App() {

  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState(null);
  const [user, setUser] = useState({});

  const onLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser({
          email: response.user['email'],
          isAuthenticated: true
        });
      })
      .catch(error => console.error(error))
  }

  const setFlashMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null)
    }, 1600)
  }

  const createPost = (postTitle, postContent) => {
    const postSlug = postTitle.toLowerCase().split(" ").join("-");

    const updatedPosts = [...posts,
    {
      id: Math.round(Math.random() * 9999),
      title: postTitle,
      content: postContent,
      slug: postSlug
    }];
    setPosts(updatedPosts);
    setFlashMessage('saved');
  }

  const deletePost = (id) => {
    if (window.confirm('Delete this post?')) {
      const updatedPosts = posts.filter((post) =>
        post.id !== id);
      setPosts(updatedPosts);
      setFlashMessage('deleted')
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="reading-list" element={<ReadingList />} />
          <Route path="progress-journal" element={<ProgressJournal onDelete={deletePost} message={message} posts={posts} />} />
          <Route path="progress-journal/:postSlug" element={<PostPage posts={posts} />} />
          <Route path="progress-journal/new" element={<PostFormPage onCreate={createPost} />} />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
