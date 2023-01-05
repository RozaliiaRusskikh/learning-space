import Book from "../Book"

function BookList({ books }) {

    const renderedBooks = books.map((book) => {
        return <Book key={book.id}  book={book} />
    })


    return <div>{renderedBooks}</div>
}

export default BookList;