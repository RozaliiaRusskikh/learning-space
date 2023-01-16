import BookCreate from "../../components/BookCreate/index";
import BookList from '../../components/BookList';
import './index.css';
import { useState } from "react";
import UserContext from '../../context/userContext';
import { useContext } from 'react';
import firebase from '../../firebase';
import { getDatabase, ref, push, set } from 'firebase/database';

function ReadingList() {

  const [books, setBooks] = useState([]);
  const { user } = useContext(UserContext);

  const db = getDatabase(firebase); //Firebase database

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }
      }
      return book;
    })

    setBooks(updatedBooks);
  }

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    })

    setBooks(updatedBooks);
  }

  const createBook = (title, preview) => {
    const bookListRef = ref(db, 'books');
    const newBookRef = push(bookListRef);
    set(newBookRef, {
      title,
      preview
    });
  }

  return (
    <div className="reading-list-container">
      <h1>My Learning Library </h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      {user.isAuthenticated && <BookCreate onCreate={createBook} />}
    </div>
  )
}

export default ReadingList;