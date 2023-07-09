import React from "react";

const TextField = ({ handleChange, value, index, placeholder }) => {
  return (
    <p>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange({value:e.target.value, index})}
        className="spicie__rows__input"
        placeholder={placeholder}
      />
    </p>
  );
};

export default TextField;
