import { useNavigate } from "react-router-dom"
import LibraryHeader from "../components/LibraryHeader"
import SearchComponent from "../components/SearchComponent"



function Library() {
    const navigate = useNavigate()
return (
    <div className="main-content">
        <div className="overlay">
        <div className="library-container">
        <div className="library-header-container">
            <LibraryHeader/>
            <SearchComponent/>
        </div>
        <div className="library-buttons">
        <button onClick={()=>navigate("want-to-read")}>Want To Read</button>
        
        <button onClick={()=>navigate("currently-reading")}>Currently Reading</button>

        <button onClick={()=>navigate("finished-reading")}>Finished Reading</button>
        </div>

        </div>
        </div>
    </div>
)
}

export default Library