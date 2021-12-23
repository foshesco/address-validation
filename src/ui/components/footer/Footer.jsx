import React from 'react';
import { Link } from "react-router-dom";
import './footer-common.css';


const Footer = () => {

    return (
        <div className="footer-container">
            <div>Eaglize</div>
            <div>Designed and Developer by Erik</div>
            <div>
                <Link to='/' className="footerLink">Home&nbsp;</Link>|
                <Link to='/addresscheck' className="footerLink">&nbsp;Address Check&nbsp;</Link>|
                <Link to='/cityandstate' className="footerLink">&nbsp;City & State&nbsp;</Link>|
                <Link to='/documents' className="footerLink">&nbsp;Documents</Link>
            </div>
        </div>
    )
}

export default Footer