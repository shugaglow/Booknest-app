/* eslint-disable react/prop-types */
import { useState } from "react"


function AddBookModal({onClose, onAddBook}) {
    const [bookTitle, setBookTitle] = useState("");
    const [author, setAuthor] = useState("")
    const [genre, setGenre] = useState("")
    const [section, setSection] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (bookTitle.trim() && author.trim() && genre.trim() && section){
            const newBook = {
                title: bookTitle,
                author,
                genre,
                // section,
                // notes: [],
                // progress: 0,
            };
            onAddBook(newBook, section)
            setBookTitle("")
            setSection("")
            setAuthor("")
            setGenre("")
            onClose()
        } else {
            alert("Please fill in alll fields")
        }

    }
return (
    <div className="modal-overlay">
        <div className="modal-container">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="Enter Book Title"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                />

                <input type="text"
                placeholder="Author's name"
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                />

                <input type="text"
                placeholder="Genre"
                value={genre}
                onChange={(e)=>setGenre(e.target.value)}
                />

                <select 
                value={section}
                onChange={(e)=> setSection(e.target.value)}
                >
                    <option value=""> Select Section</option>
                    <option value="Want To Read">Want To Read</option>
                    <option value="Currently Reading">Currently Reading</option>
                    <option value="Finished Reading">Finished Reading</option>
                </select>

                <div className="form-buttons-container">
                    <button type="submit" className="add-book-button">Add Book</button>
                    <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
                </div>
            </form>
        </div>
    </div>
)
}

export default AddBookModal