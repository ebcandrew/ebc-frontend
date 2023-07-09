import React, { useState } from "react";
import { ArrowDropDownIcon } from "../../../components/imports/icons/Icons";

const Dropdown = ({ index, handleDropdown, options, placeholder }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSpeciesSelection = (value) => {
    handleDropdown({ value, index });
    setSelectedItem(value);
    setIsOpen(false);
  }; 

  return (
    <>
      <div className="dropdown-header" onClick={handleDropdownClick}>
        <p>{selectedItem || placeholder}</p>
        <p>
          <ArrowDropDownIcon />
        </p>
      </div>
      {isOpen && (
        <div className="dropdown-list">
          {options && options.map((item, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleSpeciesSelection(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Dropdown;
