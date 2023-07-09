import axios from "../../axios";
import React, { useEffect, useState } from "react";
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from "../imports/icons/Icons";
import { Top1, Top2, Top3, Top4 } from "../imports/imgs/Images";
import Heading from "../text/Heading";
import "./TopPlayers.css";

function TopPlayers() {
  const [topPlayers, setTopPlayers] = useState([]);
  // const PF = "http://localhost:5000/imgs/users/";
  const PF = `${process.env.REACT_APP_PUBLIC_FOLDER_PUB}/users/`;

  const defaultPic =
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";

  useEffect(() => {
    try {
      const fetchTopPlayers = async () => {
        await axios.get("/leagues/top-players").then((res) => {
          // console.log(res.data?.data);
          setTopPlayers(res.data?.data.continental);
        });
      };

      fetchTopPlayers();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="topplayers">
      <div className="topplayers__left">
        <Heading text={"global top 20 players"} />

        {topPlayers.length > 4 && (
          <div className="header__footer__arrows topplayers">
            <p>
              <ArrowCircleLeftIcon />
            </p>

            <p>
              <ArrowCircleRightIcon className="img" />
            </p>
          </div>
        )}
      </div>

      <div className="topplayers__right">
        {topPlayers?.slice(0, 20).map((card, index) => {
          return (
            <div className="topplayers__right__cards" key={index}>
              <div className="topplayers__right__cards__img">
                {card.profilePhoto === defaultPic ? (
                  <img src={defaultPic} alt="" />
                ) : (
                  <img
                    src={PF + card.profilePhoto}
                    alt=""
                    crossOrigin="anonymous"
                  />
                )}
              </div>

              <div>
                <p className="name">
                  <a
                    href={`/view-user/${card._id}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {card.name} <span>"{card.role}"</span>
                  </a>
                </p>

                <div className="bottom__text">
                  <p className="number">#{index + 1}</p>

                  <p className="desc">{card.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopPlayers;
