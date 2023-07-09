import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Button from "../../components/button/Button";
import Curved from "../../components/button/Curved";
import DoubleCurve from "../../components/button/DoubleCurve";
import {
  AD,
  Header1,
  Rank,
  Team1,
  Team2,
} from "../../components/imports/imgs/Images";
import Heading from "../../components/text/Heading";
import "./Playermatch.css";

function Playermatch() {
  const [outcomes, setOutcomes] = useState([]);
  const [nextMatch, setNextMatch] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    try {
      const fetchOutcomes = async () => {
        await axios.get(`/tournaments/${id}/outcomes`).then((res) => {
          console.log(res.data?.data);
          setOutcomes(res.data?.data);
        });
      };

      fetchOutcomes();

      const fetchNext = async () => {
        console.log("requesting")
        await axios.get(`/tournaments/${id}/nextmatch`).then((res) => {
          console.log(res.data?.data);
          setNextMatch(res.data?.data);
        });
      };
      fetchNext();
     
      
    } catch (error) {
      console.log(error);
    }
  }, []);

 
  return (
    <div className="playermatch">
      <div className="leaguetable__banner">
        <div className="leaguetable__banner__text">
          <h3>
            player match-
            <span>best of 3</span>
          </h3>

          <p>
            Nulla rutrum sem turpis, at pretium quam porttitor in. Integer
            sodales at enim et blandit. Aliquam dignissim vestibulum hendrerit.
          </p>

          <a href={`/tournamentbt/${id}`} style={{ textDecoration: "none" }}>
            <Button text={"Join/Leave Tournament"} />
          </a>
        </div>

        <div className="leaguetable__banner__img">
          <div className="main__img">
            <img src={Header1} alt="" />
          </div>
        </div>
      </div>

      <div className="leaguetable__banner__footer">
        <div className="header__footer__fixtures">
          <h3>upcoming match</h3>
          <div className="header__footer__fixtures__display">
            <p>
              <img src={Team1} alt="" /> <br />{" "}
            </p>

            <p>
              3d: <span>8h:</span> 40m
            </p>

            <p>
              <img src={Team2} alt="" />
            </p>
          </div>
        </div>
      </div>

      <div className="playermatch__fix">
        <Heading text={"3 BATTLES OUTCOME"} />

        <div className="tournament__matchups__fix">
          {outcomes?.map((match, index) => {
            return (
              <div className="tournament__matchups__fix__card" key={index}>
                <h4>{match.tournamentName}</h4>

                <p id="leaguename">{match.leagueName}</p>

                <div className="tournament__matchups__fix__card__line">
                  <p className="user">
                    <DoubleCurve text={match.user1} />
                    <img src={match.user1logo} alt="" id="first" />
                  </p>

                  <p className="score">{match.score1}</p>

                  <p className="verse">vs</p>

                  <p className="score">{match.score2}</p>

                  <p className="user two">
                    <DoubleCurve text={match.user2} />
                    <img src={match.user2logo} alt="" id="first" />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="username">
        <Curved text={"player a"} />
      </div>

      {/* <div className="tournament__fixtures">
        {fixtures?.map((fix, index) => {
          return (
            <div className="tournament__fixtures__card" key={index}>
              <div className="tournament__fixtures__card__logo">
                <img src={fix.clubImg} alt="" />
              </div>

              <div className="tournament__fixtures__card__other">
                <p className="clubname">{fix.clubName}</p>

                <p className="username">{fix.username}</p>

                <p className="cp">cp:{fix.cp}</p>

                <p className="country">
                  <img src={fix.country} alt="" />
                </p>
              </div>
            </div>
          );
        })}
      </div> */}

      <div className="username">
        <Curved text={"player b"} />
      </div>

      <div className="tournament__fixtures">
        {nextMatch?.map((fix, index) => {
          return (
            <div className="tournament__fixtures__card" key={index}>
              <div className="tournament__fixtures__card__logo">
                <img src={fix.clubImg} alt="" />
              </div>

              <div className="tournament__fixtures__card__other">
                <p className="clubname">{fix.clubName}</p>

                <p className="username">{fix.username}</p>

                <p className="cp">cp:{fix.cp}</p>

                <p className="country">
                  <img src={fix.country} alt="" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Playermatch;
