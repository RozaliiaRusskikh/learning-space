import Book from "../Book"

function BookList({ books }) {

    const renderedBooks = books.map((book) => {
        return <Book key={book.id} book={book} />
    })

    const showNoBooks = <h4>SORRY! No books yet!</h4>


    return <div>
        {books.length !== 0 ? renderedBooks : showNoBooks}
    </div>
}

export default BookList;