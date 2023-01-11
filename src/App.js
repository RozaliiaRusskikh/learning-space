import ProgressJournal from './pages/ProgressJournal';
import PostRelatedPage from './pages/PostRelatedPage/index';
import NoPage from './pages/NoPage';
import ReadingList from './pages/ReadingList/index';
import Layout from './components/Layout/index';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';

function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Hello React",
      content: "Lorem",
      slug: "hello-react"
    },
    {
      id: 2,
      title: "Hello Project",
      content: "Lorem ipsum",
      slug: "hello-project"
    },
  ])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="reading-list" element={<ReadingList />} />
          <Route path="progress-journal" element={<ProgressJournal posts={posts} />} />
          <Route path="*" element={<NoPage />} />
          <Route path="progress-journal/:postSlug" element={<PostRelatedPage posts={posts} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
