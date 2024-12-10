import React, { useState } from "react";
import "../styles/sidebar.css";
import logoImg from "../assets/login/logo.png";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const openIcon = (<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 700 960" width="20px" fill="#e8eaed"><path d="M288-88.35 212.35-164l316-316-316-316L288-871.65 679.65-480 288-88.35Z"/></svg>);
  const closeIcon = (<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 700 960" width="20px" fill="#e8eaed"><path d="M391.65-88.35 0-480l391.65-391.65L467.3-796l-316 316 316 316-75.65 75.65Z"/></svg>);

  const registerIcon = (<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M263.79-192Q234-192 213-213.21t-21-51Q192-294 213.21-315t51-21Q294-336 315-314.79t21 51Q336-234 314.79-213t-51 21Zm0-216Q234-408 213-429.21t-21-51Q192-510 213.21-531t51-21Q294-552 315-530.79t21 51Q336-450 314.79-429t-51 21Zm0-216Q234-624 213-645.21t-21-51Q192-726 213.21-747t51-21Q294-768 315-746.79t21 51Q336-666 314.79-645t-51 21Zm216 0Q450-624 429-645.21t-21-51Q408-726 429.21-747t51-21Q510-768 531-746.79t21 51Q552-666 530.79-645t-51 21Zm216 0Q666-624 645-645.21t-21-51Q624-726 645.21-747t51-21Q726-768 747-746.79t21 51Q768-666 746.79-645t-51 21Zm-216 216Q450-408 429-429.21t-21-51Q408-510 429.21-531t51-21Q510-552 531-530.79t21 51Q552-450 530.79-429t-51 21ZM528-192v-113l210-209q7.26-7.41 16.13-10.71Q763-528 771.76-528q9.55 0 18.31 3.5Q798.83-521 806-514l44 45q6.59 7.26 10.29 16.13Q864-444 864-435.24t-3.29 17.92q-3.3 9.15-10.71 16.32L641-192H528Zm288-243-45-45 45 45ZM576-240h45l115-115-22-23-22-22-116 115v45Zm138-138-22-22 44 45-22-23Z"/></svg>);
  const viewPetsIcon = (<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M336-264h456v-96H336v96ZM168-600h96v-96h-96v96Zm0 168h96v-96h-96v96Zm0 168h96v-96h-96v96Zm168-168h456v-96H336v96Zm0-168h456v-96H336v96ZM168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Z"/></svg>);
  const scheduleIcon = (<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M216-96q-29.7 0-50.85-21.15Q144-138.3 144-168v-528q0-29 21.5-50.5T216-768h72v-96h72v96h240v-96h72v96h72q29 0 50.5 21.5T816-696v216h-72v-48H216v360h288v72H216Zm0-504h528v-96H216v96Zm0 0v-96 96ZM576-96v-113l210-209q7.26-7.41 16.13-10.71Q811-432 819.76-432q9.55 0 18.31 3.5Q846.83-425 854-418l44 45q6.59 7.26 10.29 16.13Q912-348 912-339.24t-3.29 17.92q-3.3 9.15-10.71 16.32L689-96H576Zm288-243-45-45 45 45ZM624-144h45l115-115-22-23-22-22-116 115v45Zm138-138-22-22 44 45-22-23Z"/></svg>);
  const dropIcon = (<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M480-384 288-576h384L480-384Z"/></svg>);

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
            <a href="/home">
              <img className="onboarding-logo-top" src={logoImg} alt="Logo" />
            </a>
          </div>
          <ul>
            <li>
              <a href="/pet-registration"> {registerIcon} Register a Pet</a>
            </li>
            <li>
              <a href="/user-pets"> {viewPetsIcon} Registered Pets</a>
            </li>
            <li>
              <a href="/schedule-services">{scheduleIcon} Schedule a Service</a>
            </li>
            <li>
              {dropIcon}
              <button className="sb-dropdown-btn" onClick={toggleDropdown}>
                Appointments
              </button>
              <ul
                className={`sb-dropdown ${
                  isDropDownOpen ? "active" : ""
                }`}
                style={{
                  maxHeight: isDropDownOpen ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <li className="dd-li">
                  <a href="/scheduled-appointments">Pending Appointments</a>
                </li>
                <li className="dd-li">
                  <a href="/upcoming-appointments">Upcoming Appointments</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
  
}

export default Sidebar;
