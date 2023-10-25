import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { ArrowForwardIcon, YouTubeIcon } from "../imports/icons/Icons";
import { T1, T2 } from "../imports/imgs/Images";
import Heading from "../text/Heading";
import "./FeaturedEvents.css";

const FeaturedEvents = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetchFeaturedEvents();
  }, []);

  const fetchFeaturedEvents = async () => {
    console.log("requesting");
    try {
      const response = await axios.get("/tournaments/featured-events");
      setFeatured(response.data?.featuredMatches);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="featuredevents">
      <Heading text="Featured Events" />

      <div className="featuredevents__heading">
        <div className="tag">
          <p>Featured Events </p>
        </div>

        <div className="link">
          <a href="/all-tournaments">See All</a>
          <ArrowForwardIcon className="LinkIcon" />
        </div>
      </div>

      <div className="featuredevents__list">
        {featured?.map((event, index) => {
          console.log(
            event?.tournament?.matches[0]?.player1Score,
            "Eveent details"
          );
          const isHighScore = event.player1Score > event.player2Score;

          return (
            <div className="featuredevents__list__item" key={index}>
              <div className="scores">
                <p>
                  <img src={T1} alt="" />
                </p>

                <p
                  className={`score ${isHighScore ? "high" : ""}`}
                  style={{ color: isHighScore ? "red" : "white" }}
                >
                  {event.player1Score}
                </p>

                <span>vs</span>

                <p className={`score ${isHighScore ? "" : "high"}`}>
                  {event.player2Score}
                </p>

                <p>
                  <img src={T2} alt="" />
                </p>
              </div>

              <div className="league">
                <div className="leagueInfoWrapper">
                  <p className="name">{event.tournament.league}</p>
                  <p className="cup">{event.matchName}</p>
                  <p className="date">{event.startTime}</p>
                </div>

                <div className="video__link">
                  <a href={event.matchLink}>
                    <YouTubeIcon />
                    <p>Watch</p>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedEvents;
