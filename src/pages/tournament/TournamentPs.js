import React from "react";
import Curved from "../../components/button/Curved";
import DoubleCurve from "../../components/button/DoubleCurve";
import {
  AD,
  Rank,
  Team1,
  Tournats,
} from "../../components/imports/imgs/Images";

function TournamentPs() {
  const fixtures = [
    {
      clubImg: Team1,
      clubName: "knight gaming",
      country: AD,
      username: "username",
      cp: "",
    },
    {
      clubImg: Team1,
      clubName: "knight gaming",
      country: AD,
      username: "username",
      cp: "",
    },

    {
      clubImg: Team1,
      clubName: "knight gaming",
      country: AD,
      username: "username",
      cp: "",
    },
    {
      clubImg: Team1,
      clubName: "knight gaming",
      country: AD,
      username: "username",
      cp: "",
    },

    {
      clubImg: Team1,
      clubName: "knight gaming",
      country: AD,
      username: "username",
      cp: "",
    },
    {
      clubImg: Team1,
      clubName: "knight gaming",
      country: AD,
      username: "username",
      cp: "",
    },
  ];

  const fixtures2 = [
    {
      clubImg: Team1,
      clubName: "knight gaming",
      country: AD,
      username: "username",
      cp: "",
    },
    {
      clubImg: Team1,
      clubName: "knight gaming",
      country: AD,
      username: "username",
      cp: "",
    },

    {
      clubImg: Team1,
      clubName: "knight gaming",
      country: AD,
      username: "username",
      cp: "",
    },
    {
      clubImg: Team1,
      clubName: "knight gaming",
      country: AD,
      username: "username",
      cp: "",
    },

    {
      clubImg: Team1,
      clubName: "knight gaming",
      country: AD,
      username: "username",
      cp: "",
    },
    {
      clubImg: Team1,
      clubName: "knight gaming",
      country: AD,
      username: "username",
      cp: "",
    },
  ];

  const matchUps = [
    {
      tournamentName: "tournament name",
      leagueName: "league name",
      user1: "username",
      user2: "username",
      score1: 2,
      score2: 3,
      user1logo: Rank,
      user2logo: Rank,
    },
  ];
  return (
    <div className="tournamentps tournament__displays">
      <div className="tournamentps__video">
        <img src={Tournats} alt="" />
      </div>

      <div className="username">
        <Curved text={"username"} />
      </div>

      <div className="tournament__fixtures">
        {fixtures.map((fix, index) => {
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

      <div className="username">
        <Curved text={"username"} />
      </div>

      <div className="tournament__fixtures">
        {fixtures2.map((fix, index) => {
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

      <div className="tournament__matchups__fix">
        {matchUps.map((match, index) => {
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
  );
}

export default TournamentPs;
