import React from "react";
import { Link } from "react-router-dom";
import './home-common.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-copy">
                Eaglize is proud to offer free Address Checks and City & State Lookups in partnership with the United States Postal Service. Feel free to navigate to one of these services or for more information, check out our <Link className="nav-link-home nav-link-home-ltr" to="/documents">info</Link> section.
            </div>
        </div>
    )
}

export default Home