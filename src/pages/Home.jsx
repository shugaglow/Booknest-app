import Button from "../components/Button";


function Home() {
return (
    <div className="main-content">
        <div className="overlay">
        <div className="content">
            <h1>Welcome to BookNest!</h1>
            <p>Your go-to app for organizing and tracking your personal library. <br />Manage your reading effortlessly!</p>
            

            <div className="button-container">
            <Button buttonName="Get Started" className="button-home" />
            </div>
        </div>
    </div>
    </div>
);
}

export default Home;
