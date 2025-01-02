import Button from "./Button"

function LibraryHeader() {
    return (
        <div className="library-header">
            <h1>Your Library</h1>
            <Button buttonName="Add Book" className="buttonOther" />
        </div>
)
}

export default LibraryHeader