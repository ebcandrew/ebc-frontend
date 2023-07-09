import axios from "../../../axios";
import React, { useEffect, useState } from "react";
import Button from "../../../components/button/Button";
import {
  CalendarMonthIcon,
  FavoriteBorderIcon,
  MapIcon,
} from "../../../components/imports/icons/Icons";
import { Header1, Team1, Team2 } from "../../../components/imports/imgs/Images";
import Heading from "../../../components/text/Heading";
import "./Rsvp.css";
import { useParams } from "react-router";
import useTimeDifference from "../../../hooks/useTimeDifference";

function Rsvp() {
  const [rsvp, setRsvp] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const timeDifference = useTimeDifference(startDate, startTime);

  const { id } = useParams();

  useEffect(() => {
    try {
      const fetchRsvp = async () => {
        await axios.get(`/tournaments/${id}`).then((res) => {
          setRsvp(res.data?.tournament);
          setStartDate(res.data?.tournament.startDate);
          setStartTime(res.data?.tournament.startTime);
        });
      };
      fetchRsvp();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const joinTournament = () => {
    try {
      const join = async () => {
        await axios.get(`/tournaments/${id}/join`).then((res) => {
          setRsvp(res.data?.tournament);
        });
      };
      join();
    } catch (error) {
      console.log(error);
    }
  };

  const leaveTournament = () => {};

  return (
    <div className="rsvp leaguetable">
      <div className="leaguetable__banner">
        <div className="leaguetable__banner__text">
          <h3>
            tournament-
            <span>rsvp</span>
          </h3>

          <p>
            Nulla rutrum sem turpis, at pretium quam porttitor in. Integer
            sodales at enim et blandit. Aliquam dignissim vestibulum hendrerit.
          </p>

          <Button text={"Join/Leave Tournament"} />
        </div>

        <div className="leaguetable__banner__img">
          <div className="main__img">
            <img src={Header1} alt="" />
          </div>
        </div>
      </div>

      <div className="leaguetable__banner__footer">
        <div className="header__footer__fixtures">
          <h3>
            {timeDifference ? "upcoming match" : "Tournament concluded on"}
          </h3>
          <div className="rsvp_time">
            <p>
              <img src={Team1} alt="" /> <br />{" "}
            </p>
            <p className="rsvp_time_content">
              {timeDifference ? (
                <>
                  {timeDifference?.days} d :
                  <span>{timeDifference?.hours} hr</span>:{" "}
                  {timeDifference?.minutes} min{" "}
                </>
              ) : (
                <>
                  <span>{rsvp.startDate}</span>
                </>
              )}
            </p>

            <p>
              <img src={Team2} alt="" />
            </p>
          </div>
        </div>
      </div>

      <div className="rsvp__main">
        <div className="rsvp__main__left">
          <h3>
            <Heading text={"tournament rsvp"} />
          </h3>
          <div>
            <p>
              <MapIcon />
            </p>

            <p>
              <h3>location</h3>

              <p className="details">{rsvp?.location}.</p>
            </p>
          </div>

          <div>
            <p>
              <CalendarMonthIcon />
            </p>

            <p>
              <h3>date</h3>

              <p className="details">{rsvp.startDate}</p>
            </p>
          </div>

          <div>
            <p></p>

            <p>
              <h3>countdown</h3>

              <p className="details">
                {timeDifference ? (
                  <>
                    {timeDifference?.days} d : {timeDifference?.hours} hr :{" "}
                    {timeDifference?.minutes} min{" "}
                  </>
                ) : (
                  <>
                    <span>Tournament concluded on {rsvp.startDate}</span>
                  </>
                )}
              </p>
            </p>
          </div>

          <div>
            <p></p>

            {/* <p>
              <h3>email alerts</h3>

              <p className="details">Lorem ipsum</p>
            </p> */}
          </div>
        </div>

        <div className="rsvp__main__right">
          <h3>
            <Heading text={"tournament details"} />
          </h3>

          <div className="rsvp__main__right__frame">
            <div>
              <p>
                <FavoriteBorderIcon />
              </p>
              <h3>{rsvp?.participants && rsvp?.participants[0]?.info?.rank}</h3>

              <p id="rank">rank</p>
            </div>
            <div>
              <p>
                <FavoriteBorderIcon />
              </p>
              <h3>{rsvp.isRemote ? "Remote" : "In Person"}</h3>

              <p id="rank">event format</p>
            </div>

            <div>
              <p>
                <FavoriteBorderIcon />
              </p>
              <h3>{rsvp.bracket}</h3>

              <p id="rank">bracket style</p>
            </div>

            <div>
              <p>
                <FavoriteBorderIcon />
              </p>
              <h3>{rsvp?.participants && rsvp?.participants[0]?.name}</h3>

              <p id="rank">competitors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rsvp;
