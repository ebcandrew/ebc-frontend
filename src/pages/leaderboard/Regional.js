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

function Regional() {
  const [regional, setRegional] = useState([]);

  // const PF = "http://localhost:5000/imgs/users/";
  const PF = `${process.env.REACT_APP_PUBLIC_FOLDER_PUB}/users/`;

  const defaultPic =
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";

  useEffect(() => {
    try {
      const fetchRegional = async () => {
        await axios.get("/leagues/top-players").then((res) => {
          setRegional(res.data?.data.regional);
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
      win: 23,
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
      win: 23,
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
      win: 23,
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
      win: 23,
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
      win: 23,
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
      win: 23,
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
      win: 23,
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
            leaderboard -<span>regional</span>
          </h3>
        </div>

        <div className="tournament__image">
          <img src={LeaderboardBanner} alt="" />
        </div>
      </div>

      <div className="leaderboard__btns">
        <div className="btn">
          <a href="/leaderboard">
            <Button text={"world wide"} />
          </a>
        </div>{" "}
        <div className="btn">
          <a href="/continental">
            <Button text={"Contentential"} />
          </a>
        </div>
        <div className="btn" id="first">
          <Button text={"country & regional"} />
        </div>
      </div>

      <Heading text={"canada"} />

      <div className="leaderboard__para">
        Nulla rutrum sem turpis, at pretium quam porttitor in. Integer sodales
        at enim et blandit. Aliquam dignissim vestibulum hendrerit. Quisque
        dapibus blandit metus. Nulla rutrum sem turpis, at pretium quam
        porttitor in.
      </div>
      <div className="table_wrapper">
        <table>
          <tr>
            <th>
              <Button text={"rank"} />
            </th>

            <th>name</th>
            <th>battles</th>
            <th>wins</th>
            <th>losses</th>
            <th>w/l %</th>
            <th>competitor rank</th>
          </tr>
          {regional.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>

                <td id="cstate">
                  <p className="country">
                    <img src={value.country} alt="" />
                  </p>

                  <p className="name">
                    <h3>{value.name}</h3>
                    <p>{value.desc}</p>
                  </p>

                  {value.profilePhoto === defaultPic ? (
                    <p className="profile">
                      <a href={`/view-user/${value._id}`}>
                        <img src={defaultPic} alt="" />
                      </a>
                      <img src={value.art} alt="" />
                    </p>
                  ) : (
                    <p className="profile">
                      <a href={`/view-user/${value._id}`}>
                        <img
                          src={PF + value.profilePhoto}
                          alt=""
                          crossOrigin="anonymous"
                        />
                      </a>
                      <img src={value.art} alt="" />
                    </p>
                  )}
                </td>

                <td>{value.battles}</td>

                <td>{value.stats.wins}</td>

                <td>{value.stats.Loses}</td>

                <td>{value.stats.WLPercentage}</td>

                <td id="rank">{value.stats.regionalRank}</td>
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

export default Regional;
