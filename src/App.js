// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Component/homepage";
import MyCartPage from "./Component/mycartpage";
import "../src/style.css"; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div>
      <nav className="navbar">
      <div className="shopping-cart">
          <p>Shopping Cart</p>
        </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-cart">My Cart</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/my-cart" element={<MyCartPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
