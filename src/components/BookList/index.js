import Book from "../Book"

function BookList({ books, onDelete, onEdit }) {

    const renderedBooks = books.map((book) => {
        return <Book onDelete={onDelete} onEdit={onEdit}
            key={book.key} book={book} />
    })

    const showNoBooks = <p>Sorry! No books yet!</p>


    return <>
        {books.length !== 0 ? renderedBooks : showNoBooks}
    </>
}

export default BookList;