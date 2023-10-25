import React, { useState } from "react";
import "../Draft.css";
import {
  ToggleOnIcon,
  ToggleOffIcon,
} from "../../../components/imports/icons/Icons";
import { useEffect } from "react";

const ShadowIcon = ({index, handleShadow}) => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    handleShadow(isActive, index);
  }, []);

   const handleClick = () => {
     const updatedIsActive = !isActive;
     setIsActive(updatedIsActive);
     handleShadow(updatedIsActive, index);
   };

  return (
    <div className="spicie__select__btn">
      <p>shadow</p>

      <p className={isActive ? "active" : "inactive"} onClick={handleClick}>
        {isActive ? <ToggleOnIcon /> : <ToggleOffIcon />}
      </p>
    </div>
  );
};

export default ShadowIcon;