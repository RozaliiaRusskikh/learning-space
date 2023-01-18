import BookCreate from "../../components/BookCreate/index";
import BookList from '../../components/BookList';
import './index.css';
import { useState, useEffect } from "react";
import UserContext from '../../context/userContext';
import { useContext } from 'react';
import firebase from '../../firebase';
import { getDatabase, ref, push, set, onValue, remove, update } from 'firebase/database';

function ReadingList() {

  const [books, setBooks] = useState([]);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const db = getDatabase(firebase); //Firebase database
    const bookListRef = ref(db, 'books');
    onValue(bookListRef, (snapshot) => {
      if (!snapshot.exists()) {
        setIsLoading(false);
      }
      const books = snapshot.val();
      const newStateBooks = [];
      for (let book in books) {
        newStateBooks.push({
          key: book,
          title: books[book].title,
          preview: books[book].preview,
        });
      }
      setBooks(newStateBooks);
    });
  }, [setBooks]);

  const editBookById = (key, newTitle, preview) => {
    const db = getDatabase(firebase); //Firebase database
    const bookRef = ref(db, 'books/' + key);
    update(bookRef, {
      title: newTitle,
      preview: preview
    });
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
      <BookList onEdit={editBookById} isLoading={isLoading} books={books} onDelete={deleteBookById} />
      {user.isAuthenticated && <BookCreate onCreate={createBook} />}
    </div>
  )
}

export default ReadingList;