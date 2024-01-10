import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Challenge1 from "./pages/Challenge1";
import Challenge2 from "./pages/Challenge2";
import "./assets/css/style.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/challenge1" element={<Challenge1 />} />
                <Route path="/challenge2" element={<Challenge2 />} />
            </Routes>
        </Router>
    );
}

export default App;
