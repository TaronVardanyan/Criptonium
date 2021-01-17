import React from 'react';
import logo from './logo.png';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
  
    return (
    <div className="Header">
      <Link to="/">
        <img src={logo} alt="React Coin Logo" className="Header-logo"></img>
    </Link>
    </div>
    )
}



export default Header;