// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

// Import your defined components
import HomeComponent from "./components/Home"; // Adjust the path if necessary
import AboutComponent from "./components/AboutUs"; // Adjust the path if necessary
import LoginComponent from "./components/Login"; // Adjust the path if necessary
import AccountComponent from "./components/Account"; // Adjust the path if necessary
import WithdrawalCoins from "./components/WithdrawalCoins";

const App = () => {
  return (
    <Router>
      <div>
        <div className="main-header">
          <div className="navbar-title">
            <div>
              <h1>GameNexPlay</h1>
            </div>
            <div className="coins">
              <div className="img-container">
                <img
                  src="https://purepng.com/public/uploads/large/purepng.com-gold-coinsflatcoinsroundmetalgoldclipart-1421526479602pcbjc.png"
                  alt="Image"
                  className="coin-img"
                />
              </div>
              <div className="coin-container">
              <Link to="/Withdrawl">100000</Link>
              </div>
            </div>
          </div>
          <div className="links">
            <div className="link-items">
              <Link to="/home">Home</Link>
            </div>
            <div className="link-items">
              <Link to="/about">About us</Link>
            </div>
            <div className="link-items">
              <Link to="/login">Login/Signup</Link>
            </div>
            <div className="link-items">
              <Link to="/account">Account</Link>
            </div>
          </div>
        </div>

        {/* Define your routes here */}
        <Routes>
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/account" element={<AccountComponent />} />
          <Route path="/Withdrawl" element={<WithdrawalCoins />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
