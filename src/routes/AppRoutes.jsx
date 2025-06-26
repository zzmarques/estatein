import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "../Pages/Home";
import About from "../Pages/About";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;