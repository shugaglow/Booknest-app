import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate()
return (
    <div className="main-content">
        <div className="overlay">
        <div className="content">
            <h1>Welcome to BookNest!</h1>
            <p>Your go-to app for organizing and tracking your personal library. <br />Manage your reading effortlessly!</p>
            

            <div className="button-container">
                <button onClick={()=>navigate("/library")} className="button-home">Get Started</button>
            </div>
        </div>
    </div>
    </div>
);
}

export default Home;
