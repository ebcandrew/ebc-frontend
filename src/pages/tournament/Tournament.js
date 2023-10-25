import React, { useEffect, useState } from "react";
import Curved from "../../components/button/Curved";
import {
  AD,
  Rank,
  Team1,
  AdminHeroSectionImage,
  Header1,
} from "../../components/imports/imgs/Images";
import "./Tournament.css";
import Heading from "../../components/text/Heading";
import DoubleCurve from "../../components/button/DoubleCurve";
import Button from "../../components/button/Button";
import axios from "../../axios";
import { useParams } from "react-router";

function Tournament() {
  const [userDetails, setUserDetails] = useState([]);
  const [matches, setMatches] = useState([]);
  const [tournamentsMatches, setTournamentsMatches] = useState([]);
  const [tournaments, setTournaments] = useState([]);

  const { id } = useParams();

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
          console.log("fetchTournaments-------------", res.data);
          // console.log(res.data?.tournament);
          setTournaments(res.data?.tournament);
        });
      };

      const fetchTournamentsMatchesPopulated = async () => {
        await axios(`/tournaments/${id}`).then((res) => {
          // console.log(res.data?.tournament.teams);
          setTournamentsMatches(res.data?.tournament.teams);
        });
      };

      const fetchMatches = async () => {
        await axios(`/tournaments/${id}`).then((res) => {
          console.log(res.data, "-------------------------------");
          // console.log(res.data?.tournament.matches);
          // console.log(res.data?.tournament.matches);
          setMatches(res.data?.tournament.matches);
          console.log(matches);
        });
      };

      fetchUser();
      fetchTournaments();
      fetchTournamentsMatchesPopulated();
      fetchMatches();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="tournament">
      <div className="tournament__header">
        <div className="tournament__text">
          <h3>
            tournament -<span>match up</span>
          </h3>

          <p>
            Nulla rutrum sem turpis, at pretium quam porttitor in. Integer
            sodales at enim et blandit. Aliquam dignissim vestibulum hendrerit.
          </p>
        </div>

        <div className="tournament__image">
          <img
            src={AdminHeroSectionImage}
            className="tournament__image1"
            alt=""
          />
          <img src={Header1} className="tournament__image2" alt="" />
        </div>
      </div>

      <div className="tournament__displays">
        <div className="username">
          <Curved text={"username"} />
        </div>

        <div className="tournament__fixtures">
          {matches?.map((fix, index) => {
            return (
              <div className="tournament__fixtures__card" key={index}>
                <div className="tournament__fixtures__card__logo">
                  <img src={fix.clubImg} alt="" />
                </div>

                <div className="tournament__fixtures__card__other">
                  <p className="clubname">{fix.clubName}</p>

                  <p className="username">{fix.player1}</p>

                  <p className="cp">cp:{fix.pokemon1.cp}</p>

                  <p className="country">
                    <img src={fix.country} alt="" />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="username">
          <Curved text={"username"} />
        </div>

        <div className="tournament__fixtures">
          {matches?.map((fix, index) => {
            return (
              <div className="tournament__fixtures__card" key={index}>
                <div className="tournament__fixtures__card__logo">
                  <img src={fix.clubImg} alt="" />
                </div>

                <div className="tournament__fixtures__card__other">
                  <p className="clubname">{fix.clubName}</p>

                  <p className="username">{fix.player2}</p>

                  <p className="cp">cp:{fix.pokemon2.cp}</p>

                  <p className="country">
                    <img src={fix.country} alt="" />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="tournament__matchups">
        <div className="tournament__matchups__heading">
          <Heading text={"match ups"} />
        </div>

        <div className="tournament__matchups__fix">
          {tournamentsMatches?.map((match, index) => {
            return (
              <div className="tournament__matchups__fix__card" key={index}>
                <h4>{match.tournamentName}</h4>

                <p id="leaguename">{match.league}</p>

                <div className="tournament__matchups__fix__card__line">
                  <p className="user">
                    <DoubleCurve text={match.user} />
                    <img src={Rank} alt="" id="first" />
                  </p>

                  <p className="score">{match.tts?.minScore}</p>

                  <p className="verse">vs</p>

                  <p className="score">{match.tts?.highScore}</p>

                  <p className="usertwo">
                    <DoubleCurve text={match.user} />
                    <img src={Rank} alt="" id="first" />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="enter__tournamnent__btn">
        <a href={`/tournamentbt/${id}`} style={{ textDecoration: "none" }}>
          <Button text={"enter this tournament"} />
        </a>{" "}
      </div>

      {tournamentsMatches?.length > 10 && (
        <div className="tournament__loadmore">
          <Button text={"load more"} />
        </div>
      )}
    </div>
  );
}

export default Tournament;
