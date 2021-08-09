import React from 'react';
import { Container} from 'react-bootstrap';
import './header.css';

function Header() {
  return (
    <div id="header">
        <Container className="header">
            <div className="header_top">
                <p className="header_title">Hi, I am</p>
                <p className="header_name">Jalolov Murodxon</p>
                <code className="header_jobs">Front-end Developer/Web Designer</code>
            </div>
            <div className="header_bottom">
                <div className="header_media"><img src="./img/github.svg" alt="..." /></div>
                <div className="header_media"><img className="tg" src="./img/telegram-black.png" alt="..." /></div>
                <div className="header_media"><img src="./img/telegram-black.png" alt="..." /></div>
            </div>
        </Container>
        <img className="background-img" src="./img/black-well.svg" />
    </div>
  );
}

export default Header;