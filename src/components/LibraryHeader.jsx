import { useState } from "react";
import CurrentlyReading from "../pages/library pages/CurrentlyReading";
import FinishedReading from "../pages/library pages/FinishedReading";
import WantToRead from "../pages/library pages/WantToRead";
import AddBookModal from "./AddBookModal";
import SearchComponent from "./SearchComponent";

function LibraryHeader() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [wantToRead, setWantToRead] = useState([]);
    const [currentlyReading, setCurrentlyReading] = useState([]);
    const [finishedReading, setFinishedReading] = useState([]);
    const [activeSection, setActiveSection] = useState("Want To Read");

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const addBookToSection = (book, section) => {
        if (section === "Want To Read") {
            setWantToRead([...wantToRead, book]);
        } else if (section === "Currently Reading") {
            setCurrentlyReading([...currentlyReading, book]);
        } else if (section === "Finished Reading") {
            setFinishedReading([...finishedReading, book]);
        }
    };

    const renderSection = () => {
        switch (activeSection) {
            case "Want To Read":
                return <WantToRead books={wantToRead} />;
            case "Currently Reading":
                return <CurrentlyReading books={currentlyReading} />;
            case "Finished Reading":
                return <FinishedReading books={finishedReading} />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="library-header">
                <h1>Your Library</h1>
                <button onClick={openModal} className="buttonOther">Add Book</button>
            </div>
            <div className="search-component-container">
                <SearchComponent />

                <div className="library-navigation">
                    <button 
                        onClick={() => setActiveSection("Want To Read")} 
                        className={activeSection === "Want To Read" ? "active-button" : ""}
                    >
                        Want To Read
                    </button>
                    <button 
                        onClick={() => setActiveSection("Currently Reading")} 
                        className={activeSection === "Currently Reading" ? "active-button" : ""}
                    >
                        Currently Reading
                    </button>
                    <button 
                        onClick={() => setActiveSection("Finished Reading")} 
                        className={activeSection === "Finished Reading" ? "active-button" : ""}
                    >
                        Finished Reading
                    </button>
                </div>

                <div className="library-content">
                    {renderSection()}</div>
            </div>

            {isModalOpen && (
                <AddBookModal
                    onClose={closeModal}
                    onAddBook={addBookToSection}
                />
            )}
        </>
    );
}

export default LibraryHeader;

