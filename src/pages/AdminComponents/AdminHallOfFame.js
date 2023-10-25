import React from "react";
import "./ManageTournaments.css";
import "./AdminPanelUsers.css";
import "./AdminBlog.css";
import "./AdminHostTournament.css";
import "./AdminHallOfFame.css";
import { Link } from "react-router-dom";
import { PagesDropdown } from "./ManageTournaments";
import { HeroSection } from "./AdminPanelUsers";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const AdminHallOfFame = () => {
  const AwardsSection = ({ title }) => {
    return (
      <>
        <div className="MVP">
          <h3>{title}</h3>
        </div>
        <div className="User_labels">
          <h5>Username</h5>

          <h5>Rank</h5>
          <h5 style={{ marginRight: "2%" }}>Career Record</h5>
          <h5>Active</h5>
        </div>
        <EditableSection />
        <EditableSection />
        <EditableSection />
        <EditableSection />
      </>
    );
  };
  const EditableSection = () => {
    return (
      <>
        <div className="User_EditFields">
          <input type="text" name="username" /> <div className="line"></div>
          <input type="text" name="name" />
          <div className="line"></div>
          <input type="email" name="email" />
          <div className="line"></div>
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
  return (
    <>
      <HeroSection />
      <div className="Manage_container">
        <PagesDropdown />
        <div className="Users">
          <h1>HALL OF FAMER</h1>

          <div className="User_Container">
            <div className="Part_name">
              <h3>HALL OF FAMERS</h3>
            </div>
            <div className="User_labels">
              <h5>Username</h5>

              <h5>Rank</h5>
              <h5 style={{ marginRight: "2%" }}>Career Record</h5>
              <h5>Active</h5>
            </div>
            <EditableSection />
            <EditableSection />
            <EditableSection />
            <EditableSection />
            <EditableSection />
            <EditableSection />
            <EditableSection />
            <EditableSection />
            <EditableSection />
            <EditableSection />
          </div>
          <div className="User_Container">
            <div className="Part_name">
              <h3>AWARDS</h3>
            </div>
            <AwardsSection title={"MOST VALUABLE PLAYER (MVP)"} />
            <AwardsSection title={"ROOKIE OF THE YEAR"} />
            <AwardsSection title={"BEST SUPPORT PLAYER (4V4)"} />
            <AwardsSection title={"BEST IN GAME LEADER (IGL)"} />
            <AwardsSection title={"BEST CARRY PLAYER"} />
            <AwardsSection title={"CLUTCH PLAYER OF THE YEAR"} />
            <AwardsSection title={"PERSONALITY OF THE YEAR"} />
            <AwardsSection title={"DEFENSIVE OF THE YEAR"} />
            <AwardsSection title={"OFFENSIVE OF THE YEAR"} />
            <AwardsSection title={"MOST IMPROVED PLAYER"} />
          </div>
        </div>

        <button className="scrollToTop" onClick={scrollToTop}>
          <i class="fa-solid fa-arrow-up mx-1"></i>
        </button>
      </div>
    </>
  );
};

export default AdminHallOfFame;
