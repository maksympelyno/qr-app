import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ScanQRCode from "./components/ScanQRCode.js";
import GenerateQRCode from "./components/GenerateQRCode.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>Welcome to QR Generator and Scanner</h2>
        <p>Please choose an option from the navigation above.</p>
        <div className="nav-links">
          <Link to="/generate" className="nav-link">
            <div className="card">
              <div className="card-content front">Generate</div>
              <div className="card-content back">
                <img
                  className="gif-back"
                  src="https://media.tenor.com/XDAe8PDHSIMAAAAM/downsign-qr-code.gif"
                  alt="Generating QR Code"
                />
              </div>
            </div>
          </Link>
          <Link to="/scan" className="nav-link">
            <div className="card">
              <div className="card-content front">Scan</div>
              <div className="card-content back">
                <img
                  className="gif-back"
                  src="https://media1.tenor.com/m/v2QyaMQdXGUAAAAd/price-scanner.gif"
                  alt="Scanning QR Code"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/generate" element={<GenerateQRCode />} />
        <Route path="/scan" element={<ScanQRCode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
