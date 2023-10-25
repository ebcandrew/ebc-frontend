import React from "react";
import "./gamerStat.css";
import { Arts } from "../imports/imgs/Images";
import flag from "../imports/svg/au.svg";
import flag2 from "../imports/svg/us.svg";

export default function GamerStat({ data }) {
  const innerData = [
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
    {
      id: 3,
      title: "KINGTGAMES",
      userName: "UserName",
    },
    {
      id: 4,
      title: "KINGTGAMES",
      userName: "UserName",
    },
    {
      id: 5,
      title: "KINGTGAMES",
      userName: "UserName",
    },

    {
      id: 6,
      title: "KINGTGAMES",
      userName: "UserName",
    },
  ];
  return (
    <>
      <div className="GamerStatBox">
        <div className="StatTitleBox">
          <div className="StatTitleWrapper">
            <span className="StatWrapperName">{data.userName}</span>
          </div>
        </div>
        <div className="StatBoxesContainer">
          {innerData.map((data) => (
            <div className="StatBox">
              <div className="StatBoxImageSide">
                <div className="StatBoxImageWrapper">
                  <img className="WrapperImage" src={Arts} alt="" />
                </div>
              </div>
              <div className="StatBoxContent">
                <span className="StatBoxTitle">{data.title}</span>
                <span className="StatBoxName">{data.userName}</span>
                <span className="StatBoxCp">
                  <span className="StatBoxCpTitle">CP:</span>
                  <img className="StatBoxFlag" src={flag} alt="" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
