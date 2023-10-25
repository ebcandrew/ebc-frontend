import React, { useState } from "react";
import "./continentalCup.css";
import {
  LeagueHome,
  ASAC_Map,
  Elite_APAC,
} from "../../components/imports/imgs/Images";

export default function ContinentalCup({ data, map }) {
  console.log(data[0].regions[0]);
  const [regionImg, setRegionImg] = useState(data[0].regions[0]);

  console.log(regionImg, map);
  return (
    <>
      <div className="ContinentalCupSection">
        {data.map((data) => (
          <div className="ContinentalHeroSection">
            <div className="ContinentalCupContentSection">
              <h1 className="ContentTitle">{data.title}</h1>
              <p className="ContinentalDesc">{data.desc}</p>
            </div>
            <div className="ContinentalImageSection">
              <img src={LeagueHome} alt="" />
            </div>
          </div>
        ))}

        <div className="ContinentalTiersContainer">
          <div className="ContinentalRegionTierMap">
            <img className="ContinentalRegionMapImage" src={map} alt="" />
          </div>

          {data[0]?.regions?.map((info) => (
            <div className="ContinentalRegionTier">
              <img className="ContinentalRegionImage" src={info.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
