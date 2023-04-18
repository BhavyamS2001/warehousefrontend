import React from "react";
import "./style.css";

function OpManager() {
  return (
    <header>
      <main>
        <div className="main-content">
          <h2>Operations Dashboard</h2>
        </div>
        <div className="bubble-container">
          <div className="bubble">
            <p className="value"></p>
            <div className="bubble-title">
              <br></br>
              <h4>Total Orders</h4>
            </div>
          </div>
          <div className="bubble">
            <p className="value"></p>
            <div className="bubble-title">
              <br></br>
              <h4>Incoming Orders</h4>
            </div>
          </div>
          <div className="bubble">
            <p className="value"></p>
            <div className="bubble-title">
              <br></br>
              <h4>Outgoing Orders</h4>
            </div>
          </div>
        </div>
      </main>
      <button className="status-button">Check Storage Status</button>
      <button className="status-button">Check Driver Status</button>
    </header>
  );
}

export default OpManager;
