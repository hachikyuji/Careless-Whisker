import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import logoImg from "../assets/login/logo.png";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "../components/LoadingIndicator";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when the form is submitted

    try {
      const res = await api.post("/api/token/", { username, password });
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate("/");
    } catch (error) {
      alert("Login failed. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="login-page">
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

      <div className="login-content">
        <div className="login-left">
          <div className="left-image-text">
            <p>Because your pet deserves the best!</p>
          </div>
        </div>

        <div className="login-right">
          <div className="form-logo">
            <img className="logo-top" src={logoImg} alt="Logo" />
          </div>

          {/* Implement the form directly here */}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="loading-container">
              {loading && <LoadingIndicator />}
            </div>
            <button type="submit" className="login-submit">
              Login
            </button>
          </form>

          <div className="sign-up">
            New pet owner?{" "}
            <a href="/register" className="sign-up-link">
              Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
