import axios from "../../axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import {
  AD,
  Arts,
  LeaderboardBanner,
  Profile,
} from "../../components/imports/imgs/Images";
import Heading from "../../components/text/Heading";
import { Link } from "react-router-dom";
function Continental() {
  const [regional, setRegional] = useState([]);
  // const PF = "http://localhost:5000/imgs/users/";
  const PF = `${process.env.REACT_APP_PUBLIC_FOLDER_PUB}/users/`;

  const defaultPic =
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";

  useEffect(() => {
    try {
      const fetchRegional = async () => {
        await axios.get("/leagues/top-players").then((res) => {
          setRegional(res.data?.data.continental);
        });
      };

      fetchRegional();
    } catch (error) {
      console.log(error);
    }
  });

  const tableValues = [
    {
      country: AD,
      profile: Profile,
      art: Arts,
      name: "username",
      desc: "lorem ipsum",
      battles: 12,
      wins: 23,
      loses: 43,
      wl: 4,
      rank: "legend",
    },
    {
      country: AD,
      profile: Profile,
      art: Arts,
      name: "username",
      desc: "lorem ipsum",
      battles: 12,
      wins: 23,
      loses: 43,
      wl: 4,
      rank: "legend",
    },
    {
      country: AD,
      profile: Profile,
      art: Arts,
      name: "username",
      desc: "lorem ipsum",
      battles: 12,
      wins: 23,
      loses: 43,
      wl: 4,
      rank: "legend",
    },
    {
      country: AD,
      profile: Profile,
      art: Arts,
      name: "username",
      desc: "lorem ipsum",
      battles: 12,
      wins: 23,
      loses: 43,
      wl: 4,
      rank: "legend",
    },

    {
      country: AD,
      profile: Profile,
      art: Arts,
      name: "username",
      desc: "lorem ipsum",
      battles: 12,
      wins: 23,
      loses: 43,
      wl: 4,
      rank: "legend",
    },
    {
      country: AD,
      profile: Profile,
      art: Arts,
      name: "username",
      desc: "lorem ipsum",
      battles: 12,
      wins: 23,
      loses: 43,
      wl: 4,
      rank: "legend",
    },
    {
      country: AD,
      profile: Profile,
      art: Arts,
      name: "username",
      desc: "lorem ipsum",
      battles: 12,
      wins: 23,
      loses: 43,
      wl: 4,
      rank: "legend",
    },
  ];

  return (
    <div className="leaderboard">
      <div className="tournament__header">
        <div className="tournament__text">
          <h3>
            leaderboard -<span>continental</span>
          </h3>
        </div>

        <div className="tournament__image">
          <img src={LeaderboardBanner} alt="" />
        </div>
      </div>

      <div className="leaderboard__btns">
        <div className="btn">
          <Link to="/leaderboard">
            <Button text={"world wide"} />
          </Link>
        </div>{" "}
        <div className="btn" id="first">
          <Button text={"Contentential"} />
        </div>
        <div className="btn">
          <Link to="/regional">
            <Button text={"country & regional"} />
          </Link>
        </div>
      </div>

      <Heading text={"canada"} />

      <div className="leaderboard__para">
        This web page showcases the world's top players, presenting
        comprehensive stats like win-loss percentages and rankings.
      </div>
      <div className="table_wrapper">
        <table>
          <tr className="TableHead">
            <th>
              <span className="RankButton">
                <span className="RankButtonText">Rank</span>
              </span>
              {/* <Button text={"rank"} /> */}
            </th>

            <th>
              <span>name</span>
            </th>
            <th>
              <span>battles</span>
            </th>
            <th>
              <span>wins</span>
            </th>
            <th>
              <span>losses</span>
            </th>
            <th>
              <span>w/l %</span>
            </th>
            <th>
              <span>competitor rank</span>
            </th>
          </tr>
          {tableValues.map((value, index) => {
            return (
              <tr key={index}>
                <td> #{index + 1}</td>

                <td id="cstate">
                  <span className="country">
                    <img style={{ width: "30px" }} src={value.country} alt="" />
                  </span>

                  <span className="name">
                    <h3>{value.name}</h3>
                    <span>{value.desc}</span>
                  </span>
                  {value.profilePhoto === defaultPic ? (
                    <p className="profile">
                      <Link to={`/view-user/${value._id}`}>
                        <img src={defaultPic} alt="" />
                      </Link>
                      <img src={value.art} alt="" />
                    </p>
                  ) : (
                    <p className="profile">
                      <Link to={`/view-user/${value._id}`}>
                        <img src={defaultPic} alt="" />
                      </Link>
                      <img src={value.art} alt="" />
                    </p>
                  )}
                </td>

                <td>
                  <span className="tableValue">{value.battles}</span>
                </td>

                <td>
                  <span className="tableValue">{value.wins}</span>
                </td>

                <td>
                  <span className="tableValue">{value.loses}</span>
                </td>

                <td>
                  <span className="tableValue">{value.wl}</span>
                </td>

                <td id="rank">{value.rank}</td>
              </tr>
            );
          })}
        </table>
      </div>
      {regional.length > 10 && (
        <div className="leaderboard__loadmore">
          <Button text={"load more"} />
        </div>
      )}
    </div>
  );
}

export default Continental;
