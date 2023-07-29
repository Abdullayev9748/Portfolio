import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="nav box">
        <Link to="/" className='nav__logo'><span>M</span> uhammadamin</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav__toggle"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav__list ms-auto">
            <NavLink to="/" className={({isActive})=> isActive ? "nav__link active" : "nav__link"}>Home</NavLink>
            <NavLink to="/skills" className={({isActive})=> isActive ? "nav__link active" : "nav__link"}>Front-end skills</NavLink>
            <NavLink to="/portfolio" className={({isActive})=> isActive ? "nav__link active" : "nav__link"}>Portfolio </NavLink>
            <NavLink to="/contact" className={({isActive})=> isActive ? "nav__link active" : "nav__link"}>Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar