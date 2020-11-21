import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../../assets/img/logo.svg';

function Navigation(props){
    return(
      <div className="container-fluid">
          <Navbar>
                <Navbar.Brand href="#home"><img src={ logo } alt="Home"/></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        
                    </Navbar.Text>
                </Navbar.Collapse>
          </Navbar>
      </div>
    );
}

export default Navigation;