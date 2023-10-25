import React from "react";
import "./matchUp.css";
import { Arts, Arts2 } from "../imports/imgs/Images";

export default function MatchUp({ data }) {
  return (
    <>
      <div className="MatchUpSection">
        <h1 className="MatchUpTitle">MATCH UPS</h1>

        <div className="MatchUpContainer">
          {data.map((data) => (
            <div className="MatchUpBox">
              <div className="MatchUpPlayerOne">
                <span className="MatchUpPlayerName">{data.playerOne}</span>
                <div className="MatchUpImgContainer">
                  <img className="MatchUpPlayerImage" src={Arts} alt="" />
                </div>
              </div>
              <div className="MatchUpPlayersStats">
                <div className="MatchUpLeagueStats">
                  <span className="MatchupTournamentName">Tournament Name</span>
                  <span className="MatchupLeagueName">Rocket League</span>
                  <div className="MatchUpStatsContainer">
                    <span className="MatchUpPlayerStatNumbers">56</span>
                    <div className="MatchUpPlayerVSBoxWrapper">
                      <span className="MatchUpVsText">vs</span>
                    </div>
                    <span className="MatchUpPlayerStatNumbers">56</span>
                  </div>
                </div>
              </div>
              <div className="MatchUpPlayerTwo">
                <div className="MatchUpImgContainer">
                  <img className="MatchUpPlayerImage" src={Arts2} alt="" />
                </div>
                <span className="MatchUpPlayerName">USERNAME</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
