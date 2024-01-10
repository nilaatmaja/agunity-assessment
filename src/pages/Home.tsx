import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="app-container">
            <div className="menu-container">
                <h1>AgUnity Challenge</h1>
                <div className="menu-cta-container">
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate("/challenge1")}
                    >
                        Challenge 1
                    </button>
                    <button
                        className="btn"
                        onClick={() => navigate("/challenge2")}
                    >
                        Challenge 2
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
