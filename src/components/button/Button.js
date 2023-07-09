import React from "react";
import "./Button.css";

function Button({ text, onClick }) {
  return (
    <div onClick={onClick} className="button">
      {text}
    </div>
  );
}

export default Button;
