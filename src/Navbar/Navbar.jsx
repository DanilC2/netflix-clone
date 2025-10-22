import React from 'react';
import logo from '../assets/logo.png';
import search_icon from '../assets/search_icon.svg';
import bell_icon from '../assets/bell_icon.svg';
import back_arrow_icon from '../assets/back_arrow_icon.png';
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search" className='icons' />
        <img src={bell_icon} alt="Notifications" className='icons' />
      </div>
    </div>
  );
}

export default Navbar;
