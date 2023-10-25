import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import { Cup, LeaderboardBanner } from "../../components/imports/imgs/Images";
import Heading from "../../components/text/Heading";
import "./Halloffame.css";
import axios from "../../axios";

function Halloffame() {
  const [cups, setCups] = useState([]);
  useEffect(() => {
    const fetchCups = async () => {
      try {
        const response = await axios.get("/seasons");
        const data = response.data?.data[1];
        setCups([data]);
        console.log([data])
      } catch (error) {
        console.log(error);
      }
    };

    fetchCups();
  }, []);
  // const cups = [
  //   {
  //     position: "world champion",
  //     username: "username",
  //     desc: "lorem ipsum",
  //   },

  //   {
  //     position: "world champion",
  //     username: "username",
  //     desc: "lorem ipsum",
  //   },

  //   {
  //     position: "world champion",
  //     username: "username",
  //     desc: "lorem ipsum",
  //   },

  //   {
  //     position: "world champion",
  //     username: "username",
  //     desc: "lorem ipsum",
  //   },
  // ];
  return (
    <div className="leaderboard halloffame">
      <div className="tournament__header">
        <div className="tournament__text">
          <h3>
            <span> hall of fame</span>
          </h3>

          <Button text={"select season"} />
        </div>

        <div className="tournament__image">
          <img src={LeaderboardBanner} style={{ width: "100%" }} alt="" />
        </div>
      </div>

      <div className="leaderboard__btns">
        <div className="btn" id="first">
          <Button text={"world wide"} />
        </div>{" "}
        <div className="btn">
          <Button text={"country & religion"} />
        </div>
      </div>

      <Heading text={"selected season"} />

      <div className="leaderboard__para">
        Nulla rutrum sem turpis, at pretium quam porttitor in. Integer sodales
        at enim et blandit. Aliquam dignissim vestibulum hendrerit. Quisque
        dapibus blandit metus. Nulla rutrum sem turpis, at pretium quam
        porttitor in.
      </div>

      <div className="halloffame__text__body">
        <h3>SEP 2022 - NOV 2022</h3>

        <h3>world + country awards</h3>
      </div>
      {cups.map((cup, index) => {
        return (

          <div className="halloffame__cups" index={index}>
            <div className="halloffame__cups__lead">
              <p className="cup">
                <img src={Cup} alt="" />
              </p>

              <p className="details">
                <p className="details__avatar"></p>

                <div className="details__main">
                  <p id="cupname">world champion</p>

                  <p id="username">{cup.name}</p>

                  <p id="desc">{cup.description}</p>
                </div>
              </p>
            </div>
          </div>
        );
      })}

      <div className="halloffame__cups__others">
        {cups.map((cup, index) => {
          return (
            <div className="halloffame__cups" index={index}>
              <div className="halloffame__cups__lead others">
                <p className="cup">
                  <img src={Cup} alt="" />
                </p>

                <p className="details">
                  <p className="details__avatar"></p>

                  <div className="details__main">
                    <p id="cupname">world champion</p>

                    <p id="username">{cup.name}</p>

                    <p id="desc">{cup.description}</p>
                  </div>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="halloffame__regional">
        <Heading text={"regional champions - country (name here )"} />

        <div className="region__name">
          <h3>region name</h3>
        </div>

        <div className="halloffame__cups__others">
          {cups.map((cup, index) => {
            return (
              <div className="halloffame__cups" index={index}>
                <div className="halloffame__cups__lead others">
                  <p className="cup">
                    <img src={Cup} alt="" />
                  </p>

                  <p className="details">
                    <p className="details__avatar"></p>

                    <div className="details__main">
                      <p id="cupname">world champion</p>

                      <p id="username">{cup.name}</p>

                      <p id="desc">{cup.description}</p>
                    </div>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Halloffame;
