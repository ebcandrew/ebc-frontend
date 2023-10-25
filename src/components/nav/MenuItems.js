import { useState } from "react";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const MenuItems = ({ items, depthLevel, className }) => {
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  return (
    <li
      className={"menu-items " + className || ""}
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => navigate(items.url)}
          >
            {items.title}{" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;
