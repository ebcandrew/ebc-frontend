import React from "react";
import Curved from "../../../components/button/Curved";
import {
  AccountBalanceWalletIcon,
  FacebookIcon,
  GoogleIcon,
  RedditIcon,
  TwitterIcon,
} from "../../../components/imports/icons/Icons";
import "./Register.css";

function Region() {
  const cta = [
    {
      icon: GoogleIcon,
      name: "north america",
    },

    {
      icon: FacebookIcon,
      name: "south america",
    },

    {
      icon: TwitterIcon,
      name: "europe",
    },

    {
      icon: RedditIcon,
      name: "africa",
    },

    {
      icon: AccountBalanceWalletIcon,
      name: "asia pacific",
    },
  ];

  return (
    <div className="register">
      <div className="register__text">
        <h3>select your region</h3>

        <p>
          Nulla rutrum sem turpis, at pretium quam porttitor in. Integer sodales
          at enim et blandit. Aliquam dignissim vestibulum hendrerit.
        </p>

        <a href="/login">Already have account? Login now.</a>
      </div>

      <div className="register__cta">
        {cta.map((c, index) => {
          return (
            <div className="cta__item" key={index}>
              <p>
                <Curved text={<c.icon />} />
              </p>

              <p id="text">
                <Curved text={c.name} />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Region;
