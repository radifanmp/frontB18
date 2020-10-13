import React from "react";
import "../App.css";
import "../Font.css";

export default function Css() {
  return (
    <div className="App-header">
      <p style={{ color: "red", fontSize: 250 }}>This Red</p>
      <p style={styleInter.Blue}>This Red</p>
      <p style={styleInter.Orange}>This Red</p>
      <p className="Puprle">This Red</p>
    </div>
  );
}

const styleInter = {
  Blue: {
    color: "blue",
    fontSize: "300px",
  },
  Orange: {
    color: "Orange",
    fontSize: 400,
    fontWeight: "bold",
  },
};
