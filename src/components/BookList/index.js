import Book from "../Book";
import Spinner from '../Spinner/index';


function BookList({ books, onDelete, onEdit, isLoading }) {

    const renderedBooks = books.map((book) => {
        return <Book onDelete={onDelete} onEdit={onEdit}
            key={book.key} book={book} />
    })

    const showNoBooks = <p>Sorry! No books yet!</p>

    if (!isLoading && books.length === 0) {
        return showNoBooks;
    }

    else if (isLoading && books.length === 0) {
        return <Spinner />
    }

    else return (
        <div>
            {books.length !== 0 && renderedBooks}
        </div>
    )
}

export default BookList;