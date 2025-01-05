/* eslint-disable react/prop-types */

import Book from "../../components/Book";


function WantToRead({ books }) {
    return (
        <div className="book-list">
            {books.map((book, index) => (
                <Book key={index} title={book.title} author={book.author} />
            ))}
        </div>
    );
}

export default WantToRead;


