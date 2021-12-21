import { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let { toggleDarkMode, darkMode } = this.props;
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light headerContainer" style={{ backgroundColor: '#3744a4', color: 'white' }}>
                    <button class="navbar-toggler color-me" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <NavLink class="navbar-brand color-me" to="/">Address Validation</NavLink>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class='nav-item'>
                                <NavLink className="nav-link color-me" activeClassName="active" to="/rankings">Address Validation</NavLink>
                            </li>
                            <li class='nav-item'>
                                <NavLink className="nav-link color-me" activeClassName="active" to="/leaderboard">Documents</NavLink>
                            </li>
                            <li class='nav-item'>
                                <NavLink className="nav-link color-me" activeClassName="active" to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button onClick={toggleDarkMode} type="button" class={darkMode ? "btn btn-dark" : "btn btn-light"}>{darkMode ? "Light" : "Dark"}</button>
                    </div>
                </nav>
            </div>
        )
    }
}