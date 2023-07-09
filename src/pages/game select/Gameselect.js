import React from "react";
import { Gamebanner, Pk } from "../../components/imports/imgs/Images";
import "./Gameselect.css";

function Gameselect() {
  return (
    <div className="gameselect">
      <div className="gameselect__banner">
        <div className="gameselect__banner__text">
          <h3>select your game</h3>
          <p>
            Nulla rutrum sem turpis, at pretium quam porttitor in. Integer
            sodales at enim et blandit. Aliquam dignissim vestibulum hendrerit.
          </p>
        </div>

        <div className="gameselect__banner__img">
          <img src={Gamebanner} alt="" />
        </div>
      </div>

      <div className="gameselect__tags">
        <p>
          <img src={Pk} alt="" />
        </p>
        <p>
          <img src={Pk} alt="" />
        </p>
        <p>
          <img src={Pk} alt="" />
        </p>
        <p>
          <img src={Pk} alt="" />
        </p>
        <p>
          <img src={Pk} alt="" />
        </p>
        <p>
          <img src={Pk} alt="" />
        </p>
      </div>
    </div>
  );
}

export default Gameselect;
