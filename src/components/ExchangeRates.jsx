import React, { useState } from "react";
import "../styles/Card.css";

const currencyList = [
  "USD", "EUR", "INR", "GBP", "AUD", "CAD", "JPY", "CNY", "CHF", "SGD",
  "HKD", "NZD", "SEK", "KRW", "NOK", "MXN", "BRL", "ZAR", "RUB", "TRY"
];

const ExchangeRate = () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("INR");
  const [rate, setRate] = useState("82.5");
  const cardStyle = {
    height: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  };

  return (
    <div className="card">
      <h3>💱 Exchange Rate</h3>
      <div style={cardStyle} className="dropdowns">
        <select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
          {currencyList.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
        <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
          {currencyList.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <div className="rate-display">
        <span>{rate}</span>
      </div>
    </div>
  );
};

export default ExchangeRate;
