import React, { useEffect, useState } from "react";
import Curved from "../../../components/button/Curved";
import {
  AccountBalanceWalletIcon,
  FacebookIcon,
  GoogleIcon,
  RedditIcon,
  TwitterIcon,
} from "../../../components/imports/icons/Icons";
import "./Login.css";
import { Link } from "react-router-dom";

import axios from "../../../axiosAuth";

function Login() {
  const cta = [
    {
      icon: GoogleIcon,
      name: "google",
      link: "/auth/google",
    },

    {
      icon: FacebookIcon,
      name: "facebook",
      link: "/auth/facebook",
    },

    {
      icon: TwitterIcon,
      name: "twitter",
      link: "/auth/twitter",
    },

    {
      icon: RedditIcon,
      name: "reddit",
      link: "/auth/reddit",
    },

    {
      icon: AccountBalanceWalletIcon,
      name: "torus wallet",
      link: "/auth/torus",
    },
  ];

  const handleLogin = async (link) => {
    try {
      // window.location.href = `https://api.ebc.gg${link}`;
      window.location.href = `http://localhost:5000${link}`;

      // await axios
      //   .get(`http://localhost:5000/auth/google/callback`)
      //   .then((res) => {
      //     console.log(res);
      //   });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="login__text">
        <h3>
          log <span>in</span>
        </h3>

        <p>
          Welcome back, seasoned players! We know you're eager to dive back into
          the gaming action, and we've made it easier than ever to get started.
          Say goodbye to the hassle of remembering usernames and passwords,
          because now you can effortlessly log in using your favorite social
          media accounts.
        </p>

        <Link to="/register">
          Don’t have account?{" "}
          <span style={{ textDecoration: "underline" }}>Register now.</span>
        </Link>
      </div>
      <div className="login__cta">
        <div className="loginBTNContainer">
          {cta.map((c, index) => (
            <div className="cta__item" key={index}>
              <div className="BtnWrapper">
                <c.icon className="InnerBTN" />
              </div>

              <p id="text" onClick={() => handleLogin(c.link)}>
                <span className="TextWrapper">{c.name}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Login;
