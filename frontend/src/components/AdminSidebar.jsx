import React, { useState } from "react";
import "../styles/sidebar.css";
import logoImg from "../assets/login/logo.png";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const openIcon = (<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 700 960" width="20px" fill="#e8eaed"><path d="M288-88.35 212.35-164l316-316-316-316L288-871.65 679.65-480 288-88.35Z"/></svg>);
  const closeIcon = (<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 700 960" width="20px" fill="#e8eaed"><path d="M391.65-88.35 0-480l391.65-391.65L467.3-796l-316 316 316 316-75.65 75.65Z"/></svg>);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log("Sidebar open state: ", !isOpen);
  };

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  return (
    <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
            {isOpen ? closeIcon : openIcon}
        </button>

        <nav className="sidebar-links">
          <div className="sidebar-logo">
            <a href="/admin-home">
              <img className="onboarding-logo-top" src={logoImg} alt="Logo" />
            </a>
          </div>
            <ul>
                <li>
                  <button className="sb-dropdown-btn" onClick={toggleDropdown}>
                    Appointments
                  </button>
                  {isDropDownOpen && (
                    <ul className="sb-dropdown">
                      <li><a href="/admin-scheduled-services">Decide Appointments</a></li>
                      <li><a href="/admin-upcoming-appointments">Upcoming Appointments</a></li>
                    </ul>
                ) }
                </li>
                <li><a href="/admin-unfinished-appointments">Modify Appointments</a></li>
                <li><a href="/admin-pets">User Registered Pets</a></li>
            </ul>
        </nav>
      </div>
      <div className={`sidebar-overlay ${isOpen ? "active" : ""}`} onClick={toggleSidebar}></div>
    </div>
  );
}

export default Sidebar;
