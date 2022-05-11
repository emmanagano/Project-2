import { Link } from "react-router-dom"
import "../css/Navbar.css"
const  Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/news">News</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/schools">Schools</Link>
        </div>
    )
};

export default Navbar;