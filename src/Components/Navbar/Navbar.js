import React from 'react';
import { Container} from 'react-bootstrap';
import './navbar.css';

function Navbar() {
    
  return (
    <div className="navbar">
        <Container className="d-flex justify-content-between align-items-center">
            <div className="logo">
                <img src="./img/Group.svg" alt="<logo>" />
            </div>
            <div className="hamburger">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
            <ul className="menu d-flex justify-content-between align-items-center">
                <li><a href="#">About Me</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Portfolio</a></li>
                <li className="contact-btn"><a href="#">Contact Me</a></li>
            </ul>
        </Container>
    </div>
  );
}

export default Navbar;
