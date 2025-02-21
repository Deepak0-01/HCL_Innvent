import React from "react";
import ExchangeRates from './ExchangeRates';
import InterestRate from "./InterestRate";
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <ExchangeRates />
      <InterestRate />
    </div>
  );
};

export default Dashboard;
