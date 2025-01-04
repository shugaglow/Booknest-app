
import AddBookModal from "./AddBookModal"
import { useState } from "react"

function LibraryHeader() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)
    return (
        <>
            <div className="library-header">
            <h1>Your Library</h1>
            <button onClick={openModal} className="buttonOther">Add Book</button>
        </div>

        {isModalOpen && (
            <AddBookModal onClose={closeModal}/>
        )}
        </>

)
}

export default LibraryHeader