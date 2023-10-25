import React from "react";
import "./Curved.css";

function Curved({ text }) {
  console.log(text);
  return (
    <div className="CurvedBTN">
      <span> {text}</span>
    </div>
  );

  // return <div className="button">{text}</div>;
}

export default Curved;
