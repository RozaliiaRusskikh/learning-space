import Book from "../Book"

function BookList({ books, onDelete }) {

    const renderedBooks = books.map((book) => {
        return <Book onDelete={onDelete}
            key={book.id} book={book} />
    })

    const showNoBooks = <p>Sorry! No books yet!</p>


    return <>
        {books.length !== 0 ? renderedBooks : showNoBooks}
    </>
}

export default BookList;