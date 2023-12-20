// NavBar.js


import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
  return (
    <nav className = "mynav">
        <div className = "mynavicon">
        <FontAwesomeIcon icon={faBars} />
        </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/read">Users</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
