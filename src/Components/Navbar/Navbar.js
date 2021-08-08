import React from 'react';
import { Container, Navbar, Row } from 'react-bootstrap';
import './navbar.css';

function App() {
  return (
    <div className="navbar">
        <Container>
            <div className="logo">
                <img src="./img/Group.svg" alt="<logo>" />
            </div>
            <div className="hamburger">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
            <ul>
                <li>About Me</li>
                <li>Skills</li>
                <li>Portfolio</li>
                <li className="contact-btn">Contact Me</li>
            </ul>
        </Container>
    </div>
  );
}

export default App;
