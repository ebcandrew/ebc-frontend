import React, { useEffect, useState } from "react";
import ArrowBtn from "../../components/button/ArrowBtn";
import {
  Header1,
  LeagueBanner,
  Left,
  Right,
} from "../../components/imports/imgs/Images";
import Heading from "../../components/text/Heading";
import "./Leagues.css";
import Button from "../../components/button/Button";
import axios from "../../axios";

function Leagues() {
  const [leaguesInfo, setLeaguesInfo] = useState([]);
  const [leagueDropdownOpen, setLeagueDropdownOpen] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const [selectedLeague, setSelectedLeague] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  console.log(leaguesInfo)

  const handleLeagueDropdownToggle = () => {
    setLeagueDropdownOpen(!leagueDropdownOpen);
  };

  const handleTeamDropdownToggle = () => {
    setTeamDropdownOpen(!teamDropdownOpen);
  };

  const handleLeagueSelect = (league) => {
    setSelectedLeague(league);
  };

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
  };

  const leagues = [
    "Great League",
    "Ultra League",
    "Master League",
    "Solo League",
  ];
  const teams = [
    "Start 8, Expansion 32 Teams",
    "Great League",
    "Ultra League Teams",
    "Master Leagues",
  ];

  useEffect(() => {
    console.log("requesting")
    setSelectedLeague(leagues[0]);
    setSelectedTeam(teams[0]);
    try {
      const getLeagueInfo = async () => {
        console.log("requesting")
        await axios.get("/leagues").then((res) => {
          console.log(res.data);
          setLeaguesInfo(res.data?.data.leagues);
          console.log(res.data?.data.leagues)
          console.log(leagues)
        });
      };
      getLeagueInfo();
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log("requesting")
  const imageUrl = (sticker) => {
    return `http://localhost:5000/imgs/1680894916715-642a34e336e4eb6a718c59b9.jpeg`;
  };
  
  return (
    <div className="league">
      <div className="league__banner">
        <div className="league__banner__1">
          <h3>
            our <span>leagues</span>
          </h3>

          <p className="league__banner__1__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ea
            tempore facilis quam quasi illum, odio accusamus numquam deserunt
            assumenda!
          </p>

          <p><Button text={"Add to leagues"} /></p>
        </div>

        <div className="league__banner__2">
          <img src={LeagueBanner} alt="" />
        </div>

        <div className="league__banner__3">
          <div></div>

          <div className="header__footer__arrows">
            <p>
              <img src={Left} alt="" />
            </p>

            <div>
              <img src={Right} alt="" />
            </div>
          </div>

          <p>
            <img src={Header1} alt="" />
          </p>
        </div>
      </div>

      <div className="league__heading">
        <Heading text={"league board"} />
      </div>

      <div className="league__btn">
        <p>
          <ArrowBtn
            text={selectedLeague}
            onClick={handleLeagueDropdownToggle}
            isOpen={leagueDropdownOpen}
            dropdownOptions={leagues}
            onSelect={handleLeagueSelect}
          />
        </p>

        <p>
          <ArrowBtn
            text={selectedTeam}
            onClick={handleTeamDropdownToggle}
            isOpen={teamDropdownOpen}
            dropdownOptions={teams}
            onSelect={handleTeamSelect}
          />
        </p>
      </div>
      <div className="table_wrapper">
        <table>
          <div className="league__table">
            <tr>
              <th></th>
              <th>banned</th>
              <th>round 1</th>
              <th>round 2</th>
              <th>round 3</th>
              <th>round 4</th>
              <th>round 5</th>
              <th>round 6</th>
            </tr>
            {leaguesInfo
              ?.filter((item) =>
                item.leagueType
                  .toLocaleLowerCase()
                  .includes(
                    selectedLeague.toLocaleLowerCase().trim().split(" ")[0]
                  )
              )
              .map((league, index) => {
                return (
                  <div className="lea" key={index}>
                    <tr>
                      <td>
                        <section>
                          <div className="league__flag">
                            {/* <img src={league.players[0].profilePhoto} alt="" /> */}
                              {/* Display profile photo */}
                            {league.players.length > 0 && (
                            <img
                          src={league.players[0].profilePhoto}
                          alt={league.players[0].name}
                          />
                          )}
                          </div>

                          <div>
                          <p className="username">
                          {league.players.length > 0 && league.players[0].name}
                          </p>
                            {/* <p className="username">{league.players[0].name}</p> */}

                            <p>
                              <img src={league.country} alt="" />
                            </p>
                          </div>
                        </section>
                      </td>

                      <td id="banned" className="clubimg">
                        <img
                          src={imageUrl(league.bannedPokemons[1]
                            // .sticker
                            )}
                          alt=""
                        />
                      </td>

                      {/* {league.players[0]
                      // .teamsPresets[0]
                      // .pokemon
                      .map(
                        (item) => (
                          <td key={item._id} className="clubimg">
                            <img src={imageUrl(item.sticker)} alt="" />
                          </td>
                        )
                      )} */}
                    </tr>
                  </div>
                );
              })}
          </div>
        </table>
      </div>
    </div>
  );
}

export default Leagues;
