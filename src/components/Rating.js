import React from "react";

const Rating = ({ rate }) => {
  const width = rate * 10;
  return (
    <div className="rate-info">
      <div className="rate">
        <div className="gold" style={{ width: `${width}%` }}></div>
      </div>
      <span>{rate}</span>
    </div>
  );
};

export default Rating;
