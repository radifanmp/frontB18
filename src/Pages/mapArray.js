import React from "react";
import "../App.css";

export default function mapArray() {
  const Cars = ["Mercedes-Benz", "Audi", "BMW", "Avanza"];
  return (
    <div className="App-header">
      {Cars.map((car, index) => (
        <p key={index}>{car}</p>
      ))}
    </div>
  );
}
