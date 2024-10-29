// src/App.jsx
import React from "react";
import "./App.css";


const App = () => {
  return (
    <div>
      <div className="main-header">
        <div className="navbar-title">
          <div>
            <h1>GameNexPlay</h1>
          </div>
          <div className="coins">
            <div className="img-container">
              <img src="https://purepng.com/public/uploads/large/purepng.com-gold-coinsflatcoinsroundmetalgoldclipart-1421526479602pcbjc.png" alt="Image" className="coin-img"></img>
            </div>
            <div className="coin-container">
              <p>100000</p>
            </div>
          </div>
        </div>
        <div className="links">
          <div className="link-items">
            <p>Home</p>
          </div>
          <div className="link-items">
            <p>About us</p>
          </div>
          <div className="link-items">
            <p>Login/Signup</p>
          </div>
          <div className="link-items">
            <p>Account</p>
          </div>
        </div>
      </div>
    </div>


  );
};

export default App;
