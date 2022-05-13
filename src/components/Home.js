import "../css/Home.css"
import {AiOutlineArrowRight} from "react-icons/ai";
import Navbar from "./Navbar";

const  Home = ({blogs}) => {
    const limitedBlogs = blogs.filter((blog) => {
        if(blog.id < 7) {
            return true;
        }
    })
    return (
        <div className="home_main">
            <Navbar />
            <div className="home_introduction">
                <div className="introduction-left">
                    <h1>Welcome to Help Philippine Schools Foundation.</h1>
                    <p>Help children get the best education possible through the betterment of existing schools, working "from the inside out"</p>
                    <p>"If you plant the seed, They will Succeed"</p>
                    <button>
                        <span>Learn more</span> 
                        <AiOutlineArrowRight/>
                    </button>
                </div>
                <div className="introduction-right">
                    <img id="logo" src={require("../images/logo.jpeg")} />
                    <img src={require("../images/robert-plane.jpeg")} />
                </div>
            </div>
            <div className="home_wits">
                <h3>WITS (Wagner Interactive Teaching System)</h3>
                <p>Comprised of a teacher’s laptop coupled with a smart projector</p>
                <div className="tech-donations">
                    <h3>Tablet Laptop for Teachers</h3>
                    <h3>UNIC UC46 Board Projectors</h3>
                    <h3>Solar Lights for Student Use</h3>
                </div>
                <div className="custom-shape-divider-bottom-1652303261">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div className="news-updates">
                <h1>News & Updates</h1>
                <div className="blogs-container">
                    {limitedBlogs.map(blog => {
                        return <div key={blog.id} className="blog">
                            <span>
                                <p>{blog.date}</p>
                                <h3>{blog.title}</h3>
                            </span>
                        </div>
                    })}
                </div>
                <div className="see-more-button">
                    <button>
                        See more
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Home;