import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Button from "../../components/button/Button";
import Curved from "../../components/button/Curved";
import { ArrowDropDownIcon } from "../../components/imports/icons/Icons";
import { Header1, LeagueBanner } from "../../components/imports/imgs/Images";
import Heading from "../../components/text/Heading";
import { CircularProgress } from "@mui/material";
import ShadowIcon from "./layout/ShadowIcon";
import Dropdown from "./layout/Dropdown";
import TextField from "./layout/TextField";

function TournamentBt() {
  const [fetching, setFetching] = useState(false);
  const [file, setFile] = useState(null);

  const [rsvp, setRsvp] = useState("");
  const [minScore, setMinScore] = useState("");
  const [highScore, setHighScore] = useState("");
  const [league, setLeague] = useState("");

  const initialForm = {
    species: [],
    cp: [],
    shadow: [],
  };

  const [form, setForm] = useState(initialForm);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
    },
  };

  useEffect(() => {
    setLeague(leagues[0]);
    try {
      const fetchData = async () => {
        await axios.get(`/tournaments/${id}`, config).then((res) => {
          setRsvp(res.data?.tournament.rsvpCode);
          console.log(res.data?.tournament.rsvpCode);
        });
      };

      // const data = async () => {
      //   await axios("/users/me", config).then((res) => {
      //     console.log(res.data, 'FUUUU');
      //   });
      // };

      // data()
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

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
  const handleShadow = (value, index) => {
    setForm((prev) => {
      const updatedShadow = [...prev.shadow];
      updatedShadow[index] = value;
      return { ...prev, shadow: updatedShadow };
    });
  };

  const handlePokemon = ({ value }) => {};

  const handleLeague = ({ value }) => {
    setLeague(value);
  };

  const { id } = useParams();

  const specieNames = ["Mouse", "Seed", "Flame", "Balloon", "Tiny Turtle"];
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
  const leagues = ["master league", "great league", "ultra league"];

  const enterTournament = async () => {
    setFetching(true);
    try {
      const pokemon = form.species.map((species, index) => {
        return {
          species: species,
          cp: form.cp[index],
          isShadow: `${form.shadow[index]}`,
        };
      });
      let words = league.split(" ");
      const data = {
        rsvpCode: rsvp,
        pokemon,
        tts: {
          minScore: minScore,
          highScore: highScore,
        },
        isAgree: "true",
        league: words[0],
        logo: file,
        loadTeam: 2,
      };

      console.log(data);
      await axios.post(`/tournaments/${id}/join`, data, config).then((res) => {
        console.log(res);
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
      alert(error.data?.response.message);
      setFetching(false);
    }
  };

  const rules = [
    {
      rule: "RULE 1 No Rule Changes",
      desc: "No modifications, additions, or subtractions to these standardized rules may be enacted or enforced by Tournament Officials in Ranked Arena tournaments or the tournament will no longer be accredited and contribute to player rank.",
    },

    {
      rule: "RULE 2 Team Selection ",
      desc: "You may only use the 6 individual Pokémon registered when entering the tournament. Altering the Battle Team in any way after the tournament has begun is forbidden (see 1.1 Tournament Types).",
    },

    {
      rule: "RULE 3 Great League",
      desc: "All battles must be fought in Great League",
    },

    {
      rule: "RULE 4 Three Battles",
      desc: ":Opponents will battle three times to determine a winner. The winner may only be determined through the normal progress of the game in play, and in the case of disputes, the in-game Journal and/or video evidence will be used. Opponents may not collude to report outcomes not achieved in battle. Competitors may, however, concede the match or any remaining battles at any point. ",
    },
  ];
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
          <ShadowIcon handleShadow={handleShadow} index={i} />
        </div>
      );
    }

    return rows;
  };
  return (
    <div className="tournamentbt league">
      <div className="league__banner">
        <div className="league__banner__1">
          <h3>
            tournament - <span>build team</span>
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

          {/* <div className="header__footer__arrows">
            <p>
              <img src={Left} alt="" />
            </p>

            <div>
              <img src={Right} alt="" />
            </div>
          </div> */}

          <p>
            <img src={Header1} alt="" />
          </p>
        </div>
      </div>

      <div className="tournamentbt__body">
        <div className="tournamentbt__body__heading">
          <Heading text={"enter this tournament"} />
        </div>

        <p className="subtext">
          To officially register for this tournament, select the 6 Pokemon you
          will use in combat and their CP values. Note: Your registered Pokemon
          will become public information viewable by all once the tournament
          begins and will remain viewable afterward.
        </p>

        <div className="tournamentbt__body__item">
          <div className="item__btn">
            <Curved text={1} />
          </div>

          <div className="other__items">
            <h3>add rsvp code</h3>

            <p>
              Nulla rutrum sem turpis, at pretium quam porttitor in. Integer
              sodales at enim et blandit. Aliquam dignissim vestibulum
              hendrerit. Quisque dapibus blandit metus. Nulla rutrum sem turpis,
              at pretium quam porttitor in.
            </p>

            <p>
              <input
                type="text"
                value={rsvp}
                onChange={(e) => setRsvp(e.target.value)}
                placeholder="enter rsvp"
              />
            </p>
          </div>
        </div>

        <div className="tournamentbt__body__item">
          <div className="item__btn">
            <Curved text={2} />
          </div>

          <div className="other__items__2">
            <h3>make selection</h3>

            <p>
              Until this tournament begins, you may change your Pokemon team by
              returning to this page. Once the tournament begins, however, your
              team is locked! Choose carefully!
            </p>

            {renderRows()}

            <div className="spicie__row__button">
              <Button text={"load team #1"} />
              <Button text={"load team #2"} />
              <Button text={"load team #3"} />
            </div>
          </div>
        </div>

        {/* <div className="tournamentbt__body__item">
          <div className="item__btn">
            <Curved text={3} />
          </div>

          <div className="other__items">
            <h3>team builder</h3>

            <p>
              Select your Pokemon and movesets below. You'll see how your team
              matches up against top Pokemon, which Pokemon pose a potential
              threat, and potential alternatives for your team. You can also use
              this tool to identify strong team cores and how to break them.
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


            <div className="tts__section">
              <div className="tts">TTS</div>
              <div className="lowscore">low score</div>

              <p>
                <input
                  type="text"
                  value={minScore}
                  onChange={(e) => setMinScore(e.target.value)}
                  className="spicie__rows__input"
                  placeholder="enter min value"
                />
              </p>

              <div className="highscore">high score</div>

              <p>
                <input
                  type="text"
                  value={highScore}
                  onChange={(e) => setHighScore(e.target.value)}
                  className="spicie__rows__input"
                  placeholder="enter min value"
                />
              </p>
            </div>
          </div>
        </div> */}

        <div className="tournamentbt__body__item ">
          <div className="item__btn">
            <Curved text={3} />
          </div>

          <div className="other__items">
            <h3>AGREE TO THE TOURNAMENT RULES </h3>
            <div className="other__items__rule">
              {rules.map((rule, index) => {
                return (
                  <div className="other__items__rule__item" key={index}>
                    <h3>{rule.rule}</h3>

                    <p>{rule.desc}</p>
                  </div>
                );
              })}

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
                <div className="btn__submit tbtLogo">
                  <Button text={"upload logo"} />
                </div>
              </label>

              <div className="rule__load__more">
                {/* <Button text={"load more"} /> */}
                <p onClick={enterTournament}>
                  <Button
                    text={
                      fetching ? (
                        <CircularProgress size={16} color="inherit" />
                      ) : (
                        "enter tournament"
                      )
                    }
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TournamentBt;
