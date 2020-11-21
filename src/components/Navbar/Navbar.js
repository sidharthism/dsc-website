import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo.svg';

function Navigation(){
    return(
      <div className="container-fluid">
          <Navbar>
            <Navbar.Brand href="#home">
                <img src={ logo } alt="Home"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
                <Nav.Link href="#home">
                    Home
                </Nav.Link>
                <Nav.Link href="#events">
                    Events
                </Nav.Link>
                <Nav.Link href="#team">
                    Team
                </Nav.Link>
                <Nav.Link href="#videos">
                    Videos
                </Nav.Link>
                <Nav.Link href="#contacts">
                    Contact Us
                </Nav.Link>
                <Nav.Link href="#discord">
                    <img src={ logo } alt="Home"/>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    );
}

export default Navigation;