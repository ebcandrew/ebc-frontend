import React, { useEffect, useState } from "react";
import { AdminHeroSectionImage } from "../../components/imports/imgs/Images";
import "./ManageTournaments.css";
import "./AdminPanelUsers.css";
import "./AdminBlog.css";
import { Link } from "react-router-dom";
import { PagesDropdown } from "./ManageTournaments";
import { HeroSection } from "./AdminPanelUsers";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const AdminBlog = () => {
  // State for date
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
  return (
    <>
      <HeroSection />
      <div className="Manage_container">
        <PagesDropdown />
        <div className="Blog_container">
          <h1>BLOG</h1>
          <div className="BlogItem_Container">
            <div className="Blog_Field">
              <h2>Headline</h2>
              <input type="text" placeholder="Type Your Headline" />
            </div>

            <div className="Blog_Field">
              <h2>Article</h2>
              <textarea type="text" placeholder="Type Your Article" />
            </div>

            <div className="Blog_Field" style={{ marginTop: "5%" }}>
              <h2>SEO Tags</h2>
              <input type="text" placeholder="Type Your Tags" />
            </div>

            <div
              className="Blog_Field"
              style={{ justifyContent: "start", marginTop: "5%" }}
            >
              <h2>Schedule Post</h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "0px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "20vh",
                      width: "100px",
                    }}
                    className="AdminTimeWrapper"
                  >
                    <label htmlFor="" style={{ color: "white" }}>
                      Date
                    </label>
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
                      {Array.from(
                        { length: numDays },
                        (_, index) => index + 1
                      ).map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
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
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "20vh",
                      // width: "100px",
                    }}
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
            </div>

            <button className="Load_btn">Post Blog</button>
          </div>
        </div>
        <button className="scrollToTop" onClick={scrollToTop}>
          <i class="fa-solid fa-arrow-up mx-1"></i>
        </button>
      </div>
    </>
  );
};

export default AdminBlog;
