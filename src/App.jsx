import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ExchangeRate from "./components/ExchangeRates";
import InterestRate from "./components/InterestRate";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./views/Home";
import InterestRates from "./components/InterestRates";
import Goals from "./components/Goals";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="main">
          {/* <ExchangeRate />
          <InterestRate /> */}
          <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={ <Dashboard/>} />
      <Route path="/interest-rate" element={ <InterestRates/>} />
      <Route path="/goals" element={ <Goals/>} />
    </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
