import React from 'react'
import { Button } from 'react-bootstrap';

import logo from '../../assets/img/logo.svg'

import './Landing.css'


function Landing() {
    return (
        <div className="landing">
            <div className="landingLeft">
                <div className="landingLeftHeader">
                    <div className="LeftHeaderLogo">
                        <img src={logo} alt="dsc" />
                    </div>
                    <div className="LeftHeaderText">
                        <h3>Developer Students Club</h3>
                        <h4>MEC</h4>
                    </div>
                </div>
                <div className="landingLeftInfo">
                    <h4>Helping students bridge the gap between theory and practice</h4>
                </div>
                <div className="joinButton">
                    <Button variant="success">
                        JOIN NOW
                    </Button> 
                </div>


            </div>
            <div className="landingRight">
                <h2>Mascots!!</h2>
            </div>
        </div>
    )
}

export default Landing


