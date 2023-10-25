import React from "react";
import { AdminHeroSectionImage } from "../../components/imports/imgs/Images";
import "./ManageTournaments.css";
import "./AdminPanelUsers.css";
import { Link } from "react-router-dom";
import { PagesDropdown } from "./ManageTournaments";
import { HeroSection } from "./AdminPanelUsers";

const AdminPanelPokemon = () => {
  const EditableSection = () => {
    return (
      <>
        <div className="User_EditFields">
          <input type="text" name="pokedex" /> <div className="line"></div>
          <input type="text" name="pokemon_name" />
          <div className="line"></div>
          <input type="text" name="pokemon_name" />
          <div className="line"></div>
          <input type="text" name="pokemon_name" />
          <div className="line"></div>
          <input type="text" name="generation" />
          {/* <div className="line"></div> */}
          <span className="User_checkbox">
            <label for="myCheckbox1" class="custom-checkbox">
              <input type="checkbox" id="myCheckbox1" />
              <span class="checkmark"></span>
            </label>
          </span>
        </div>
      </>
    );
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <HeroSection />
      <div className="Manage_container">
        <PagesDropdown />
        <div className="Users">
          <h1>POKEMON IMAGE DB</h1>
          <div className="User_Container">
            <div className="User_labels">
              <h5> Pokedex#</h5>

              <h5>Pokemon Name</h5>
              <h5>Type 1</h5>
              <h5>Type 2</h5>
              <h5 style={{ marginRight: "5%" }}>Generation</h5>
              <h5>Active</h5>
            </div>
            <EditableSection />
            <EditableSection />
            <EditableSection />
            <EditableSection />
            <EditableSection />
            <EditableSection />
            <EditableSection />

            <button className="Load_btn">Upload Images to DB</button>
          </div>
        </div>
        <button className="scrollToTop" onClick={scrollToTop}>
          <i class="fa-solid fa-arrow-up mx-1"></i>
        </button>
      </div>
    </>
  );
};

export default AdminPanelPokemon;
