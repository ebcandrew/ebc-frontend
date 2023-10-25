import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Curved from "../../components/button/Curved";
import { ArrowDropDownIcon } from "../../components/imports/icons/Icons";
import {
  Header1,
  LeagueBanner,
  Left,
  Right,
} from "../../components/imports/imgs/Images";
import Heading from "../../components/text/Heading";
import "./Teammanager.css";
import TextField from "../tournament/layout/TextField";
import Dropdown from "../tournament/layout/Dropdown";

function Teammanager() {
  const initialForm = {
    name: "",
    species: [],
    cp: [],
  };
  const [form, setForm] = useState(initialForm);
  const [file, setFile] = useState(null);
  const [league, setLeague] = useState("");

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  useEffect(() => {
    setLeague(leagues[0]);
  }, []);

  const specieNames = ["Mouse", "Seed", "Flame", "Balloon", "Tiny Turtle"];
  const leagues = ["master league", "great league", "ultra league"];
  const pokemons = [
    "Pikachu",
    "Rattata",
    "Raichu",
    "Sandshrew",
    "Sandslash",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Cyndaquil",
    "Quilava",
  ];

  const handleDropdown = ({ value, index }) => {
    setForm((prev) => {
      const updatedSpecies = [...prev.species];
      updatedSpecies[index] = value;
      return { ...prev, species: updatedSpecies };
    });
  };

  const handleChange = ({ value, index }) => {
    setForm((prev) => {
      const updatedCP = [...prev.cp];
      updatedCP[index] = value;
      return { ...prev, cp: updatedCP };
    });
  };

  const handlePokemon = ({ value }) => {};

  const handleLeague = ({ value }) => {
    setLeague(value);
  };

  const handleSubmit = () => {
    const pokemon = form.species.map((species, index) => {
      return {
        species: species,
        cp: form.cp[index],
      };
    });
    const data = {
      pokemon,
    };
    console.log(data);
    //  try {
    //    const fetchData = async () => {
    //      await axios.post(`/teams`, config).then((res) => {
    //
    //      });
    //    };

    //    fetchData();
    //  } catch (error) {
    //    console.log(error);
    //  }
  };

  const renderRows = () => {
    const rows = [];

    for (let i = 0; i < 6; i++) {
      rows.push(
        <div className="spicie__rows" key={i}>
          <div className="select">
            <Dropdown
              handleDropdown={handleDropdown}
              index={i}
              options={specieNames}
              placeholder={"Select a specie"}
            />
          </div>
          <div className="spicie__select">
            <TextField
              handleChange={handleChange}
              value={form.cp[i]}
              index={i}
              placeholder="enter specie cp value"
            />
          </div>
        </div>
      );
    }

    return rows;
  };

  return (
    <div className="teammanager league">
      <div className="league__banner">
        <div className="league__banner__1">
          <h3>
            teams - <span>build a team (managers)</span>
          </h3>

          <p className="league__banner__1__text">
            hosted by: <span>lorem ipsum</span>
          </p>
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

      <div className="teammanager__body">
        <Heading text={"build your roaster"} />
        <p className="subtext">
          To officially register for this tournament, select the 6 Pokemon you
          will use in combat and their CP values. Note: Your registered Pokemon
          will become public information viewable by all once the tournament
          begins and will remain viewable afterward.
        </p>

        <Curved text={1} />

        <div className="tournamentbt__body__item">
          <div className="item__btn"></div>

          <div className="other__items">
            <h3>tEAM NAME - CITY AND NICKNAME</h3>

            <p>
              Nulla rutrum sem turpis, at pretium quam porttitor in. Integer
              sodales at enim et blandit. Aliquam dignissim vestibulum
              hendrerit. Quisque dapibus blandit metus. Nulla rutrum sem turpis,
              at pretium quam porttitor in.
            </p>

            <TextField
              handleChange={({ value }) => {
                setForm((prev) => ({ ...prev, name: value }));
              }}
              value={form.name}
              placeholder="enter team name"
            />
          </div>
        </div>

        <Curved text={2} />
        <div className="tournamentbt__body__item">
          <div className="item__btn"></div>

          <div className="other__items__2">
            <h3>ADD YOUR PLAYERS TO YOUR TEAM</h3>

            <p>
              Until this tournament begins, you may change your Pokemon team by
              returning to this page. Once the tournament begins, however, your
              team is locked! Choose carefully!
            </p>

            {renderRows()}
          </div>
        </div>

        <Curved text={3} />

        <div className="tournamentbt__body__item">
          <div className="item__btn"></div>

          <div className="other__items">
            <h3>Register team for event ( tournament / League)</h3>

            <p>
              Nulla rutrum sem turpis, at pretium quam porttitor in. Integer
              sodales at enim et blandit. Aliquam dignissim vestibulum
              hendrerit. Quisque dapibus blandit metus. Nulla rutrum sem turpis,
              at pretium quam porttitor in.
            </p>

            <div className="other__items__select__flex">
              <div className="team__select">
                <Dropdown
                  options={leagues}
                  handleDropdown={handleLeague}
                  placeholder={league}
                />
              </div>

              <div className="team__select">
                <Dropdown
                  handleDropdown={handlePokemon}
                  options={pokemons}
                  placeholder={"Select 6 pokemons"}
                />
              </div>
            </div>

            <div className="tm__review__btn">
              <div className="btn__submit">
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
                  <Button text={"upload logo"} />
                </label>
              </div>
              {/* <Button text={"uplod photo"} /> */}
              <Button text={"uplod logo for review"} />
            </div>
          </div>
        </div>

        <Curved text={4} />
        <div className="tournamentbt__body__item">
          <div className="item__btn"></div>

          <div className="other__items">
            <h3>AGREE TO THE TOURNAMENT / LEAGUE RULES </h3>

            <div className="other__items__rules">
              <div className="rule">
                <h3>RULE 1 No Rule Changes</h3>

                <p>
                  No modifications, additions, or subtractions to these
                  standardized rules may be enacted or enforced by Tournament
                  Officials in Ranked Arena tournaments or the tournament will
                  no longer be accredited and contribute to player rank.
                </p>
              </div>

              <div className="rule">
                <h3>RULE 2 No team selection</h3>

                <p>
                  You may only use the 6 individual Pokémon registered when
                  entering the tournament. Altering the Battle Team in any way
                  after the tournament has begun is forbidden (see 1.1
                  Tournament Types).
                </p>
              </div>

              <div className="rule">
                <h3>RULE 3 great league</h3>

                <p>All battles must be fought in Great League.</p>
              </div>

              <div className="rule">
                <h3>RULE 4 three battles</h3>

                <p>
                  :Opponents will battle three times to determine a winner. The
                  winner may only be determined through the normal progress of
                  the game in play, and in the case of disputes, the in-game
                  Journal and/or video evidence will be used. Opponents may not
                  collude to report outcomes not achieved in battle. Competitors
                  may, however, concede the match or any remaining battles at
                  any point.
                </p>
              </div>
            </div>

            <div className="other__items__rules__btn">
              <Button text={"load more"} />

              <Button onClick={handleSubmit} text={"enter tournment"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teammanager;
