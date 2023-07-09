import React, { useContext, useEffect, useState } from "react";
import axios from "../../axios";
import Button from "../button/Button";
import {
  Header1,
  Left,
  Right,
  Slide1,
  Slide2,
  Team1,
  Team2,
} from "../imports/imgs/Images";
import "./Header.css";
import { AuthContext } from "../../context/AuthContext";

function Header() {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [latestMatch, setLatestMatch] = useState(null);
  const [player1Score, setPlayer1Score] = useState(null);
  const [player2Score, setPlayer2Score] = useState(null);


  useEffect(() => {
    const fetchLatestMatch = () => {
      console.log("requesting")
      axios
        .get(`/tournaments/latestMatch/6474979416874614109e9f85`)
        .then((response) => {
          console.log(response.data);
          const { player1Score, player2Score, match } = response.data.match[0];
          setPlayer1Score(player1Score);
          setPlayer2Score(player2Score);
          setLatestMatch(match);
        })
        .catch((error) => {
          console.log(error.response?.data?.message || "Failed to fetch latest match");
        });
    };

    fetchLatestMatch();
  }, []);

  const handleCheckIn = async () => {
    try {
      const response = await axios.patch(
        `/tournaments/642b47f8492f20eb628bba8b/checkin`,
        {
          rsvpCode: "your_rsvp_code", // Replace with the actual RSVP code
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response?.data?.message || "Failed to check-in");
    }
  };
  

  return (
    <>
      <div className="header">
        <div className="header__text">
          <p>
            it's time to prove your <span>mettle</span>
          </p>

          <div className="header__text__btn">
          <a href="/alltournaments" style={{ textDecoration: "none" }}>
          <Button text={"find tournament"} />
          </a>
          {user && (
          <a href="/alltournaments" style={{ textDecoration: "none" }}>
          <Button text={"check in"} onClick={handleCheckIn} />
          </a>
          )}
      </div>        



          {!user && (
            <div className="header__text__links">
              <a href="/login">login</a> <span>or</span>
              <a href="/register">register now</a>
            </div>
          )}
        </div>

        <div className="header__img">
          <img src={Header1} alt="" />
        </div>
      </div>
      <div className="header__footer">
        <div className="header__footer__arrows">
          <p>
            <img src={Left} alt="" />
          </p>

          <p>
            <img src={Right} alt="" />
          </p>
        </div>

        <div className="header__footer__slides">
          <img src={Slide1} alt="" />
          <img src={Slide2} alt="" />
        </div>

        <div className="header__footer__fixtures">
          <h3>Our Latest Match</h3>
            <div className="header__footer__fixtures__display">
              <p>
                <img src={Team1} alt="" />
                <br />
                <span className="figureFirst">{player1Score}</span>
              </p>
              <span>vs</span>{" "}
              <p>
                <img src={Team2} alt="" />
                <br />
                <span className="figureLast">{player2Score}</span>
              </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Header;
