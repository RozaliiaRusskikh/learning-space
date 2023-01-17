import BookCreate from "../../components/BookCreate/index";
import BookList from '../../components/BookList';
import './index.css';
import { useState, useEffect } from "react";
import UserContext from '../../context/userContext';
import { useContext } from 'react';
import firebase from '../../firebase';
import { getDatabase, ref, push, set, onValue, remove } from 'firebase/database';

function ReadingList() {

  const [books, setBooks] = useState([]);
  const { user } = useContext(UserContext);


  useEffect(() => {
    const db = getDatabase(firebase); //Firebase database
    const bookListRef = ref(db, 'books');
    onValue(bookListRef, (snapshot) => {
      const books = snapshot.val();
      const newStateBooks = [];
      for (let book in books) {
        newStateBooks.push({
          key: book,
          title: books[book].title,
          preview: books[book].preview,
        });
      }
      setBooks(newStateBooks)
    });
  }, [setBooks]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle }
      }
      return book;
    })

    setBooks(updatedBooks);
  }

  const deleteBookById = (key) => {

    const db = getDatabase(firebase); //Firebase database

    if (window.confirm('Delete this book?')) {
      const bookRef = ref(db, 'books/' + key);
      remove(bookRef);
    }
  }

  const createBook = (title, preview) => {
    const db = getDatabase(firebase); //Firebase database
    const bookListRef = ref(db, 'books');
    const newBookRef = push(bookListRef);
    set(newBookRef, {
      title: title,
      preview: preview
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