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

    // {
    //   icon: AccountBalanceWalletIcon,
    //   name: "torus wallet",
    //   link: "/auth/torus",
    // },
  ];

  const handleLogin = async (link) => {
    try {
      // window.location.href = `https://api.ebc.gg${link}`;
      window.location.href = `${process.env.REACT_APP_PUBLIC_FOLDER_PUB}${link}`;

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
          Nulla rutrum sem turpis, at pretium quam porttitor in. Integer sodales
          at enim et blandit. Aliquam dignissim vestibulum hendrerit.
        </p>

        <a href="/register">Don’t have account? Register now.</a>
      </div>
      <div className="login__cta">
        {cta.map((c, index) => {
          return (
            <div className="cta__item" key={index}>
              <p>
                <Curved className="icon" text={<c.icon />} />
              </p>

              <p id="text" onClick={() => handleLogin(c.link)}>
                <Curved text={c.name} />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Login;
