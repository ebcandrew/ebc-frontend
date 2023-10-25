import axios from "../../axios";
import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/button/Button";
import {
  ArrowForwardIcon,
  FacebookIcon,
  FavoriteBorderIcon,
  InstagramIcon,
  MapIcon,
  TwitterIcon,
  YouTubeIcon,
} from "../../components/imports/icons/Icons";
import {
  Arts,
  Arts2,
  Avatar,
  Cup,
  Di,
  User,
} from "../../components/imports/imgs/Images";
import Heading from "../../components/text/Heading";
import "./Profile.css";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import { AlertError, AlertSuccess } from "../../components/Alerts/Alert";
import { useParams } from "react-router-dom";

function Any() {
  const { user } = useContext(AuthContext);
  const [fetching, setFetching] = useState(false);
  const { id } = useParams();

  const [error, setError] = useState(Boolean);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [successMessage, setSuccessMessage] = useState("");

  // const PF = "http://localhost:5000/imgs/users/";

  const PF = `${process.env.REACT_APP_PUBLIC_FOLDER_PUB}/users`;

  const defaultPic =
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";

  const [userDetails, setUserDetails] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allTournaments, setAllTournaments] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);

  const [trophiesWorldWide, setTrophiesWorldWide] = useState([]);
  const [trophiesContentential, setTrophiesContentential] = useState([]);
  const [trophiesRegion, setTrophiesRegion] = useState([]);
  const [trophiesWorldWideActive, setTrophiesWorldWideActive] = useState(true);
  const [trophiesContententialActive, setTrophiesContententialActive] =
    useState(false);
  const [trophiesRegionActive, setTrophiesRegionActive] = useState(false);
  const [currentTournaments, setCurrentTournaments] = useState([]);

  useEffect(() => {
    try {
      const fetchAllTournaments = async () => {
        await axios("/tournaments").then((res) => {
          console.log(res.data?.data);
          setAllTournaments(res.data?.data);
        });
      };

      const fetchUser = async () => {
        await axios(`/users/${id}`).then((res) => {
          console.log(res.data?.data);
          setUserDetails(res.data?.data);
        });
      };

      const fetchAllUsers = async () => {
        await axios("/users/").then((res) => {
          // console.log(res.data?.data);
          setAllUsers(res.data?.data);
        });
      };

      const fetchAllBlogs = async () => {
        await axios("/blogs").then((res) => {
          // console.log(res.data?.data);
          setAllBlogs(res.data?.data);
        });
      };

      const fetchTrophiesWorldWide = async () => {
        await axios("/users/me").then((res) => {
          // console.log(res.data?.data.trophies.worldWide);
          setTrophiesWorldWide(res.data?.data.trophies.worldWide);
        });
      };

      const fetchTrophiesContentential = async () => {
        await axios("/users/me").then((res) => {
          // console.log(res.data?.data.trophies.nationWide);
          setTrophiesContentential(res.data?.data.trophies.nationWide);
        });
      };

      const fetchTrophiesRegion = async () => {
        await axios("/users/me").then((res) => {
          // console.log(res.data?.data.trophies.regional);
          setTrophiesRegion(res.data?.data.trophies.regional);
        });
      };

      const fetchCurrentTournaments = async () => {
        await axios("/users/me").then((res) => {
          // console.log(res.data?.data.currentTournaments);
          setCurrentTournaments(res.data?.data.currentTournaments);
        });
      };

      fetchUser();
      fetchTrophiesWorldWide();
      fetchTrophiesContentential();
      fetchTrophiesRegion();
      fetchCurrentTournaments();
      fetchAllUsers();
      fetchAllTournaments();
      fetchAllBlogs();
    } catch (error) {
      setError(true);
      error && setErrorMessage(error.response.data?.error._message);
      console.log(error);
    }
  }, []);

  const handleContinentalState = () => {
    setTrophiesContententialActive(true);
    setTrophiesRegionActive(false);
    setTrophiesWorldWideActive(false);
  };
  const handleRegionalState = () => {
    setTrophiesContententialActive(false);
    setTrophiesRegionActive(true);
    setTrophiesWorldWideActive(false);
  };

  const handleWorldwideState = () => {
    setTrophiesContententialActive(false);
    setTrophiesRegionActive(false);
    setTrophiesWorldWideActive(true);
  };

  const handleCloseModal = () => {
    setError(false);
    setSuccess(false);
  };

  return (
    <div className="profile">
      {error && (
        <AlertError message={errorMessage} onclick={handleCloseModal} />
      )}

      {success && (
        <AlertSuccess message={successMessage} onclick={handleCloseModal} />
      )}
      <div className="profile__banner">
        <div className="profile__banner__text">
          <h3>
            <span>{userDetails.username}</span>
          </h3>

          <p>
            <img src={Di} alt="" />
          </p>
        </div>
        <div className="profile__banner__img">
          {userDetails.profilePhoto === defaultPic ? (
            <img src={defaultPic} alt="" />
          ) : (
            <img
              src={PF + userDetails.profilePhoto}
              alt=""
              crossOrigin="anonymous"
            />
          )}
        </div>

        <div className="profile__banner__shorts">
          <div className="offline">
            <p></p>
            offline
          </div>

          <div className="online">
            <p></p>
            online
          </div>
        </div>
      </div>

      {/* <div className="profile__banner__othertext">
        <p id="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis
          neque dicta repellat nam optio ea. Recusandae, error. Id repellendus
          maxime ut ab, optio quia hic aliquid dolorum assumenda deserunt?
          <div className="icons">
            <p>
              <FacebookIcon />
            </p>

            <p>
              <InstagramIcon />
            </p>

            <p>
              <TwitterIcon />
            </p>
          </div>
        </p>
      </div> */}

      <div className="profile__mainbody">
        <div className="profile__mainbody__heading">
          <Heading text={`${userDetails.username} statistics`} />
        </div>
      </div>

      <section className="profile__flex">
        <div>
          <div className="profile__mainbody__flex">
            <div className="profile__mainbody__flex__left">
              <div>
                <h3>location</h3>
                <p>
                  <span>
                    <MapIcon />
                  </span>{" "}
                  {userDetails?.location}
                </p>
              </div>

              <div>
                <h3>rank</h3>
                <p>
                  <span>
                    <img src={Cup} alt="" />
                  </span>{" "}
                  {userDetails?.info?.rank}
                </p>
              </div>

              <div>
                <h3>team</h3>
                <p>
                  <span>
                    <img src={Avatar} alt="" />
                  </span>{" "}
                  {userDetails.currentTournaments &&
                    userDetails.currentTournaments[0]
                    // .teams[0]
                    }
                </p>
              </div>

              <div>
                <h3>email</h3>
                <p>{userDetails.email}</p>
              </div>

              <div>
                <h3>friend code</h3>
                <p>{userDetails.info?.friendCode}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="profile__mainbody__flex__right">
            <div className="rsvp__main__right">
              <div className="rsvp__main__right__frame">
                <div>
                  <p>
                    <FavoriteBorderIcon />
                  </p>
                  <h3>{userDetails.stats?.wins}</h3>

                  <p id="rank">wins</p>
                </div>

                <div>
                  <p>
                    <FavoriteBorderIcon />
                  </p>
                  <h3>{userDetails.stats?.Loses}</h3>

                  <p id="rank">loses</p>
                </div>

                <div>
                  <p>
                    <FavoriteBorderIcon />
                  </p>
                  <h3>{userDetails.stats?.WLPercentage}</h3>

                  <p id="rank">wl %</p>
                </div>
                <div>
                  <p>
                    <FavoriteBorderIcon />
                  </p>
                  <h3>{userDetails.stats?.EBCRank}</h3>

                  <p id="rank">global rank</p>
                </div>

                <div>
                  <p>
                    <FavoriteBorderIcon />
                  </p>
                  <h3>{userDetails.stats?.uniqueOpponents}</h3>

                  <p id="rank"> opponents</p>
                </div>

                <div>
                  <p>
                    <FavoriteBorderIcon />
                  </p>
                  <h3>{userDetails.stats?.achievements}</h3>

                  <p id="rank">achievements</p>
                </div>

                <div>
                  <p>
                    <FavoriteBorderIcon />
                  </p>
                  <h3>{userDetails.stats?.trophies}</h3>

                  <p id="rank">trophies</p>
                </div>

                <div>
                  <p>
                    <FavoriteBorderIcon />
                  </p>
                  <h3>{userDetails.stats?.matchPlayed || 0}</h3>

                  <p id="rank">match played</p>
                </div>

                <div>
                  <p>
                    <FavoriteBorderIcon />
                  </p>
                  <h3>{userDetails.stats?.nationalRank}</h3>

                  <p id="rank">national ranks</p>
                </div>

                <div>
                  <p>
                    <FavoriteBorderIcon />
                  </p>
                  <h3>{userDetails.stats?.ranksTournaments}</h3>

                  <p id="rank"> tournaments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="tournament__entered">
        <Heading text={"tournament entered"} />

        <div className="featuredevents__heading">
          <div className="tag">
            <p>all tournaments</p>
          </div>

          <div className="link">
            <a href="/">see all</a>
            <ArrowForwardIcon />
          </div>
        </div>

        <div className="tournament__entered__entries">
          {currentTournaments?.map((entry, index) => {
            return (
              <div className="tournament__entered__entries__entry" key={index}>
                <div className="entry">
                  <div id="text">
                    <p id="challenge">{entry.eventTitle}</p>

                    <p id="league">{entry.league}</p>
                    <p id="date">
                      {entry?.startDate}, {entry?.startTime}
                    </p>
                  </div>

                  <div id="dinos">
                    <p>
                      <img src={entry.dino1} alt="" />
                    </p>

                    <p className="verses">vs</p>

                    <p>
                      <img src={entry.dino2} alt="" />
                    </p>
                  </div>

                  <div id="yt">
                    <p>
                      <YouTubeIcon />
                    </p>

                    <p>watch</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="profile__trophies">
        <Heading text={"trophies"} />

        {trophiesWorldWideActive ? (
          <div className="leaderboard__btns">
            <div className="btn" id="first">
              <Button text={"world wide"} />
            </div>{" "}
            <div className="btn" onClick={handleContinentalState}>
              <Button text={"Contentential"} />
            </div>
            <div className="btn" onClick={handleRegionalState}>
              <Button text={"country & regional"} />
            </div>
          </div>
        ) : trophiesContententialActive ? (
          <div className="leaderboard__btns">
            <div className="btn" onClick={handleWorldwideState}>
              <Button text={"world wide"} />
            </div>{" "}
            <div className="btn" id="first">
              <Button text={"Contentential"} />
            </div>
            <div className="btn" onClick={handleRegionalState}>
              <Button text={"country & regional"} />
            </div>
          </div>
        ) : (
          <div className="leaderboard__btns">
            <div className="btn" onClick={handleWorldwideState}>
              <Button text={"world wide"} />
            </div>{" "}
            <div className="btn" onClick={handleContinentalState}>
              <Button text={"Contentential"} />
            </div>
            <div className="btn" id="first">
              <Button text={"country & regional"} />
            </div>
          </div>
        )}
      </div>

      <div className="halloffame__cups__others">
        {trophiesRegionActive &&
          trophiesRegion?.map((cup, index) => {
            return (
              <div className="halloffame__cups" index={index}>
                <div className="halloffame__cups__lead others">
                  <p className="cup">
                    <img src={Cup} alt="" />
                  </p>

                  <p className="details">
                    <div className="details__main">
                      <p id="cupname">{cup.position}</p>

                      <p id="username">{cup.username}</p>

                      <p id="desc">{cup.desc}</p>
                    </div>
                  </p>
                </div>
              </div>
            );
          })}

        {trophiesRegion.length !== 0 && (
          <div className="leaderboard__loadmore profile">
            <Button text={"load more"} />
          </div>
        )}

        {trophiesWorldWideActive &&
          trophiesWorldWide?.map((cup, index) => {
            return (
              <div className="halloffame__cups" index={index}>
                <div className="halloffame__cups__lead others">
                  <p className="cup">
                    <img src={Cup} alt="" />
                  </p>

                  <p className="details">
                    <div className="details__main">
                      <p id="cupname">{cup.position}</p>

                      <p id="username">{cup.username}</p>

                      <p id="desc">{cup.desc}</p>
                    </div>
                  </p>
                </div>
              </div>
            );
          })}

        {trophiesWorldWide?.length !== 0 && (
          <div className="leaderboard__loadmore profile">
            <Button text={"load more"} />
          </div>
        )}

        {trophiesContententialActive &&
          trophiesContentential?.map((cup, index) => {
            return (
              <div className="halloffame__cups" index={index}>
                <div className="halloffame__cups__lead others">
                  <p className="cup">
                    <img src={Cup} alt="" />
                  </p>

                  <p className="details">
                    <div className="details__main">
                      <p id="cupname">{cup.position}</p>

                      <p id="username">{cup.username}</p>

                      <p id="desc">{cup.desc}</p>
                    </div>
                  </p>
                </div>
              </div>
            );
          })}

        {trophiesContentential?.length !== 0 && (
          <div className="leaderboard__loadmore profile">
            <Button text={"load more"} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Any;
