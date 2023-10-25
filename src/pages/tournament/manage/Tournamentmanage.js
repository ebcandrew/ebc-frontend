import axios from "../../../axios";
import React, { useEffect, useState } from "react";
import Button from "../../../components/button/Button";
import {
  ArrowDropDownIcon,
  ArrowForwardIcon,
  CalendarMonthIcon,
  MapIcon,
} from "../../../components/imports/icons/Icons";
import {
  Arts,
  Arts2,
  Blog1,
  Cup,
  Header1,
  Slide1,
  Slide2,
} from "../../../components/imports/imgs/Images";
import Heading from "../../../components/text/Heading";
import "./Tournamentmanage.css";
import { PagesDropdown } from "../../AdminComponents/ManageTournaments";

function Tournamentmanage() {
  const [current, setCurrent] = useState([]);
  const [concluded, setConcluded] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    try {
      const fetchCurrent = async () => {
        axios.get("/tournaments/current").then((res) => {
          console.log(res.data?.data);
          setCurrent(res.data?.data);
        });
      };

      const fetchConcluded = async () => {
        axios.get("/tournaments/concluded").then((res) => {
          console.log(res.data?.data);
          setConcluded(res.data?.data);
        });
      };

      const fetchUpcoming = async () => {
        axios.get("/tournaments/upcoming").then((res) => {
          console.log(res.data?.data);
          setUpcoming(res.data?.upcomingTournaments);
        });
      };

      fetchConcluded();
      fetchCurrent();
      fetchUpcoming();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // const entries = [
  //   {
  //     challenge: "Knight Gaming VS Vengeance Gaming",
  //     league: "MASTER LEAGUE - ONINE ",
  //     date: "July 29th, 2020 9.00 PM",
  //     dino1: Arts,
  //     dino2: Arts2,
  //   },

  //   {
  //     challenge: "Knight Gaming VS Vengeance Gaming",
  //     league: "MASTER LEAGUE - ONINE ",
  //     date: "July 29th, 2020 9.00 PM",
  //     dino1: Arts,
  //     dino2: Arts2,
  //   },

  //   {
  //     challenge: "Knight Gaming VS Vengeance Gaming",
  //     league: "MASTER LEAGUE - ONINE ",
  //     date: "July 29th, 2020 9.00 PM",
  //     dino1: Arts,
  //     dino2: Arts2,
  //   },

  //   {
  //     challenge: "Knight Gaming VS Vengeance Gaming",
  //     league: "MASTER LEAGUE - ONINE ",
  //     date: "July 29th, 2020 9.00 PM",
  //     dino1: Arts,
  //     dino2: Arts2,
  //   },

  //   {
  //     challenge: "Knight Gaming VS Vengeance Gaming",
  //     league: "MASTER LEAGUE - ONINE ",
  //     date: "July 29th, 2020 9.00 PM",
  //     dino1: Arts,
  //     dino2: Arts2,
  //   },

  //   {
  //     challenge: "Knight Gaming VS Vengeance Gaming",
  //     league: "MASTER LEAGUE - ONINE ",
  //     date: "July 29th, 2020 9.00 PM",
  //     dino1: Arts,
  //     dino2: Arts2,
  //   },

  //   {
  //     challenge: "Knight Gaming VS Vengeance Gaming",
  //     league: "MASTER LEAGUE - ONINE ",
  //     date: "July 29th, 2020 9.00 PM",
  //     dino1: Arts,
  //     dino2: Arts2,
  //   },
  // ];

  // const tournaments = [
  //   {
  //     name: "INDIESPORT 2020",
  //     date: "August 2-10",
  //     location: "Jakarta Auditorium",
  //   },

  //   {
  //     name: "INDIESPORT 2020",
  //     date: "August 2-10",
  //     location: "Jakarta Auditorium",
  //   },

  //   {
  //     name: "INDIESPORT 2020",
  //     date: "August 2-10",
  //     location: "Jakarta Auditorium",
  //   },

  //   {
  //     name: "INDIESPORT 2020",
  //     date: "August 2-10",
  //     location: "Jakarta Auditorium",
  //   },

  //   {
  //     name: "INDIESPORT 2020",
  //     date: "August 2-10",
  //     location: "Jakarta Auditorium",
  //   },
  // ];

  // const upcoming2 = [
  //   {
  //     Image: Blog1,
  //     date: "25TH SEPTEMBER 2020",
  //     name: "SINGAPORE OPEN 2020",
  //   },

  //   {
  //     Image: Blog1,
  //     date: "25TH SEPTEMBER 2020",
  //     name: "SINGAPORE OPEN 2020",
  //   },

  //   {
  //     Image: Blog1,
  //     date: "25TH SEPTEMBER 2020",
  //     name: "SINGAPORE OPEN 2020",
  //   },
  // ];

  return (
    <div className="tournamentmanage">
      <div className="leaguetable__banner">
        <div className="leaguetable__banner__text">
          <h3>
            manage-
            <span>tournament</span>
          </h3>

          <a href="/tournamenthost" style={{ textDecoration: "none" }}>
            <Button text={"host a tournament"} />
          </a>
        </div>

        <div className="leaguetable__banner__img">
          <div className="main__img">
            <img src={Header1} alt="" />
          </div>
        </div>
      </div>

      <div className="leaguetable__banner__footer">
        <div className="header__footer__slides">
          <img src={Slide1} alt="" />
          <img src={Slide2} alt="" />
          <img src={Slide2} alt="" />
        </div>
      </div>

      <PagesDropdown />
      <div className="leagues__matchup">
        <div>
          <Heading text={"current tournaments"} />
        </div>

        <div className="arrows">
          <ArrowDropDownIcon />
        </div>
      </div>

      <div className="tournamentmanage__main">
        <div className="tournamentmanage__main__fix">
          {current?.map((tourna, index) => {
            return (
              <div className="tournamentmanage__main__fix__item" key={index}>
                <div className="cup">
                  <img src={Cup} alt="" />
                </div>

                <div className="name">
                  <p>{tourna.name}</p>

                  <div>
                    <p>
                      <span>
                        <CalendarMonthIcon />
                      </span>
                      {tourna.date.day}
                    </p>

                    <p>
                      <span>
                        <MapIcon />
                      </span>
                      {tourna.location}
                    </p>
                  </div>
                </div>
                <div className="btn">
                  <Button text={"manage"} />
                </div>
              </div>
            );
          })}
        </div>

        {current?.length > 10 && (
          <div className="tournamentmanage__main__fix__button">
            <Button text={"load more"} />
          </div>
        )}
      </div>

      <div className="leagues__matchup">
        <div>
          <Heading text={"upcoming tournaments"} />
        </div>

        <div className="arrows">
          <ArrowDropDownIcon />
        </div>
      </div>

      <div className="tournamentmanage__upcoming">
        {upcoming?.map((up, index) => {
          return (
            <div className="tournamentmanage__upcoming__item" key={index}>
              <p className="img">
                <img src={up.Image} alt="" />
              </p>

              <div className="others">
                <p>{up.startDate}</p>

                <p>{up?.name}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="leagues__matchup">
        <div>
          <Heading text={"concluded tournaments"} />
        </div>

        <div className="arrows">
          <ArrowDropDownIcon />
        </div>
      </div>

      <div className="featuredevents__heading">
        <div className="tag">
          <p>all tournaments</p>
        </div>

        <div className="link">
          <a href="/">see all</a>
          <ArrowForwardIcon />
        </div>
      </div>

      <div className="tournament__entered__entries">
        {concluded?.map((entry, index) => {
          return (
            <div className="tournament__entered__entries__entry" key={index}>
              <div className="entry">
                <div id="text">
                  <p id="challenge">{entry.challenge}</p>

                  <p id="league">{entry.league}</p>
                  <p id="date">{entry.date}</p>
                </div>

                <div id="dinos">
                  <p>
                    <img src={entry.dino1} alt="" />
                  </p>

                  <p className="verses">vs</p>

                  <p>
                    <img src={entry.dino2} alt="" />
                  </p>
                </div>

                <div id="btn">
                  <p>
                    <Button text={"manage"} />
                  </p>

                  <p>watch</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tournamentmanage;
