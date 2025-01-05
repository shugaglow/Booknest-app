/* eslint-disable react/prop-types */


function ListOfBooks({books}) {
return (
    <div className="books-wrapper">
    <div className="books">
    {books.length > 0 ? (
    books.map((book, index) => (
        <div className="list-of-books" key={index}>
        <div className="book">
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
        </div>
        </div>
    ))
) : (
    <p>No books available in this section.</p>
)}
</div>
</div>
)
}

export default ListOfBooks