// SideBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';

//http://localhost:4000/api/hello <FontAwesomeIcon icon="fa-solid fa-mug-saucer" />
const SideBar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <nav className="mynav">
          <ul>
            <li>
              <Link to="/">
                {' '}
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li>
              <Link to="/read">
                {' '}
                <FontAwesomeIcon icon={faUser} /> Users
              </Link>
            </li>
            <li>
              <Link to="/Xampp">
                {' '}
                <FontAwesomeIcon icon={faMugSaucer} /> TryBE
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default SideBar;
