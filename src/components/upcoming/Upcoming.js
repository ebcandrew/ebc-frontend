import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { Cup, Date, Location, Up1, Up2, Up3, Up4 } from "../imports/imgs/Images";
import Heading from "../text/Heading";
import "./Upcoming.css";

const Upcoming = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetchUpcomingTournaments();
  }, []);

  const fetchUpcomingTournaments = async () => {
    console.log("requesting");
    try {
      axios.get("/tournaments/upcoming")
        .then(response => {
          console.log("ok");
          console.log(response);
          setLists(response.data?.upcomingTournaments);
        })
        .catch(error => {
          console.error("Error fetching upcoming tournaments:", error);
        });
    } catch (error) {
      console.error("Error fetching upcoming tournaments:", error);
    }
  };
  return (
    <div className="upcoming">
      <div className="upcoming__heading">
        <Heading text="Upcoming Events" />
      </div>

      <div className="upcoming__container">
        <div className="upcoming__container__list">
          {lists?.slice(0, 4).map((list, index) => (
            <div className="upcoming__container__list__item" key={index}>
              <div className="cup">
                <img src={Cup} alt="" />
              </div>

              <div className="name__items">
                <div className="top">
                  <a
                    href={`/tournament/${lists._id}`}
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h3>{list.name}</h3>
                    <p style={{ fontSize: 12, fontWeight: "bold" }}>
                      {list.startTime}
                    </p>
                  </a>
                </div>

                <section>
                  <p>
                    <img src={Date} alt="" />
                    {list.startDate}
                  </p>
                  <p>
                    <img src={Location} alt="" />
                    {list.address}
                  </p>
                </section>
              </div>
            </div>
          ))}

        </div>

        <div className="upcoming__container__cards">
          <img src={Up1} alt="" />
          <img src={Up2} alt="" />
          <img src={Up3} alt="" />
          <img src={Up4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
