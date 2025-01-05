import { useNavigate } from "react-router-dom"


function TabsButtons() {
    const navigate = useNavigate()
return (
    <div className="library-buttons">
        <button onClick={()=>navigate("want-to-read")}>Want To Read</button>
        
        <button onClick={()=>navigate("currently-reading")}>Currently Reading</button>

        <button onClick={()=>navigate("finished-reading")}>Finished Reading</button>
        </div>
)
}

export default TabsButtons