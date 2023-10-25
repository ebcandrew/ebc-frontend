import React from "react";
import { Tourna } from "../../components/imports/imgs/Images";
import "./tournamentlayout.css";

export default function TournamentLayout({ children }) {
  return (
    <>
      <div className="TournamentLayoutSection">
        <div className="TournamentLayoutHeader">
          <div className="HeaderContentSection">
            <div className="HeaderContentContainer">
              <h1 className="HeaderTitle">Tournament-</h1>
              <h1 className="HeaderTitle2">Match Up</h1>
              <span className="HeaderDesc">
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </span>
            </div>
          </div>

          <div className="HeaderImageSection">
            <img className="HeaderImage" src={Tourna} alt="" />
          </div>
        </div>

        <div className="TournamentUserStat">{children}</div>
      </div>
    </>
  );
}
