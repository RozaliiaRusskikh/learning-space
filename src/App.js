import ProgressJournal from './pages/ProgressJournal';
import PostPage from './pages/PostPage/index';
import NoPage from './pages/NoPage';
import ReadingList from './pages/ReadingList/index';
import Layout from './components/Layout/index';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import PostFormPage from './pages/PostFormPage';
import { useState } from 'react';


function App() {

  const [posts, setPosts] = useState([]);

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
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="reading-list" element={<ReadingList />} />
          <Route path="progress-journal" element={<ProgressJournal posts={posts} />} />
          <Route path="progress-journal/:postSlug" element={<PostPage posts={posts} />} />
          <Route path="progress-journal/new" element={<PostFormPage onCreate={createPost} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
