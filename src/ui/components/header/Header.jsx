import React from "react";
import { NavLink } from "react-router-dom";
import './header-common.css';

const Header = (props) => {
    let { toggleDarkMode, darkMode } = props;
    return (
        <nav className="navbar navbar-expand-lg navbar-light custom-nav">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink className="navbar-brand" to="/"><img src="favicon-32x32.png" alt="Eaglize Icon" /><span className="eaglize-name">Eaglize</span></NavLink>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className='nav-item'>
                        <NavLink className="nav-link nav-link-ltr" activeClassName="active" to="/addresscheck" data-toggle="collapse" data-target=".navbar-collapse.show">Address Check</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link nav-link-ltr" activeClassName="active" to="/cityandstate" data-toggle="collapse" data-target=".navbar-collapse.show">City & State</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link nav-link-ltr" activeClassName="active" to="/documents" data-toggle="collapse" data-target=".navbar-collapse.show">Documents</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <button onClick={toggleDarkMode} type="button" className={darkMode ? "btn btn-dark" : "btn btn-light"}>{darkMode ? "Dark" : "Light"}</button>
            </div>
        </nav>
    )
}

export default Header