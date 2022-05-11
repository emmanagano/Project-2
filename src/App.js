import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Schools from "./components/Schools";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
                <Route
                    path="/news"
                    element={<News />}
                />
                <Route
                    path="/gallery"
                    element={<Gallery />}
                />
                <Route
                    path="/schools"
                    element={<Schools />}
                />
            </Routes>
            <Footer />
        </>
    )
};

export default App;