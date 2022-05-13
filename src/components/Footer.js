import { Link } from "react-router-dom"
import "../css/Footer.css";
import {BsFacebook} from "react-icons/bs";
import {AiOutlineCopyrightCircle} from "react-icons/ai";
const  Footer = () => {
    return (
        <div className="footer_main">
            <div className="custom-shape-divider-top-1652422666">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
                </svg>
            </div>
            <div>
                <p><AiOutlineCopyrightCircle /> 2022 Help Philippine Schools</p>
                <p>Designed and Developed by: Emma Nagano | emmanagano.com</p>
            </div>
            <div>
                <span>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/news">News</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/schools">Schools</Link>
                </span>
                <BsFacebook />
            </div>
            <div>
                <p>PAVILION 10 B-1, BERTHAPHIL III CLARK CENTER,</p>
                <p>JOSE ABAD SANTOS AVENUE, CLARK FREEPORT ZONE 2023 PAMPANGA</p>
            </div>
        </div>
    )
};

export default Footer;