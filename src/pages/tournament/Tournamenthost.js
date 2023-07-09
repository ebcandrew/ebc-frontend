import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Curved from "../../components/button/Curved";
import { ArrowDropDownIcon } from "../../components/imports/icons/Icons";
import { Tourna } from "../../components/imports/imgs/Images";
import Heading from "../../components/text/Heading";
import "react-calendar/dist/Calendar.css";
import axios from "../../axios";
import { CircularProgress } from "@mui/material";
// import DateTimePicker from "react-datetime-picker";
import TimePicker from "react-time-picker";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AlertError, AlertSuccess } from "../../components/Alerts/Alert";

import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import Dropdown from "./layout/Dropdown";

function Tournamenthost() {
  const [value, onChange] = useState(new Date());
  const [time, changeTime] = useState("10:00");

  const [name, setName] = useState("");
  const [day, setDay] = useState("04");
  const [month, setMonth] = useState("12");
  const [year, setYear] = useState("2023");
  // const [roundLimit, setRoundLimit] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [map, setMap] = useState(true);
  const [address, setAddress] = useState("");
  // const [location, setLocation] = useState("");
  const [hour, setHour] = useState("10");
  const [minute, setMinute] = useState("03");
  const [meridiem, setMeridiem] = useState("PM");
  const [eventDetails, setEventDetails] = useState("");
  const [info, setInfo] = useState("");
  const [league, setLeague] = useState("select tournament type");
  const [bracket, setBracket] = useState("");

  // const [maxParticipants, setMaxParticipants] = useState("");

  // const [entryFee, setEntryFee] = useState("");
  // const [isAgree, setIsAgree] = useState(true);
  const [allowTeams, setAllowTeams] = useState(false);
  // const [endDate, setEndDate] = useState("");
  // const [startDate, setStartDate] = useState("");
  const [isRemote, setIsRemote] = useState(true);
  const [isFeatured, setIsFeatured] = useState(Boolean);

  const [isFetching, setIsFetching] = useState(false);

  const [error, setError] = useState(Boolean);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [successMessage, setSuccessMessage] = useState("");
  const [catModal, setCatModal] = useState(false);

  const types = ["great", "ultra", "master"];

  const dataObjects = {
    name: name,
    date: {
      month: month,
      day: day,
      year: year,
    },

    roundLimit: 1,
    isRemote: isRemote,
    eventTitle: eventTitle,
    showOnMap: map,
    address: address,
    location: address,
    isFeatured: isFeatured,
    time: {
      hr: hour,
      minute: minute,
      meridiem: meridiem,
    },
    eventDetails: eventDetails,
    info: info,
    league: league,
    bracket: bracket,
    maxParticipants: 10000,
    entryFee: 0,
    isAgree: true,
    allowTeams: allowTeams,
    // endDate: day,
    // startDate: day,
  };

  const brackets = [
    "Single Elimination",
    "Double Elimination",
    "Round Robin",
    "Swiss ",
  ];


  const handleCreateTournament = async () => {
    setIsFetching(true);
    console.log(dataObjects);
    try {
      await axios.post("/tournaments", dataObjects).then((res) => {
        setSuccess(true);
        setSuccessMessage(res.data?.message);
        window.location.href = "/alltournaments";
      });
    } catch (error) {
      console.log(error);
      setError(true);
      error && setErrorMessage(error.response.data?.error._message);
    }
  };

  useEffect(() => {
    try {
      const newDate = value.toString().split(" ");
      const newTime = time.split(":");
      setMonth(newDate[1]);
      setDay(newDate[2]);
      setYear(newDate[3]);
      setHour(newTime[0]);
      setMinute(newTime[1]);
      newTime[0] >= 12 ? setMeridiem("PM") : setMeridiem("AM");
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      setIsFetching(false);
    }
  }, [value, day, month, hour, minute, year, time]);

  switch (month) {
    case "Jan":
      setMonth("1");
      break;

    case "Feb":
      setMonth("2");
      break;

    case "Mar":
      setMonth("3");
      break;

    case "Apr":
      setMonth("4");
      break;

    case "May":
      setMonth("5");
      break;

    case "Jun":
      setMonth("6");
      break;

    case "Jul":
      setMonth("7");
      break;

    case "Aug":
      setMonth("8");
      break;

    case "Sep":
      setMonth("9");
      break;

    case "Oct":
      setMonth("10");
      break;

    case "Nov":
      setMonth("11");
      break;

    case "Dec":
      setMonth("12");
      break;

    default:
      break;
  }

  const handleCloseModal = () => {
    setError(false);
    setSuccess(false);
  };

  const timeChange = (e) => {
    changeTime(e);
  };

  const dateChange = (e) => {
    // console.log(e);
    onChange(e);
  };

  const handleBracket = ({ value }) => {
    setBracket(value);
  };

  const handleTeams = ({ value }) => {
    value === "yes" ? setAllowTeams(true) : setAllowTeams(false);
  };

  return (
    <div className="tournamenthost">
      {error && (
        <AlertError message={errorMessage} onclick={handleCloseModal} />
      )}

      {success && (
        <AlertSuccess message={successMessage} onclick={handleCloseModal} />
      )}
      <div className="tournament__header">
        <div className="tournament__text">
          <h3>
            host a <span>tournament</span>
          </h3>

          <p className="redlabel">
            <a href="/">See how it works? Live demo.</a>
          </p>
        </div>

        <div className="tournament__image">
          <img src={Tourna} alt="" />
        </div>
      </div>

      <div className="tournamenthost__select">
        <div className="tournamenthost__select__heading">
          <p>
            <Heading text={"select a tournament"} />
          </p>

          <p onClick={(e) => setCatModal(!catModal)}>
            <Button text={league} />
          </p>
        </div>
        {catModal && (
          <div className="catmodal tournamenthost">
            {types.map((item, index) => {
              return (
                <div className="catmodal__item" key={index}>
                  <p
                    onClick={() => {
                      setLeague(item);
                      setCatModal(false);
                    }}
                  >
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        <p className="subtext">
          Would you like to host a custom tournament? Or an accredited
          tournament under EBC Rules that contributes to your attendees' player
          ranking ?
        </p>
      </div>

      <div className="tournamentbt__body__item">
        <div className="item__btn">
          <Curved text={1} />
        </div>

        <div className="other__items">
          <h3>SELECT BRACKET SYSTEM</h3>

          <p>
            Your bracket type determines how wins and losses affect your
            participants' progression (or elimination) in the tournament.
          </p>

          <div className="other__items__select__flex">
            <div className="team__select">
              <Dropdown
                placeholder={"bracket style"}
                options={brackets}
                handleDropdown={handleBracket}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="tournamentbt__body__item">
        <div className="item__btn">
          <Curved text={2} />
        </div>

        <div className="other__items">
          <h3>PICK YOUR RULES</h3>

          <p>
            The rules of your tournament dictate what a competitor can bring to
            the battle, how to win, and anything off-limits or disqualifying.
          </p>

          <div className="other__items__select__flex">
            <div className="team__select">
              <div>rules</div>

              <div>
                <ArrowDropDownIcon />
              </div>
            </div>
          </div>

          <div className="other__items__select__flex">
            <div className="team__select">
              <Dropdown
                options={["yes", "no"]}
                handleDropdown={handleTeams}
                placeholder={"Allow Teams"}
              />
            </div>
          </div>

          <div className="profile2__terms tournamenthost">
            <input
              type="checkbox"
              name=""
              id=""
              value={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
            />{" "}
            <span>NOT RANKED TOURNAMENTS (Special events)</span>
          </div>
        </div>
      </div>
      <div className="tournamentbt__body__item">
        <div className="item__btn">
          <Curved text={3} />
        </div>

        <div className="other__items">
          <h3>ENTER EVENT DETAILS</h3>

          <p>
            The event details of your tournament let folks know where, when, and
            what to expect!
          </p>

          <div className="tournamenthost__flex__items">
            <section>
              <h3>format</h3>

              <div>
                <p>
                  <input
                    type="radio"
                    id=""
                    name="remote"
                    value={isRemote}
                    onChange={(e) => setIsRemote(e.target.checked)}
                  />{" "}
                  <span>IN-PERSON (LIVE EVENT)</span>
                </p>

                <p>
                  <input
                    type="radio"
                    name="remote"
                    id=""
                    value={isRemote}
                    onChange={(e) => setIsRemote(e.target.checked)}
                  />{" "}
                  <span>REMOTE (VIRTUAL)</span>
                </p>
              </div>
            </section>

            <section>
              <h3>Round time limit:(NEW ROUNDS AUTOMATICALLY)</h3>

              <div Id="round">
                {/* <p>min</p>

                <p>max</p> */}
              </div>
            </section>

            <section>
              <h3>event title</h3>

              <input
                type="text"
                className="tournament_box"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
              />

              {/* <p Id="box"></p> */}
            </section>

            <section>
              <h3>event name</h3>

              <input
                type="text"
                className="tournament_box"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              {/* <p Id="box"></p> */}
            </section>

            <section>
              <h3>address</h3>

              <input
                type="text"
                className="tournament_box"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              {/* <p Id="box"></p> */}
            </section>

            <section>
              {/* <h3>show on map</h3> */}

              {/* <div>
                <p>
                  <input
                    type="radio"
                    name="s"
                    id=""
                    checked
                    value={map}
                    onChange={(e) => setMap(e.target.checked)}
                  />
                  <span>visible on tournament map</span>
                </p>
              </div> */}
            </section>

            {/* <section>
              <h3>map</h3>

              <p Id="map"></p>
            </section> */}

            <section className="th__date">
              <h3>date</h3>

              <p Id="date">
                <div>
                  {/* <DateTimePicker onChange={setDate} value={date} /> */}
                  <DatePicker
                    selected={value}
                    // onChange={(date) => onChange(date)}
                    onChange={dateChange}
                  />
                </div>
              </p>
            </section>

            <section className="th__date">
              <h3>time</h3>

              <p>
                <div>
                  <TimePicker
                    onChange={timeChange}
                    value={time}
                    amPmAriaLabel
                  />
                </div>
              </p>
            </section>

            {/* <section className="th__date">
              <h3>time</h3>

              <p Id="date">
                <div>
                  <p>
                    01 <ArrowDropDownIcon />
                  </p>

                  <p>
                    22 <ArrowDropDownIcon />
                  </p>

                  <p>PM</p>
                </div>
              </p>
            </section> */}

            <section>
              <h3>event details</h3>

              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                Id="map"
                className="host__box"
                value={eventDetails}
                onChange={(e) => setEventDetails(e.target.value)}
              ></textarea>

              {/* <p Id="map"></p> */}
            </section>

            <section>
              <h3>info for new customers</h3>

              {/* <p Id="map"></p> */}
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                Id="map"
                className="host__box"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              ></textarea>
            </section>
          </div>
        </div>
      </div>

      <div className="th__btn" onClick={handleCreateTournament}>
        <Button
          text={
            isFetching ? (
              <CircularProgress size={16} color="inherit" />
            ) : (
              "create tournament"
            )
          }
        />
      </div>

      <div className="th__btn__share">
        <p>https://www.url.com</p>
        <p>
          <Button text={"share"} />
        </p>
      </div>
    </div>
  );
}

export default Tournamenthost;
