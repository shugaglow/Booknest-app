import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"


function RootLayout() {
    return (
    <div className="main-page">
        <div className="nav-bar-segment">
            <NavBar />
        </div>

        <div className="main-content-segment">
            <Outlet/>
        </div>
    </div>
    )
}

export default RootLayout