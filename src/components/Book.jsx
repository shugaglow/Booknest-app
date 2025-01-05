/* eslint-disable react/prop-types */


function Book({ title, author }) {
    return (
        <div className="book-container">
            <img
                src="https://via.placeholder.com/150"
                alt="Book cover"
                className="book-cover"
            />
            <div className="book-title">
                <h2>{title}</h2></div>
            <div className="book-author">
                <p>{author}</p>
            </div>
        </div>
    );
}

export default Book;
