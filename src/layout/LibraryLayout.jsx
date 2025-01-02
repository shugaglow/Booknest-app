import { Outlet } from "react-router-dom"
import Library from "../pages/Library"


function LibraryLayout() {
    return (
    <div className="library-layout">
        <Library/>
        <Outlet/>

    </div>
)
}

export default LibraryLayout