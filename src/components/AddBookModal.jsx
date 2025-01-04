

function AddBookModal(onClose) {
return (
    <div className="modal-overlay">
        <div className="modal-container">
            <h2>Add a New Book</h2>
            <form>
                <input type="text"
                placeholder="Enter Book Title"/>

                <input type="text"
                placeholder="Author's name"/>

                <input type="text"
                placeholder="Genre"/>

                <select>
                    <option value=""> Select Section</option>
                    <option value="Want To Read">Want To Read</option>
                    <option value="Currently Reading">Currently Reading</option>
                    <option value="Finished Reading">Finished Reading</option>
                </select>

                <div className="form-buttons-container">
                    <button className="add-book-button" type="submit">Add Book</button>
                    <button type="button" onClick={onClose} className="cancel-button">Cancel</button>
                </div>
            </form>
        </div>
    </div>
)
}

export default AddBookModal