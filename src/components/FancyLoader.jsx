import React from "react";
import '../styles/FancyLoader.css';

const FancyLoader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <span>Predicting Future Interest Rates...</span>
      </div>
    </div>
  );
};

export default FancyLoader;
