import {NavLink} from "react-router-dom"
function NavBar() {
    return (
    <div className="navbar-container">
        <div className="menu-items-container">
            <div className="logo">
                <h2>BookNest</h2>
            </div>

            <div className="navlink-container">
                <nav className="nav">
                    <ul>
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"library"}>Library</NavLink>
                        <NavLink to={"about"}>About</NavLink>

                    </ul>
                </nav>
            </div>
        </div>

    </div>
    )
}

export default NavBar