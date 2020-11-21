import React from 'react';
import { Navbar } from 'react-bootstrap';

function Navigation(){
    return(
      <div className="container-fluid">
          <Navbar>
                <Navbar.Brand href="#home">DSC MEC</Navbar.Brand>
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