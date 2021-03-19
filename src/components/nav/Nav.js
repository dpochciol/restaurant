import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom';
import logo from "../../img/logo.png";



const Nav = () => {
  return (<div>
    <ReactBootStrap.Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
      <ReactBootStrap.Navbar.Brand href="/"><img style={{height:56}} src={logo} alt=""/></ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.Nav.Link href="/">About</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/results">All Result</ReactBootStrap.Nav.Link>
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




