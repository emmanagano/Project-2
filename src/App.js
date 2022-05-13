import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import News from "./components/News";
import Schools from "./components/Schools";

import "./css/App.css";

const App = () => {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        try {
            const resp = await fetch("https://afternoon-ocean-09775.herokuapp.com/api/blog");
            const info = await resp.json();
            return info;
        } catch (error) {
            throw error;
        }
    }
    useEffect(() => {
        fetchBlogs().then((blog) => {
            setBlogs(blog);
        })
    },[])
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Home 
                        blogs={blogs}
                    />}
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