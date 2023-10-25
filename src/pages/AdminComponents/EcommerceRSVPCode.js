import React from "react";
import { AdminHeroSectionImage } from "../../components/imports/imgs/Images";
import "./ManageTournaments.css";
import "./AdminPanelUsers.css";
import "./AdminBlog.css";
import "./EcommerceRSVPCode.css";
import "./AdminHostTournament.css";
import { Link } from "react-router-dom";
import { PagesDropdown } from "./ManageTournaments";
import { HeroSection } from "./AdminPanelUsers";
import { IoIosArrowDown } from "react-icons/io";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const EcommerceRSVPCode = () => {
  return (
    <>
      <HeroSection />
      <div className="Manage_container">
        <PagesDropdown />
        <div className="Blog_container">
          <h1>ECOMMERCE RSVP CODE</h1>
          <div className="RSVP_Container">
            <div className="Blog_Field" style={{ marginTop: "5%" }}>
              <div className="BlogFieldWrapper">
                <h2>Tournament</h2>
                <IoIosArrowDown className="BlogFieldIcon" />
              </div>

              <input type="text" placeholder="Type RSVP Code" />
            </div>
            <div className="Blog_Field">
              <h2>GENDER</h2>

              <select className="Bracket_Dropdown" name="style">
                <option value="">Choose Gender</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
                <option value="OTHERS">OTHERS</option>
              </select>
            </div>
            <div className="Blog_Field">
              <h2>REGION</h2>
              <select className="Bracket_Dropdown" name="style">
                <option value="">Choose Region</option>
                <option value="Region1">N.AMERICA</option>
                <option value="Region2">S.AMERICA</option>
                <option value="Region3">AFRICA</option>
                <option value="Region3">EUROPE</option>
                <option value="Region3">APAC</option>
              </select>
            </div>
            <div className="Blog_Field">
              <h2>SKILL LEVEL</h2>
              <select className="Bracket_Dropdown" name="style">
                <option value="">Choose Skill Level</option>
                <option value="Level1">ELITE</option>
                <option value="Level2">ACE</option>
                <option value="TopRated">CHALLENGER</option>
                <option value="TopRated">RIVAL</option>
                <option value="TopRated">TRAINEE</option>
              </select>
            </div>
            <div className="Blog_Field">
              <h2>FORMAT</h2>
              <select className="Bracket_Dropdown" name="style">
                <option value="">Choose Format</option>
                <option value="Great">Great</option>
                <option value="Ultra">Ultra</option>
                <option value="Master">Master</option>
              </select>
            </div>

            <div className="Blog_Field">
              <h2>QUANTITY</h2>
              <input
                type="number"
                max={64}
                min={0}
                placeholder="Type Quantity"
              />
            </div>

            <div className="Blog_Field">
              <h2>PRICE</h2>
              <input type="number" min={0} placeholder="Type Price" />
            </div>
            <div className="Blog_Field">
              <h2>ADDITIONAL NOTES </h2>
              <textarea type="text" placeholder="Type Additional Notes" />
            </div>
            <button className="Create-btn">Create Tournament CODE</button>
          </div>

          <div className="RSVP_Container">
            <div className="Blog_Field" style={{ marginTop: "5%" }}>
              <div className="BlogFieldWrapper">
                <h2>League</h2>
                <IoIosArrowDown className="BlogFieldIcon" />
              </div>
              <input type="text" placeholder="Type RSVP Code" />
            </div>
            <div className="Blog_Field">
              <h2>GENDER</h2>
              <select className="Bracket_Dropdown" name="style">
                <option value="">Choose Gender</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
                <option value="OTHERS">OTHERS</option>
              </select>
            </div>
            <div className="Blog_Field">
              <h2>REGION</h2>
              <select className="Bracket_Dropdown" name="style">
                <option value="">Choose Region</option>
                <option value="Region1">N.AMERICA</option>
                <option value="Region2">S.AMERICA</option>
                <option value="Region3">AFRICA</option>
                <option value="Region3">EUROPE</option>
                <option value="Region3">APAC</option>
              </select>
            </div>
            <div className="Blog_Field">
              <h2>SKILL LEVEL</h2>
              <select className="Bracket_Dropdown" name="style">
                <option value="">Choose Skill Level</option>
                <option value="Level1">ELITE</option>
                <option value="Level2">ACE</option>
                <option value="TopRated">CHALLENGER</option>
                <option value="TopRated">RIVAL</option>
                <option value="TopRated">TRAINEE</option>
              </select>
            </div>
            <div className="Blog_Field">
              <h2>FORMAT</h2>
              <select className="Bracket_Dropdown" name="style">
                <option value="">Choose Format</option>
                <option value="Great">Great</option>
                <option value="Ultra">Ultra</option>
                <option value="Master">Master</option>
              </select>
            </div>

            <div className="Blog_Field">
              <h2>QUANTITY</h2>
              <input
                type="number"
                max={64}
                min={0}
                placeholder="Type Quantity"
              />
            </div>

            <div className="Blog_Field" style={{ marginTop: "5%" }}>
              <h2>PRICE</h2>
              <input type="number" min={0} placeholder="Type Price" />
            </div>
            <div className="Blog_Field">
              <h2>ADDITIONAL NOTES </h2>
              <textarea type="text" placeholder="Type Additional Notes" />
            </div>
            <button className="Create-btn">Create League CODE</button>
          </div>
        </div>
        <button className="scrollToTop" onClick={scrollToTop}>
          <i class="fa-solid fa-arrow-up mx-1"></i>
        </button>
      </div>
    </>
  );
};

export default EcommerceRSVPCode;
