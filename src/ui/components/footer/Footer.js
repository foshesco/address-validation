import { Component } from "react";
import { Link } from "react-router-dom";
import './footer-common.css';


export default class Footer extends Component {
    componentDidMount() {

    }

    render() {

        return (
            <div className="footerContainer">
                <div>Albatross Valley</div>
                <div>All right reserved</div>
                <div>
                    <Link to='/' className="footerLink"> Home </Link> |
                    <Link to='/rankings' className="footerLink"> Rankings </Link> |
                    <Link to='/leaderboard' className="footerLink"> Leaderboard </Link> |
                    <Link to='/contact' className="footerLink"> Contact Us </Link>
                </div>
            </div>
        )
    }
}