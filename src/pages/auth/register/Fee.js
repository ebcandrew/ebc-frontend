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
import Button from "../../../components/button/Button";

function Fee() {
  const cta = [
    {
      icon: GoogleIcon,
      name: "ELITE - $79.99 - 5mths",
    },

    {
      icon: FacebookIcon,
      name: "ACE  - $69.99 - 5mths",
    },

    {
      icon: TwitterIcon,
      name: "CHALLENGER  - $59.99 - 5mths",
    },

    {
      icon: RedditIcon,
      name: "RIVAL - $49.99 - 5mths",
    },

    {
      icon: AccountBalanceWalletIcon,
      name: "TRAINEE - (free)",
    },
  ];

  return (
    <>
      <div className="register">
        <div className="register__text">
          <h3>Registration Fee </h3>

          <p>
            Nulla rutrum sem turpis, at pretium quam porttitor in. Integer
            sodales at enim et blandit. Aliquam dignissim vestibulum hendrerit.
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
      <div className="register__fee__footer">
        <h3>Downloads:</h3>

        <p>
          <Button text={"fines"} />
        </p>

        <p>
          <Button text={"waivers"} />
        </p>

        <p>
          <Button text={"download rules pdf"} />
        </p>
      </div>
    </>
  );
}

export default Fee;
