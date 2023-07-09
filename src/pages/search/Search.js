import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Search.css";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  InstapaperShareButton,
} from "react-share";

import {
  FacebookIcon,
  FacebookMessengerIcon,
  TwitterIcon,
  InstapaperIcon,
} from "react-share";
import { ShareIcon, YouTubeIcon } from "../../components/imports/icons/Icons";
import Button from "../../components/button/Button";
import Heading from "../../components/text/Heading";
import { CircularProgress } from "@mui/material";

function Search() {
  const [blogDetails, setBlogDetails] = useState([]);
  const [tournamentDetails, setTournamentDetails] = useState([]);
  const [users, setUsers] = useState([]);

  const [userDetails, setUserDetails] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const [error, setError] = useState(Boolean);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [successMessage, setSuccessMessage] = useState("");

  const { query } = useParams();

  const PF = `${process.env.REACT_APP_PUBLIC_FOLDER_PUB}/blogs/`;

  const url = process.env.REACT_APP_API_PUB_SOCIALS;

  useEffect(() => {
    try {
      const getSearch = async () => {
        await axios.get(`/search/${query}`).then((res) => {
          setBlogDetails(res.data.data[1]);
          setTournamentDetails(res.data.data[2]);
          setUsers(res.data.data[3]);
          console.log(res.data.data[1]);
        });
      };

      const fetchUser = async () => {
        await axios("/users/me").then((res) => {
          console.log(res.data?.data);
          setUserDetails(res.data?.data);
        });
      };

      getSearch();
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleTournamentRoute = (id) => {
    window.location.href = `/tournament/${id}`;
  };

  const handleTournamentDelete = async (id) => {
    setIsFetching(true);
    try {
      await axios.delete(`/tournaments/${id}`).then((res) => {
        setSuccess(true);
        setSuccessMessage(res.data?.message);
        window.location.href = "/alltournaments";
      });
    } catch (error) {
      setError(true);
      error && setErrorMessage(error.response.data?.error._message);
      console.log(error);
    }
  };

  const handleUserDelete = async (id) => {
    setIsFetching(true);
    try {
      await axios.delete(`/users/${id}`).then((res) => {
        setSuccess(true);
        setSuccessMessage(res.data?.message);
        window.location.reload();
      });
    } catch (error) {
      setError(true);
      error && setErrorMessage(error.response.data?.error._message);
      console.log(error);
    }
  };

  return (
    <div className="search">
      <div className="searchfor">your search results for '{query}'</div>

      <div className="blog__post__items">
        <Heading text={"blogs"} />
        {blogDetails?.map((blog, index) => {
          return (
            <div className="blog__post__items__card" key={index}>
              <div className="blog__post__items__card__img">
                <a
                  href={`/blog/${blog._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={PF + blog.thumbnail}
                    alt=""
                    id="blogimg"
                    crossOrigin="anonymous"
                  />

                  <p>-{blog.title}</p>
                </a>
              </div>

              <div className="blog__post__items__card__others">
                <a
                  href={`/blog/${blog._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="excerpt">
                    <p className="date">{blog.date}</p>

                    <p className="excerpt">{blog.blogBody}</p>
                  </div>
                </a>

                <p className="socials">
                  <p id="share">
                    <ShareIcon />
                  </p>

                  <p>
                    {/* <FacebookIcon /> */}
                    <FacebookShareButton url={`${url}/fb/${blog._id}`}>
                      <FacebookIcon size={32} />
                    </FacebookShareButton>
                  </p>

                  <p>
                    {/* <InstagramIcon /> */}

                    <InstapaperShareButton url={`${url}/instagram/${blog._id}`}>
                      <InstapaperIcon size={32} />
                    </InstapaperShareButton>
                  </p>

                  <p>
                    {/* <SmsIcon /> */}

                    <FacebookMessengerShareButton
                      url={`${url}/share/fb/${blog._id}`}
                    >
                      <FacebookMessengerIcon size={32} />
                    </FacebookMessengerShareButton>
                  </p>

                  <p>
                    {/* <TwitterIcon /> */}

                    <TwitterShareButton url={`${url}/twitter/${blog._id}`}>
                      <TwitterIcon size={32} />
                    </TwitterShareButton>
                  </p>

                  <p>
                    <YouTubeIcon />
                  </p>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {blogDetails?.length > 10 && (
        <div className="blog__loadmore">
          <Button text={"load more"} />
        </div>
      )}

      <div className="alltournaments__list">
        <Heading text={"tournaments"} />

        {tournamentDetails?.map((tournament, index) => {
          return (
            <div className="alltournaments__list__item" key={index}>
              <ol>
                <li onClick={() => handleTournamentRoute(tournament._id)}>
                  <p id="name">
                    {index + 1} {tournament.name}
                  </p>
                  <p>
                    event details: <span>{tournament.eventDetails}</span>
                  </p>
                  <p>
                    date created: <span>{tournament.createdAt}</span>
                  </p>
                  <p>
                    event location: <span>{tournament.location}</span>
                  </p>
                  <p>
                    featured: <span>{tournament.isFeatured.toString()}</span>
                  </p>
                  <p>
                    remote: <span>{tournament.isRemote.toString()}</span>
                  </p>
                  <p>
                    league: <span>{tournament.league}</span>
                  </p>
                  <p>
                    event info: <span>{tournament.info}</span>
                  </p>
                  <p>
                    event date: <span>{tournament.startDate}</span>
                  </p>
                  <p>
                    event time: <span>{tournament?.startTime}</span>
                  </p>
                  <p>
                    rsvp code: <span>{tournament.rsvpCode}</span>
                  </p>
                </li>
              </ol>

              {userDetails?.role === "admin" && (
                <div className="admin__btn">
                  {/* <h3>
                    <a
                      style={{ textDecoration: "none" }}
                      href={`/editblog/${tournament._id}}`}
                    >
                      <Button text={"edit"} />
                    </a>{" "}
                  </h3> */}

                  <h3 onClick={() => handleTournamentDelete(tournament._id)}>
                    <Button
                      text={
                        isFetching ? (
                          <CircularProgress size={14} color="inherit" />
                        ) : (
                          "delete"
                        )
                      }
                    />
                  </h3>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="alltournaments__list">
        <Heading text={"users"} />

        {users?.map((user, index) => {
          return (
            <div className="alltournaments__list__item" key={index}>
              <ol>
                <li onClick={() => handleTournamentRoute(user._id)}>
                  <p id="name">
                    {index + 1} {user.name}
                  </p>
                  <p>
                    user name: <span>{user.name}</span>
                  </p>
                </li>
              </ol>

              {userDetails?.role === "admin" && (
                <div className="admin__btn">
                  {/* <h3>
                    <a
                      style={{ textDecoration: "none" }}
                      href={`/editblog/${tournament._id}}`}
                    >
                      <Button text={"edit"} />
                    </a>{" "}
                  </h3> */}

                  <h3 onClick={() => handleUserDelete(user._id)}>
                    <Button
                      text={
                        isFetching ? (
                          <CircularProgress size={14} color="inherit" />
                        ) : (
                          "delete"
                        )
                      }
                    />
                  </h3>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
