import React from "react";
import {
  CalendarMonthIcon,
  MapIcon,
} from "../../components/imports/icons/Icons";
import { Arts, Arts2 } from "../../components/imports/imgs/Images";
import Heading from "../../components/text/Heading";
import "./EventMap.css";

function EventMap() {
  const fixtures = [
    {
      user1game: "KNIGHT GAMING",
      user2game: "hoodie GAMING",
      user1img: Arts,
      user2img: Arts2,
      title: "iNDIESPORT 2020",
    },
  ];

  const pinned = [
    {
      user1game: "KNIGHT GAMING",
      user2game: "hoodie GAMING",
      user1img: Arts,
      user2img: Arts2,
      title: "league 2020",
    },

    {
      user1game: "KNIGHT GAMING",
      user2game: "hoodie GAMING",
      user1img: Arts,
      user2img: Arts2,
      title: "league 2020",
    },
  ];
  return (
    <div className="eventmap">
      <div className="eventmap__map"></div>

      <div className="eventmap__mapfooter">
        <p>
          <div className="green"></div>

          <h4>online event</h4>
        </p>

        <p>
          <div className="white"></div>

          <h4>in person event</h4>
        </p>
      </div>

      <div className="eventmap__pinned">
        <div className="eventmap__pinned__indie">
          <div className="eventmap__fixes">
            {fixtures.map((fix, index) => {
              return (
                <>
                  <h3>{fix.title} </h3>

                  <div className="fixture__row" key={index}>
                    <p className="game">{fix.user1game}</p>

                    <p className="img">
                      <img src={fix.user1img} alt="" />
                    </p>

                    <p className="verses">vs</p>

                    <p className="img">
                      <img src={fix.user2img} alt="" />
                    </p>
                    <p className="game">{fix.user2game}</p>
                  </div>
                </>
              );
            })}
          </div>

          <div className="eventmap__tournament">
            <h3>tournament details</h3>

            <div className="eventmap__tournament__details">
              <p>
                <MapIcon />
              </p>

              <p id="text">location</p>

              <p>lorem ipsum dotor</p>
            </div>

            <div className="eventmap__tournament__details">
              <p>
                <CalendarMonthIcon />
              </p>

              <p id="text">date</p>

              <p>August 8-15</p>
            </div>
          </div>
        </div>

        <div className="eventmap__pinned__tourns">
          <Heading text={"pinned tournaments"} />

          <div className="eventmap__fixes">
            {pinned.map((fix, index) => {
              return (
                <>
                  <h3>{fix.title} </h3>

                  <div className="fixture__row" key={index}>
                    <p className="game">{fix.user1game}</p>

                    <p className="img">
                      <img src={fix.user1img} alt="" />
                    </p>

                    <p className="verses">vs</p>

                    <p className="img">
                      <img src={fix.user2img} alt="" />
                    </p>
                    <p className="game">{fix.user2game}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventMap;
