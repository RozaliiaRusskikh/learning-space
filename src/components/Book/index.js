import './index.css'

function Book({ book }) {
    return <div className="book-container">
        <div className='book-card'>
            <h3>{book.title}</h3>
        </div>
    </div>
}

export default Book;