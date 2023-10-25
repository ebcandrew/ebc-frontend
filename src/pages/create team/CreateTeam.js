import "./CreateTeam.css";
import Curved from "../../components/button/Curved";
import {
  CreateTeamImage,
  CreateTeamManImage,
} from "../../components/imports/imgs/Images";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

const CreateTeam = () => {
  const [fetching, setFetching] = useState(false);
  const [file, setFile] = useState(null);
  // const [tournamentType, setTournamentType] = useState("");
  const [leagueType, setLeagueType] = useState("");
  const [division, setDivision] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [teamRegion, setTeamRegion] = useState("");
  const [teamCountry, setTeamCountry] = useState("");
  const [teamSocial, setTeamSocial] = useState({
    facebook: "",
    x: "",
    instagram: "",
    youtube: "",
    twitch: "",
    discord: "",
  });
  const [roster, setRoster] = useState({
    "player 1": "",
    "player 2": "",
    "player 3": "",
    "player 4": "",
    "player 5": "",
    "player 6": "",
  });

  const handleSubmit = () => {
    setFetching(true);
    // here you can send the data to the server
  };

  return (
    <div className="create-team_container">
      <div className="create-team_banner">
        <div className="create-team_banner-text">
          <h1>
            Create A <span>Team</span>
          </h1>
          <p>
            See how it works?{" "}
            <Link to={"/"}>
              <span>Live demo.</span>
            </Link>{" "}
          </p>
        </div>
        <div className="create-team_banner-images">
          <img src={CreateTeamManImage} alt="create-team man" />
          <img src={CreateTeamImage} alt="create-team" />
        </div>
      </div>
      <div className="create-team_content">
        <form className="create-team_content-form">
          <div className="create-team_content-header">
            <div className="create-team_content-header-top">
              <div className="create-team_content-header-text">
                <h2>Select a tournament</h2>
                <div className="rectangle"></div>
              </div>
              <div className="create-team_content-header-btns">
                <select
                  name="division"
                  id="division"
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                >
                  <option value="" disabled>
                    Select Division
                  </option>
                  <option value="Elite">Elite</option>
                  <option value="Ace">Ace</option>
                  <option value="Challenger">Challenger</option>
                  <option value="Rival">Rival</option>
                  <option value="Trainee">Trainee</option>
                </select>
                <select
                  name="leagueType"
                  id="leagueType"
                  value={leagueType}
                  onChange={(e) => setLeagueType(e.target.value)}
                >
                  <option value="" disabled>
                    Select League
                  </option>
                  <option value="Squad Series">Squad Series</option>
                </select>
                <select
                  name="region"
                  id="region"
                  value={teamRegion}
                  onChange={(e) => setTeamRegion(e.target.value)}
                >
                  <option value="" disabled>Select Team Region</option>
                  <option value="Africa">Africa</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="North America">North America</option>
                  <option value="South America">South America</option>
                  <option value="Asia Pacific">Asia Pacific</option>
                </select>
              </div>
            </div>
            <p>
              Would you like to host a custom tournament? Or an accredited
              tournament under EBC Rules that contributes to your attendees'
              player ranking ?{" "}
            </p>
          </div>

          <div className="create-team_content_item">
            <div className="item__btn">
              <Curved text={1} />
            </div>
            <div className="create-team_content_item-content">
              <h2>Team In Fo</h2>
              <p>This information will be used to identify your team </p>
              <div className="create-team_content_item-content-input">
                <label htmlFor="team-name">Team Name</label>
                <input
                  type="text"
                  name="team-name"
                  id="team-name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
                <input
                  required
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  id="fileInput"
                  style={{ display: "none", cursor: "pointer" }}
                />

                {file && (
                  <div className="blog__image__preview">
                    <img src={URL.createObjectURL(file)} alt="" />
                  </div>
                )}

                <label
                  htmlFor="fileInput"
                  style={{ cursor: "pointer", fontSize: 40 }}
                >
                  <div className="btn__submit">
                    <Button text={"upload team logo"} />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="create-team_content_item">
            <div className="item__btn">
              <Curved text={2} />
            </div>
            <div className="create-team_content_item-content">
              <h2>Team Description</h2>
              <div className="create-team_content_item-content-input">
                <textarea
                  name="team-description"
                  id="team-description"
                  cols="30"
                  rows="10"
                  value={teamDescription}
                  onChange={(e) => setTeamDescription(e.target.value)}
                  placeholder="Write a short description about your team"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="create-team_content_item">
            <div className="item__btn">
              <Curved text={3} />
            </div>
            <div className="create-team_content_item-content">
              <h2>Enter Team Details</h2>
              <p>Please enter more detailed information about your team </p>
              {/* <div className="create-team_content_item-content-input">
                <label htmlFor="team-region">
                  Your Teams Region (Continent)
                </label>
                <input
                  type="text"
                  name="team-region"
                  id="team-region"
                  value={teamRegion}
                  onChange={(e) => setTeamRegion(e.target.value)}
                />
              </div> */}
              <div className="create-team_content_item-content-input">
                <label htmlFor="team-country">
                  Your Teams Location (Country)
                </label>
                <input
                  type="text"
                  name="team-country"
                  id="team-country"
                  value={teamCountry}
                  onChange={(e) => setTeamCountry(e.target.value)}
                />
              </div>
              <h3>Social Accounts</h3>
              {Object.keys(teamSocial).map((key, index) => (
                <div
                  className="create-team_content_item-content-input"
                  key={index}
                >
                  <div className="social__logo">
                    <img src={`./logos/${key}.svg`} alt="" />
                    <label htmlFor={key}>{key}</label>
                  </div>
                  <input
                    type="text"
                    name={key}
                    id={key}
                    value={teamSocial[key]}
                    onChange={(e) =>
                      setTeamSocial({ ...teamSocial, [key]: e.target.value })
                    }
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="create-team_content_item">
            <div className="item__btn">
              <Curved text={4} />
            </div>
            <div className="create-team_content_item-content">
              <h2>Add Your Roster</h2>
              {Object.keys(roster).map((key, index) => (
                <div
                  className="create-team_content_item-content-input"
                  key={index}
                >
                  {index === 0 && (
                    <label htmlFor={key}>Player #1 (Owner/Captain)</label>
                  )}
                  {(index === 4 || index === 5) && (
                    <label htmlFor={key}>Player #{index + 1} (Bench)</label>
                  )}
                  {index !== 0 && index !== 4 && index !== 5 && (
                    <label htmlFor={key}>Player #{index + 1}</label>
                  )}
                  <input
                    type="text"
                    name={key}
                    id={key}
                    value={roster[key]}
                    onChange={(e) =>
                      setRoster({ ...roster, [key]: e.target.value })
                    }
                  />
                </div>
              ))}
              <Button
                text={
                  fetching ? (
                    <CircularProgress size={16} color="inherit" />
                  ) : (
                    "Create Team"
                  )
                }
                onClick={handleSubmit}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTeam;
