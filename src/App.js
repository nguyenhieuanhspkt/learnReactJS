import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import Xampp from './components/Xampp';
import UpdateXampp from './components/updateXampp';
import React, { useState } from 'react';

//import NavBar from './components/navbar/navbar';
import SideBar from './components/sidebar/sidebar';
import './components/sidebar/sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div>
        <div className={`icon-container ${isSidebarOpen ? '' : 'collapsed'}`}>
          <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
        </div>
        <div className={`app-container ${isSidebarOpen ? '' : 'collapsed'}`}>
          <SideBar isOpen={isSidebarOpen} />
          <div className={`main-content ${isSidebarOpen ? '' : 'collapsed'}`}>
            <h2 className="main-header">React Crud Operations</h2>

            <Routes>
              <Route path="/create" element={<Create />} />
              <Route path="/read" element={<Read />} />
              <Route path="/Update" element={<Update />} />
              <Route path="/Xampp" element={<Xampp />} />
              <Route path="/updateXampp" element={<UpdateXampp />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
