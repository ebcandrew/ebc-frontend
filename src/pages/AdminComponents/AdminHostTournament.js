import React, { useState, useEffect } from "react";
import { AdminHeroSectionImage } from "../../components/imports/imgs/Images";
import "./ManageTournaments.css";
import "./AdminPanelUsers.css";
import "./AdminBlog.css";
import "./AdminHostTournament.css";
import { Link } from "react-router-dom";
import { PagesDropdown } from "./ManageTournaments";
import { HeroSection } from "./AdminPanelUsers";
// import { Map, Marker, GoogleApiWrapper } ;
import MapboxMap from "./MapboxMap";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const HostComponent = ({ title }) => {
  const [address, setAddress] = useState("");

  const [isVisibleOnMap, setIsVisibleOnMap] = useState(false);

  const handleRadioChange = () => {
    setIsVisibleOnMap(!isVisibleOnMap);
  };

  const rules = ["Rule 1", "Rule 2", "Rule 3"];
  const allowedTeams = ["Team 1", "Team 2", "Team 3"];
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [numDays, setNumDays] = useState(31);

  // State for time
  const [selectedHour, setSelectedHour] = useState(1);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [selectedAmPm, setSelectedAmPm] = useState("AM");

  useEffect(() => {
    // Determine the number of days in the selected month
    let daysInMonth;
    if ([4, 6, 9, 11].includes(selectedMonth)) {
      daysInMonth = 30;
    } else if (selectedMonth === 2) {
      daysInMonth = 29; // Assuming it's a leap year, you can handle leap year logic separately
    } else {
      daysInMonth = 31;
    }

    // Set the number of days in the state
    setNumDays(daysInMonth);

    // Check if the selected day is valid and update if needed
    if (selectedDay > daysInMonth) {
      setSelectedDay(daysInMonth);
    }
  }, [selectedMonth, selectedDay]);

  // Populate the years dropdown with options from current year to 2050
  const years = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year <= 2050; year++) {
    years.push(year);
  }

  // Populate the hours dropdown with options from 1 to 12
  const hours = Array.from({ length: 12 }, (_, index) => index + 1);

  // Populate the minutes dropdown with options from 0 to 59
  const minutes = Array.from({ length: 60 }, (_, index) => index);

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  const handleDayChange = (event) => {
    setSelectedDay(parseInt(event.target.value));
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const handleHourChange = (event) => {
    setSelectedHour(parseInt(event.target.value));
  };

  const handleMinuteChange = (event) => {
    setSelectedMinute(parseInt(event.target.value));
  };

  const handleAmPmChange = (event) => {
    setSelectedAmPm(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <>
      <div className="Blog_container">
        <div className="Host_Selection">
          <h1>SELECT A {title}</h1>
          <select className="Selection_Dropdown">
            <option value="">Select {title} Type</option>
            <option value="type1">Type1</option>
            <option value="type2">Type2</option>
            <option value="type3">Type3</option>
          </select>
        </div>
        <p style={{ color: `var(--lightText)`, marginLeft: "-100px" }}>
          Would you like to host a custom tournament? Or an accredited
          tournament under EBC Rules that contributes to your attendees' player
          ranking{" "}
        </p>
        <div style={{ marginTop: "20px" }} className="Host_Selection_PartI">
          <div className="Part_number">
            <h3>1</h3>
          </div>
          <div className="PartI_Input">
            <h3>SELECT BRACKET SYSTEM</h3>
            <p>
              Your bracket type determines how wins and losses affect your
              participants' progression (or elimination) in the tournament.
            </p>
            <select className="Bracket_Dropdown" name="style">
              <option value="">Bracket style 1</option>
              <option value="">Bracket style 2</option>
              <option value="">Bracket style 3</option>
            </select>
          </div>
        </div>
      </div>

      <div className="Blog_container">
        <div className="Host_Selection_PartI">
          <div className="Part_number">
            <h3>2</h3>
          </div>
          <div className="PartI_Input">
            <h3>PICK YOUR RULES</h3>
            <p>
              The rules of your tournament dictate what a competitor can bring
              to the battle, how to win, and anything off-limits or
              disqualifying.
            </p>
            <select className="Bracket_Dropdown" name="rule" id="ruleDropdown">
              <option value="">SELECT RULES</option>
              {rules.map((rule, index) => (
                <option key={index} value={rule}>
                  {rule}
                </option>
              ))}
            </select>
            <select
              className="AllowedTeams_Dropdown"
              name="team"
              id="teamDropdown"
            >
              <option value="">ALLOWED TEAMS</option>
              {allowedTeams.map((team, index) => (
                <option key={index} value={team}>
                  {team}
                </option>
              ))}
            </select>
            <span style={{ width: "inherit", margin: "2% 0 0 0%" }}>
              <label
                for="myCheckbox1"
                class="custom-checkbox"
                style={{ color: "#EEEEEE99" }}
              >
                <input type="checkbox" id="myCheckbox1" />
                <span class="checkmark"></span>
                NOT RANKED TOURNAMENTS (Special events)
              </label>
            </span>
          </div>
        </div>
      </div>

      <div className="Blog_container">
        <div className="Host_Selection_PartI">
          <div className="Part_number">
            <h3>3</h3>
          </div>
          <div className="PartI_Input">
            <h3>ENTER EVENT DETAILS</h3>
            <p>
              The event details of your tournament let folks know where, when,
              and what to expect!
            </p>
          </div>
        </div>
        <div className="Host_Part3_Container">
          <div className="Part3_Fields">
            <h2>Format</h2>
            <div className="HostTournamentRadioWrapperBox">
              <div className="HostTournamentRadioWrapper">
                <input type="radio" name="option" />
                <span class="radio-container">IN-PERSON(LIVE EVENT)</span>
              </div>

              <div className="HostTournamentRadioWrapper">
                <input type="radio" name="option" />
                <span class="radio-container">REMOTE(VIRTUAL)</span>
              </div>
            </div>
          </div>

          <div className="Part3_Fields">
            <h2>Round Time Limit (NEW ROUNDS AUTOMATICALLY)</h2>

            <input type="number" placeholder="MIN" />
            <input type="number" placeholder="MAX" />
          </div>

          <div className="Part3_Fields">
            <h2>Event Title</h2>
            <input type="text" placeholder="Type Your Event Title" />
          </div>

          <div className="Blog_Field">
            <h2>Address</h2>
            <input
              type="text"
              onChange={handleAddressChange}
              placeholder="Type Your Address"
            />
          </div>
          <div className="Part3_Fields">
            <h2>Show On Map </h2>
            <span style={{ width: "inherit", margin: "2% 0 0 0%" }}>
              <label
                for="mapCheckbox"
                class="custom-checkbox"
                style={{ color: "#EEEEEE99" }}
              >
                <input
                  type="checkbox"
                  id="mapCheckbox"
                  onChange={handleRadioChange}
                />
                <span class="checkmark"></span>
                Visible On Tournament Map
              </label>
            </span>
          </div>
          <div className="Blog_Field" style={{ paddingBottom: "20vh" }}>
            <h2>Location</h2>
            <div
              style={{
                width: "90%",
                height: "50vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isVisibleOnMap && <MapboxMap address={address} />}
            </div>
          </div>

          <div className="Blog_Field" style={{ marginTop: "5%" }}>
            <h2>Event Details</h2>
            <textarea type="text" placeholder="Type Your Event Details" />
          </div>

          <div className="Blog_Field" style={{ marginTop: "5%" }}>
            <h2>Info For NewComers</h2>
            <textarea type="text" placeholder="Type Info For NewComers" />
          </div>

          <div
            className="Blog_Field"
            style={{
              justifyContent: "start",
              marginLeft: "6vb",
              marginTop: "5%",
              marginLeft: "17px",
            }}
          >
            <h2 style={{ width: "8vw", marginLeft: "0" }}>Schedule </h2>
            <div
              className="ScheduleWrapper"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                marginLeft: "70px",
                width: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "112px",
                }}
                className="AdminTimeWrapper"
              >
                <select
                  className="TimeDate_Dropdown"
                  id="month"
                  name="month"
                  value={selectedMonth}
                  onChange={handleMonthChange}
                >
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>

                <select
                  className="TimeDate_Dropdown"
                  id="day"
                  name="day"
                  value={selectedDay}
                  onChange={handleDayChange}
                >
                  {Array.from({ length: numDays }, (_, index) => index + 1).map(
                    (day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    )
                  )}
                </select>

                <select
                  className="TimeDate_Dropdown"
                  id="year"
                  name="year"
                  value={selectedYear}
                  onChange={handleYearChange}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="AdminTimeWrapper"
              >
                <select
                  className="Time_Dropdown"
                  id="hour"
                  name="hour"
                  value={selectedHour}
                  onChange={handleHourChange}
                >
                  {hours.map((hour) => (
                    <option key={hour} value={hour}>
                      {hour}
                    </option>
                  ))}
                </select>

                <select
                  className="Time_Dropdown"
                  id="minute"
                  name="minute"
                  value={selectedMinute}
                  onChange={handleMinuteChange}
                >
                  {minutes.map((minute) => (
                    <option key={minute} value={minute}>
                      {minute}
                    </option>
                  ))}
                </select>

                <select
                  className="Time_Dropdown"
                  id="ampm"
                  name="ampm"
                  value={selectedAmPm}
                  onChange={handleAmPmChange}
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
          </div>

          <button className="Create-btn">Create Tournament</button>
        </div>
      </div>

      <div className="ShareURL_Section">
        <input type="text" />
        <button className="Share-btn">Share</button>
      </div>
    </>
  );
};
const AdminHostTournament = () => {
  return (
    <>
      <HeroSection />
      <div className="Manage_container">
        <PagesDropdown />
        <HostComponent title={"Tournament"} />

        <button className="scrollToTop" onClick={scrollToTop}>
          <i class="fa-solid fa-arrow-up mx-1"></i>
        </button>
      </div>
    </>
  );
};

export default AdminHostTournament;
