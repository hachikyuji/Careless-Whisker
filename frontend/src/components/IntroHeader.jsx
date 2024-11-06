import React, { useState } from "react";
import logoImg from "../assets/login/logo.png";
import "../styles/login.css";

function IntroHeader(){
    return (
    <header className="header">
      <div className="header-left">
        <img className="logo" src={logoImg} alt="Logo" />
        <button className="nav-button">Our Mission</button>
        <button className="nav-button">Team</button>
        <button className="nav-button">Services</button>
      </div>

      <div className="header-center"></div>

      <div className="header-right">
        <button className="schedule-now-btn">Schedule Now</button>
      </div>
    </header>
    );
}

export default IntroHeader;