import './index.css'

function Book({ book }) {
    return (
        <div className="book-container">
            <div className='book-card'>
                <img src={book.preview} alt="book preview"></img>
                <h3>{book.title}</h3>
            </div>
        </div>
    )
}

export default Book;