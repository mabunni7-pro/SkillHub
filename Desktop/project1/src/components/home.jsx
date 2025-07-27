import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';
import logo from '../assets/logo.jpg';
const Home = () => {
  return (
    <div className='Home-container'>
      <div className="div">
          <h1 className="h1"> welcome to Skillhub </h1>
          <p>Learn HTML,CSS,JavaScript,and React from Zero to Hero</p>
          <p>Practice Interview Questions.Build Projects,and Track your Profile</p>
      </div>
            <img src={logo} alt="logo"/>
    </div>
  )
}

export default Home