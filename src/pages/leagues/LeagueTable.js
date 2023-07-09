import React, { useEffect } from "react";
import {
  ArrowDropDownIcon,
  SearchIcon,
} from "../../components/imports/icons/Icons";
import {
  AD,
  Arts,
  Di,
  Header1,
  Left,
  Profile,
  Rank,
  Right,
  Slide1,
  Slide2,
  Team1,
  Team2,
} from "../../components/imports/imgs/Images";
import "./LeagueTable.css";
import Heading from "../../components/text/Heading";
import DoubleCurve from "../../components/button/DoubleCurve";
import Curved from "../../components/button/Curved";
import Button from "../../components/button/Button";

function LeagueTable() {
  useEffect(()=>{

  },[])
  
  const matchUps = [
    {
      user1name: "username",
      user2name: "username",
      user1score: "3",
      user2score: "2",
      user1logo: Rank,
      user2logo: Rank,
      timer: "01:22",
      index: "1",
      name: "rocket league",
    },

    {
      user1name: "username",
      user2name: "username",
      user1score: "3",
      user2score: "2",
      user1logo: Rank,
      user2logo: Rank,
      timer: "01:22",
      index: "1",
      name: "rocket league",
    },

    {
      user1name: "username",
      user2name: "username",
      user1score: "3",
      user2score: "2",
      user1logo: Rank,
      user2logo: Rank,
      timer: "01:22",
      index: "1",
      name: "rocket league",
    },

    {
      user1name: "username",
      user2name: "username",
      user1score: "3",
      user2score: "2",
      user1logo: Rank,
      user2logo: Rank,
      timer: "01:22",
      index: "1",
      name: "rocket league",
    },

    {
      user1name: "username",
      user2name: "username",
      user1score: "3",
      user2score: "2",
      user1logo: Rank,
      user2logo: Rank,
      timer: "01:22",
      index: "1",
      name: "rocket league",
    },
  ];

  const yourTeam = [
    {
      icon: Di,
      username: "username",
      date: "july 18, 2020 7.00 pm",
      country: AD,
      profile: Profile,
      type: "knight gaming",
      dinos: [Arts, Arts, Arts, Arts, Arts, Arts, Arts],
    },

    {
      icon: Di,
      username: "username",
      date: "july 18, 2020 7.00 pm",
      country: AD,
      profile: Profile,
      type: "knight gaming",
      dinos: [Arts, Arts, Arts, Arts, Arts, Arts, Arts],
    },

    {
      icon: Di,
      username: "username",
      date: "july 18, 2020 7.00 pm",
      country: AD,
      profile: Profile,
      type: "knight gaming",
      dinos: [Arts, Arts, Arts, Arts, Arts, Arts, Arts],
    },

    {
      icon: Di,
      username: "username",
      date: "july 18, 2020 7.00 pm",
      country: AD,
      profile: Profile,
      type: "knight gaming",
      dinos: [Arts, Arts, Arts, Arts, Arts, Arts, Arts],
    },

    {
      icon: Di,
      username: "username",
      date: "july 18, 2020 7.00 pm",
      country: AD,
      profile: Profile,
      type: "knight gaming",
      dinos: [Arts, Arts, Arts, Arts, Arts, Arts, Arts],
    },

    {
      icon: Di,
      username: "username",
      date: "july 18, 2020 7.00 pm",
      country: AD,
      profile: Profile,
      type: "knight gaming",
      dinos: [Arts, Arts, Arts, Arts, Arts, Arts, Arts],
    },
  ];

  return (
    <div className="leaguetable">
      <div className="leaguetable__banner">
        <div className="leaguetable__banner__text">
          <h3>
            league-
            <span>table</span>
          </h3>
        </div>

        <div className="leaguetable__banner__img">
          <div className="header__footer__arrows">
            <p>
              <img src={Left} alt="" />
            </p>

            <p>
              <img src={Right} alt="" />
            </p>
          </div>

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
        <div className="header__footer__slides">
          <img src={Slide1} alt="" />
          <img src={Slide2} alt="" />
          <img src={Slide2} alt="" />
        </div>
      </div>

      <div className="leagues__matchup">
        <div>
          <Heading text={"match ups"} />
        </div>

        <div className="arrows">
          <ArrowDropDownIcon />
        </div>
      </div>

      <div className="leagues__body">
        <div className="leagues__body__round">
          <p>round 1</p>

          <p>
            <SearchIcon />
            <span>search user</span>
          </p>
        </div>

        <div className="leagues__body__matchup__fixtures">
          {matchUps.map((match, index) => {
            return (
              <div className="matchup__item" key={index}>
                <div className="matchup__item__header">
                  <h3>table {index + 1}</h3>
                  <p>{match.name}</p>
                </div>

                <div className="matchup__item__flex">
                  <p>
                    <DoubleCurve text={match.user1name} />
                    <img src={match.user1logo} alt="" id="first" />
                  </p>

                  <section className="score">
                    <p>{match.user1score}</p>

                    <p>vs</p>

                    <p>{match.user2score}</p>
                  </section>

                  <p>
                    <DoubleCurve text={match.user2name} />
                    <img src={match.user2logo} alt="" />
                  </p>
                </div>

                <div className="matchup__item__timer">
                  <p>round timer</p>

                  <p>{match.timer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="leagues__matchup">
        <div>
          <Heading text={"your team"} />
        </div>

        <div className="arrows">
          <ArrowDropDownIcon />
        </div>
      </div>
      <div className="username btn">
        <Curved text={"checked in participants"} />
      </div>

      {yourTeam.map((team, index) => {
        return (
          <div className="leagues__table__items" key={index}>
            <div className="leagues__table__items__user">
              <section>
                <div>
                  <img src={team.icon} alt="" />
                </div>
                <div>
                  <p className="title">{team.type}</p>

                  <p className="username">{team.username}</p>

                  <p className="date">{team.date}</p>

                  <p className="country">
                    <p>
                      <img src={team.country} alt="" />
                    </p>

                    <p>
                      <img src={team.profile} alt="" />
                    </p>
                  </p>
                </div>
              </section>
            </div>

            {team.dinos.map((d, index) => {
              return (
                <div key={index} className="leagues__table__items__dinos">
                  <img src={d} alt="" />
                </div>
              );
            })}
          </div>
        );
      })}

      <div className="leagues__table__items__btn">
        <Button text={"load  more"} />
      </div>
    </div>
  );
}

export default LeagueTable;
