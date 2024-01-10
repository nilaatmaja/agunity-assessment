import { useNavigate } from "react-router-dom";

const HomeButton = () => {
    const navigate = useNavigate();
    return (
        <button className="btn" onClick={() => navigate("/")}>
            Back to Home
        </button>
    );
};

export default HomeButton;
