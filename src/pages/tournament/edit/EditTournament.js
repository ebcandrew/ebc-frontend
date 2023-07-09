import React, { useEffect, useState } from "react";
import Button from "../../../components/button/Button";
import Curved from "../../../components/button/Curved";
import { ArrowDropDownIcon } from "../../../components/imports/icons/Icons";
import { Tourna } from "../../../components/imports/imgs/Images";
import Heading from "../../../components/text/Heading";
import "react-calendar/dist/Calendar.css";
import axios from "../../../axios";
import { CircularProgress } from "@mui/material";
// import DateTimePicker from "react-datetime-picker";
import TimePicker from "react-time-picker";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AlertError, AlertSuccess } from "../../../components/Alerts/Alert";

import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { useParams } from "react-router";

function EditTournament() {
  const [value, onChange] = useState(new Date());
  const [time, changeTime] = useState("");

  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  // const [roundLimit, setRoundLimit] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [map, setMap] = useState(true);
  const [address, setAddress] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [meridiem, setMeridiem] = useState("");
  const [eventDetails, setEventDetails] = useState("");
  const [info, setInfo] = useState("");

  const [allowTeams, setAllowTeams] = useState(false);

  const [isRemote, setIsRemote] = useState(true);
  const [isFeatured, setIsFeatured] = useState(Boolean);

  const [isFetching, setIsFetching] = useState(false);

  const [error, setError] = useState(Boolean);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [successMessage, setSuccessMessage] = useState("");

  const [tournament, setTournament] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [load, setLoad] = useState(false);

  const { id } = useParams();

  console.log(tournament);

  const defaults = () => {
    setName(tournament.name);
    setEventTitle(tournament.eventTitle);
    setAddress(tournament.address);
    setMonth(tournament.startDate.split("/")[0]);
    setYear(tournament.startDate.split("/")[2]);
    setDay(tournament.startDate.split("/")[1]);
    setHour(tournament.startTime.split(" ")[0]);
    setMeridiem(tournament.startTime.split(" ")[1]);
    setEventDetails(tournament.eventDetails);
    setInfo(tournament.info);
    setIsFeatured(tournament.isFeatured);
  };
  console.log(hour);

  useEffect(() => {
    try {
      const fetchUser = async () => {
        await axios("/users/me").then((res) => {
          // console.log(res.data?.data);
          setUserDetails(res.data?.data);
        });
      };

      const fetchTournaments = async () => {
        await axios(`/tournaments/${id}`).then((res) => {
          // console.log(res.data?.tournament);
          setTournament(res.data?.tournament);
          setLoad(true);
          defaults();
        });
      };

      fetchUser();
      fetchTournaments();
    } catch (error) {
      console.log(error);
    }
  }, [load]);

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
    league: "great",
    bracket: "bracket",
    maxParticipants: 10000,
    entryFee: 0,
    isAgree: true,
    allowTeams: allowTeams,
    // endDate: day,
    // startDate: day,
  };

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const handleUpdateTournament = async () => {
    setIsFetching(true);
    console.log(dataObjects);
    try {
      await axios
        .patch(`/tournaments/${id}`, dataObjects, config)
        .then((res) => {
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

          <p>
            <Button text={"select tournament type"} />
          </p>
        </div>
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
              <div>bracket style</div>

              <div>
                <ArrowDropDownIcon />
              </div>
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
              <div>allow teams</div>

              <div>
                <ArrowDropDownIcon />
              </div>
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

      <div className="th__btn" onClick={handleUpdateTournament}>
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

export default EditTournament;
