import React from 'react';
import * as ReactBootStrap from "react-bootstrap";



const Nav = () => {
    return (<div>
        <ReactBootStrap.Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
            <ReactBootStrap.Navbar.Brand href="#home">Home</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto">
                    <ReactBootStrap.Nav.Link href="#features">About</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#pricing">Top Rated</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                    <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                        Sign In/Up
      </ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
    </div>

    );
}

export default Nav;




