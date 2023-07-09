import React from "react";
import { ArrowDropDownIcon } from "../imports/icons/Icons";
import "./Button.css";

function ArrowBtn({ text, onClick, isOpen, dropdownOptions, onSelect }) {
  return (
    <div className="arrowbtn" onClick={onClick}>
      <p>{text}</p>

      <p>
        <ArrowDropDownIcon />
      </p>

      {isOpen && (
        <div className="dropdown-menu">
          {dropdownOptions.map((option) => (
            <p
              key={option}
              className="dropdown-item"
              onClick={() => onSelect(option)}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default ArrowBtn;
