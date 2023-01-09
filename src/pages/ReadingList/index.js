import { useState } from "react";
import BookCreate from "../../components/BookCreate/index"
import BookList from '../../components/BookList'
import './index.css'

function ReadingList() {

  const [books, setBooks] = useState([]);

  const createBook = (title, preview) => {
    const updatedBooks = [...books,
    { id: Math.round(Math.random() * 9999), title, preview }];
    setBooks(updatedBooks);
  }

  return (
    <div className="reading-list-container">
      <h1>My Reading List </h1>
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default ReadingList;