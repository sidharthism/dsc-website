import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo.svg';
import discord from '../../assets/svg/discord.svg';

import './Navbar.css'

function Navigation(){
    return(
      <div className="container-fluid">
          <Navbar>
            <Navbar.Brand href="#home">
                <img src={ logo } alt="Home"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav className="nav-items">
                <Nav.Link href="#home" className="nav-item">
                    Home
                </Nav.Link>
                <Nav.Link href="#events"className="nav-item">
                    Events
                </Nav.Link>
                <Nav.Link href="#team"className="nav-item">
                    Team
                </Nav.Link>
                <Nav.Link href="#videos"className="nav-item">
                    Videos
                </Nav.Link>
                <Nav.Link href="#contacts"className="nav-item">
                    Contact Us
                </Nav.Link>
                <Nav.Link href="#discord">
                    <div className="discord-container">
                        <img src={ discord } alt="Home"/>
                    </div>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    );
}

export default Navigation;