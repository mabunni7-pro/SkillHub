import React from 'react';
import './footer.css';
import insta from '../assets/insta.png';
import you from '../assets/you.png';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
    <a href="https://www.instagram.com/crafty_capturemots/#" target="_blank" >
        <img src={insta} alt="insta"/>
    </a>
    <a href="https://youtube.com/@dmabuni" target="_blank">
        <img src={you} alt="youtube"/>
    </a>
    <div className='name'>
        <h3>Designed by:MABUNNI,MAHIMA</h3>
    </div>
    </div>
  )
}

export default Footer