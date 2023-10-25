import React, { useContext, useEffect, useState } from "react";

import "./Nav.css";
import {
  FBLogo,
  Instagram,
  Logo,
  Message,
  Search,
  Twitter,
  Web,
  Youtube,
} from "../imports/imgs/Images";
import { BsGlobe } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { DnsIcon, CloseIcon, AccountCircleIcon } from "../imports/icons/Icons";
import axios from "../../axios";
import { AuthContext } from "../../context/AuthContext";
import MenuItems from "./MenuItems";
import { MenuData } from "./MenuData";

const menuItems = MenuData;
const PcNav = () => {
  const [userDetails, setUserDetails] = useState([]);

  const { user } = useContext(AuthContext);
  console.log(user);

  const [showSearchBox, setShowSearchBox] = useState(false);
  console.log(showSearchBox);
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState(false);
  const [adminModal, setAdminModal] = useState(false);

  const categories = ["profile", "logout"];
  const adminCategories = ["profile", "logout", "admin panel"];

  useEffect(() => {
    const keyDownHandler = (event) => {
      console.log("User pressed: ", event.key);

      if (event.key === "Enter") {
        event.preventDefault();

        // 👇️ your logic here
        window.location.replace(`/search/${query}`);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [query]);

  const handleAdminModalItem = (e) => {
    if (e == "profile") {
      window.location.href = "/profile";
    } else if (e == "admin panel") {
      window.location.href = "/adminboard";
    } else if (e == "logout") {
      localStorage.setItem("user", null);
      localStorage.setItem("users", null);

      document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      window.location.href = "/";
    }
  };

  const handleModalItem = (e) => {
    if (e == "profile") {
      window.location.href = "/profile";
    } else {
      localStorage.clear();
      document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      window.location.href = "/";
    }
  };

  //   try {
  //     const fetchUser = async () => {
  //       await axios("/users/me").then((res) => {
  //         console.log(res.data?.data);

  //         if (localStorage.getItem("users").length !== 0) {
  //           // console.log("Local storage is empty");
  //           setUserDetails(res.data?.data);
  //         }
  //       });
  //     };

  //     fetchUser();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  const handleSearchDropDown = () => {
    setShowSearchBox(true);
    setToggleMenu(false);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const handleAdminModal = () => {
    setAdminModal(!adminModal);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const NavLinks = () => {
    return (
      <nav>
        <ul className="menus">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItems items={menu} key={index} depthLevel={depthLevel} />
            );
          })}
        </ul>
      </nav>
    );
  };

  const Icons = () => {
    return (
      <div className="IconMenu">
        <a
          href="https://www.facebook.com/people/EBC-Esports/100092606197171/
"
        >
          <img src={FBLogo} alt="" />
        </a>
        <a
          href="https://instagram.com/ebc_esports?igshid=ZGUzMzM3NWJiOQ==

"
          target={"_blank"}
        >
          <img src={Instagram} alt="" />
        </a>
        <a
          href="https://www.twitch.tv/ebc_esports
"
          target={"_blank"}
        >
          <img src={Message} alt="" />
        </a>
        <a
          href="https://twitter.com/ebc_esports
"
          target={"_blank"}
        >
          <img src={Twitter} alt="" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCjJqDd6PV05Wk9Eow4ckOKQ
"
          target={"_blank"}
        >
          <img src={Youtube} alt="" />
        </a>

        {user ? (
          <>
            <p
              href="/profile"
              className="account__icon"
              onClick={
                user?.role === "admin" || user?.user?.role === "admin"
                  ? handleAdminModal
                  : handleModal
              }
            >
              {/* <img src={Web} alt="" /> */}
              <AccountCircleIcon color="inherit" />
            </p>

            {modal && (
              <div className="catmodal">
                {categories.map((item, index) => {
                  return (
                    <div className="catmodal__item" key={index}>
                      <p onClick={() => handleModalItem(item)}>{item}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {adminModal && (
              <div className="catmodal">
                {adminCategories.map((item, index) => {
                  return (
                    <div className="catmodal__item" key={index}>
                      <p onClick={() => handleAdminModalItem(item)}>{item}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        ) : null}

        <a className="GlobeWrapper">
          <BsGlobe className="GlobeIcon" />
        </a>
        <a className="GlobeWrapper">
          <HiOutlineSearch className="GlobeIcon" />
        </a>

        {/* HiOutlineSearch */}
        {/* {!showSearchBox && (
          <img src={Search} alt="" onClick={handleSearchDropDown} />
        )} */}
      </div>
    );
  };
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="pcnav container">
      <div className="pcnav__logo">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
      </div>

      <div className="pcnav__navlinks">
        <NavLinks />
      </div>

      {!showSearchBox && (
        <div className="pcnav__icons">
          <Icons className="NavIconsMenu" />
        </div>
      )}
      <div className="pcnav_menu_toggle">
        {toggleMenu ? (
          <div className="NavCloseIcon">
            <CloseIcon
              onClick={() => {
                setToggleMenu(false);
              }}
            />
          </div>
        ) : (
          <div>
            <DnsIcon
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          </div>
        )}
        {toggleMenu && (
          <div className=" pcnav_toggle_design">
            <div>
              <NavLinks />
            </div>
            <div className="pcnav_icons_mobile">
              <Icons />
            </div>
          </div>
        )}
      </div>

      {/* {showSearchBox ? (
        <div className="showsearchbox">
          <input
            type="search"
            placeholder="search tournaments, blogs, users"
            id=""
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className="NavCloseIcon" onClick={() => setShowSearchBox(false)}>
            <CloseIcon />
          </div>
        </div>
      ) : null} */}
    </div>
  );
};

function Nav() {
  return (
    <div>
      <PcNav />
    </div>
  );
}

export default Nav;
