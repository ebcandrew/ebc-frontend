import React from "react";
import TournamentLayout from "../../layout/TournamentLayout/TournamentLayout";
import GamerStat from "../../components/gamerStat/GamerStat";
import "./tournamentmatchup.css";
import MatchUp from "../../components/matchUp/matchUp";

const data = [
  {
    id: 1,
    title: "KINGTGAMES",
    userName: "UserName",
  },
  {
    id: 2,
    title: "KINGTGAMES",
    userName: "UserName",
  },
];

const matchUp = [
  {
    id: 1,
    tournamentName: "Tournament Rush",
    leagueName: "Rocket League",
    playerTwo: "Player Two",
    playerTwoStat: "10",
    playerTwoStat: "20",
    playerOne: "PlayerOne",
  },
  {
    id: 2,
    tournamentName: "Tournament Alpha",
    leagueName: "Launcher League",
    playerTwo: "Player Two",
    playerTwoStat: "10",
    playerTwoStat: "20",
    playerOne: "PlayerOne",
  },
  {
    id: 3,
    tournamentName: "Tournament Gamma",
    leagueName: "Missile League",
    playerTwo: "Player Two",
    playerTwoStat: "10",
    playerTwoStat: "20",
    playerOne: "PlayerOne",
  },
  {
    id: 4,
    tournamentName: "Tournament Beta",
    leagueName: "Bazooka League",
    playerTwo: "Player Two",
    playerTwoStat: "10",
    playerTwoStat: "20",
    playerOne: "PlayerOne",
  },
];

export default function TournamnetMatchUp() {
  return (
    <>
      <TournamentLayout>
        <div className="StatContainer">
          {data.map((data) => (
            <GamerStat data={data} />
          ))}
          <MatchUp data={matchUp} />

          <button className="LoadMoreButtons">Load More</button>
        </div>
      </TournamentLayout>
    </>
  );
}
