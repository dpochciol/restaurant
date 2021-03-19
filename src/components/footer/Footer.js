import React from 'react';
import "../footer/Footer.css";
import * as ReactBootStrap from "react-bootstrap";



const Footer = () => {
    return (<div className="ft-container">

        <ReactBootStrap.Navbar expand="lg" bg="dark" variant="dark" fixed="bottom">
            <ReactBootStrap.Navbar.Text > Created on 19 March 2021</ReactBootStrap.Navbar.Text>
        </ReactBootStrap.Navbar>

    </div>

    );
}
export default Footer;
