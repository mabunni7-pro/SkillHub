import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import logo from '../assets/logo.jpg';
const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo}alt="logo"/>
        <div className='nav-contain'>
            <Link className="link" to="Home"smooth={true} duration={500} activeClass="active">Home</Link>
            <Link className="link" to="Login"smooth={true} duration={500} activeClass="active">Login</Link>
            <Link className="link" to="Sign up"smooth={true} duration={500} activeClass="active">Sign up</Link>
        </div>
    </div>
  )
}

export default Navbar