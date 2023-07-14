import axios from "../../axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import {
  // FacebookIcon,
  InstagramIcon,
  ShareIcon,
  SmsIcon,
  // TwitterIcon,
  YouTubeIcon,
} from "../../components/imports/icons/Icons";
import "./Content.css";
import Button from "../../components/button/Button";
import { AlertError, AlertSuccess } from "../../components/Alerts/Alert";
import Heading from "../../components/text/Heading";

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

function Content() {
  const url = process.env.REACT_APP_API_PUB_SOCIALS;

  const [blogDetails, setBlogDetails] = useState([]);
  const [blogPost, setBlogPost] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const [error, setError] = useState(Boolean);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [successMessage, setSuccessMessage] = useState("");

  const formatDate = (dateString) => {
			const date = new Date(dateString);
			const options = { year: "numeric", month: "long", day: "numeric" };
			const formattedDate = date.toLocaleDateString("en-US", options);
			return formattedDate;
	};

  // const PF = "http://localhost:5000/blogs/";
  const PF = `${process.env.REACT_APP_API_PUB}/blogs/`;
  const PFU = `${process.env.REACT_APP_API_PUB}/users/`;
  // const PFU = "http://localhost:5000/users/";

  const { id } = useParams();

  useEffect(() => {
    try {
      const fetchBlog = async () => {
        await axios.get(`/blogs/${id}`).then((res) => {
          console.log(res.data?.data);
          setBlogDetails(res.data?.data);
        });
      };

      const fetchUser = async () => {
        await axios("/users/me").then((res) => {
          console.log(res.data?.data);
          setUserDetails(res.data?.data);
        });
      };

      const fetchPost = async () => {
        await axios.get(`/blogs/get/related?author=${blogDetails.author}`).then((res) => {
          console.log(res.data?.data);
          setBlogPost(res.data?.data);
        });
      };

      fetchUser();
      fetchPost();
      fetchBlog();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleBlogDelete = async (id) => {
    setIsFetching(true);
    try {
      await axios.delete(`/blogs/${id}`).then((res) => {
        setSuccess(true);
        setSuccessMessage(res.data?.message);
        window.location.href = "/blogs";
      });
    } catch (error) {
      setError(true);
      error && setErrorMessage(error.response.data?.error._message);
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    setError(false);
    setSuccess(false);
  };

  return (
    <div className="content tournamentmu">
      {error && (
        <AlertError message={errorMessage} onclick={handleCloseModal} />
      )}

      {success && (
        <AlertSuccess message={successMessage} onclick={handleCloseModal} />
      )}
      <div className="tournament__header">
        <div className="tournament__text">
          <div>
            <h3>
              <span>{blogDetails.title}</span>
            </h3>

            {
              userDetails?.role === "admin"
              &&
              userDetails?._id === blogDetails?.userId
              &&
              (
              <>
                <h3>
                  <a
                    style={{ textDecoration: "none" }}
                    href={`/editblog/${id}`}
                  >
                    <Button text={"edit"} />
                  </a>{" "}
                </h3>

                <h3 onClick={() => handleBlogDelete(id)}>
                  <Button text={"delete"} />
                </h3>
              </>
            )}
          </div>

          <p>{blogDetails.description}</p>

          <p id="content__date">{formatDate(blogDetails.date)}</p>
        </div>

        <div className="tournament__image">
          <img
            src={PF + blogDetails.thumbnail}
            alt=""
            crossOrigin="anonymous"
          />
        </div>
      </div>

      <div className="content__body">
        <div className="content__body__heading">
          <a
            href={`/view-user/${userDetails._id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="content__body__heading__profile">
              <p>
                <img
                  src={PFU + userDetails.profilePhoto}
                  alt=""
                  crossOrigin="anonymous"
                />
              </p>

              <h3>{blogDetails.author}</h3>
            </div>
          </a>
          <p className="socials">
            <p id="share">
              <ShareIcon />
            </p>

            <p>
              {/* <FacebookIcon /> */}
              <FacebookShareButton url={`${url}/fb/${blogDetails._id}`}>
                <FacebookIcon size={32} />
              </FacebookShareButton>
            </p>

            <p>
              {/* <InstagramIcon /> */}

              <InstapaperShareButton
                url={`${url}/instagram/${blogDetails._id}`}
              >
                <InstapaperIcon size={32} />
              </InstapaperShareButton>
            </p>

            <p>
              {/* <SmsIcon /> */}

              <FacebookMessengerShareButton
                url={`${url}/share/fb/${blogDetails._id}`}
              >
                <FacebookMessengerIcon size={32} />
              </FacebookMessengerShareButton>
            </p>

            <p>
              {/* <TwitterIcon /> */}

              <TwitterShareButton url={`${url}/twitter/${blogDetails._id}`}>
                <TwitterIcon size={32} />
              </TwitterShareButton>
            </p>

            <p>
              <YouTubeIcon />
            </p>
          </p>
        </div>
      </div>

      <div className="content__body__details">
        <h3>{blogDetails.headline}</h3>
        <p>{blogDetails.blogBody}</p>
      </div>

      <Heading text={"related posts"} />

      <div className="content__related">
        {blogPost?.map((relate, index) => {
          return (
            <div className="content__related__item" key={index}>
              <a href={`/blog/${relate._id}`}>
                <img
                  src={PF + relate.thumbnail}
                  alt=""
                  crossOrigin="anonymous"
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Content;
