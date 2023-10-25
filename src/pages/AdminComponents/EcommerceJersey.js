import React, { useState } from "react";
import {
  AdminHeroSectionImage,
  Product1,
  Product2,
  Product3,
} from "../../components/imports/imgs/Images";
import "./ManageTournaments.css";
import "./AdminPanelUsers.css";
import "./AdminBlog.css";
import "./EcommerceRSVPCode.css";
import { Link } from "react-router-dom";
import { PagesDropdown } from "./ManageTournaments";
import { HeroSection } from "./AdminPanelUsers";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const EcommerceJersey = () => {
  const numbersArray = Array.from({ length: 99 }, (_, index) => index + 1);
  const sizesArray = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <>
      <HeroSection />
      <div className="Manage_container">
        <PagesDropdown />
        <div className="Blog_container">
          <h1>ECOMMERCE RSVP CODE & JERSEY</h1>
          <div className="RSVP_Container">
            <div className="ProductImages">
              <div className="Product">
                <img src={Product1} alt="productImg" />
                <p>EBC Blue T-Shirt</p>
              </div>
            </div>

            <div className="ProductImageContainer">
              {selectedImage && (
                <img
                  src={selectedImage}
                  style={{ width: "100%" }}
                  alt="Selected"
                />
              )}
              <input
                type="file"
                accept="image/*"
                className="EcommerceRSVPJerseyInput"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className="RSVP_Container">
            <div className="Blog_Field" style={{ marginTop: "5%" }}>
              <span>Jersey</span>
              <select className="Bracket_Dropdown" name="style">
                <option value="">Choose Jersey</option>
                <option value="MALE">Valor</option>
                <option value="FEMALE">Instinct</option>
                <option value="OTHERS">Mystic</option>
              </select>
            </div>
            <div className="Blog_Field">
              <span>USERNAME</span>
              <input type="text" placeholder="Type Username" />
            </div>
            <div className="Blog_Field">
              <span>Number</span>
              <select className="Bracket_Dropdown">
                {numbersArray.map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            </div>
            <div className="Blog_Field">
              <span>GENDER</span>
              <select className="Bracket_Dropdown" name="gender">
                <option value="">Choose Gender</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
              </select>
            </div>

            <div className="Blog_Field">
              <span>SIZE</span>
              <select style={{ marginTop: "30px" }}>
                {sizesArray.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="RSVP_Container">
            <div className="Blog_Field" style={{ marginTop: "5%" }}>
              <span>League</span>
              <input type="text" placeholder="Type RSVP Code" />
            </div>
            <div className="Blog_Field">
              <span>GENDER</span>
              <select className="Bracket_Dropdown" name="style">
                <option value="">Choose Gender</option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
                <option value="OTHERS">OTHERS</option>
              </select>
            </div>
            <div className="Blog_Field">
              <span>REGION</span>
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
              <span>SKILL LEVEL</span>
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
              <span>FORMAT</span>
              <select className="Bracket_Dropdown" name="style">
                <option value="">Choose Format</option>
                <option value="Great">Great</option>
                <option value="Ultra">Ultra</option>
                <option value="Master">Master</option>
              </select>
            </div>

            <div className="Blog_Field">
              <span>QUANTITY</span>
              <input
                style={{ marginTop: "30px" }}
                type="number"
                max={64}
                min={0}
                placeholder="Type Quantity"
              />
            </div>

            <div className="Blog_Field" style={{ marginTop: "5%" }}>
              <span>PRICE</span>
              <input
                style={{ marginTop: "30px" }}
                type="number"
                min={0}
                placeholder="Type Price"
              />
            </div>
            <div className="Blog_Field">
              <span>ADDITIONAL NOTES </span>
              <textarea type="text" placeholder="Type Additional Notes" />
            </div>
            <button className="Create-btn">Create League Combo</button>
          </div>
        </div>
        <button className="scrollToTop" onClick={scrollToTop}>
          <i class="fa-solid fa-arrow-up mx-1"></i>
        </button>
      </div>
    </>
  );
};

export default EcommerceJersey;
