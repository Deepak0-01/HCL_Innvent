import React, { useState } from "react";
import "../styles/Card.css";

const InterestRate = () => {
  const [selectedCountry, setSelectedCountry] = useState("USA");
  const [interestRate, setInterestRate] = useState("5.25%");

  const countryRates = {
    USA: "5.25%",
    EU: "4.50%",
    India: "6.50%",
    UK: "5.25%",
    Australia: "4.10%",
    Canada: "5.00%",
    Japan: "-0.10%",
    China: "3.45%"
  };

  return (
    <div className="card">
      <h3>📊 Interest Rate</h3>
      <div className="dropdowns">
        <select value={selectedCountry} onChange={(e) => {
          setSelectedCountry(e.target.value);
          setInterestRate(countryRates[e.target.value]);
        }}>
          {Object.keys(countryRates).map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
      <div className="rate-display">
        <span>{interestRate}</span>
      </div>
    </div>
  );
};

export default InterestRate;
