import React from "react";
import "./Heading.css";

function Heading({ text }) {
  return (
    <div className="heading">
      <p>{text}</p>
    </div>
  );
}

export default Heading;
