import { Link, useNavigate } from "react-router-dom";
import {
  ASAC_Map,
  Africa_Map,
  Europe_Map,
  LeagueBanner,
  NA_Map,
  RegionalLeague,
  SA_Map,
} from "../../components/imports/imgs/Images";
import "../LeagueByRegion/index.css";
import { allTournamentsData } from "../../components/imports/data/allTournamentsData";

function EBCTournaments(params) {
  let navigate = useNavigate();
  const regionalData = allTournamentsData;
  return (
    <div className="containered">
      <div className="banner">
        <div className="bannerChildren">
          <h1 className="bannerHeading">EBC Tournaments</h1>
          <p className="bannerText">
            That sounds like an exciting lineup of Pokémon Go tournaments!{" "}
            <br /> Young trainers under 13 participating with parental consent.{" "}
            <br /> March Madness with TM use in PvP battles. <br /> EBC World
            Jr's round robin competition. <br />
            EBC World Cup with 40 top trainers from around the globe. Count me
            in!
          </p>
        </div>
        <div className="bannerChildren">
          <img className="image bannerImage" src={LeagueBanner} />
        </div>
      </div>
      <div>
        <div className="regionIconContainer">
          <div className="regionSubIcons flex-column">
            <h1>Women's</h1>
          </div>
          <div className="regionSubIcons flex-column">
            <h1>Men's</h1>
          </div>
          {regionalData.map((e, i) => {
            return (
              <div
                className="regionSubIcons flex-column"
                onClick={() => navigate(e.link_to)}
              >
                <img className="mainregIcon" src={e.icon || e} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EBCTournaments;
