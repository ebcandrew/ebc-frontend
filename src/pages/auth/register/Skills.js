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

function Skills() {
  const cta = [
    {
      icon: GoogleIcon,
      name: "ELITE - 64 Players a Region",
    },

    {
      icon: FacebookIcon,
      name: "ACE  - 128 Players a Region",
    },

    {
      icon: TwitterIcon,
      name: "CHALLENGER  - 256 Players a Region",
    },

    {
      icon: RedditIcon,
      name: "RIVAL - 512 Players a Region",
    },

    {
      icon: AccountBalanceWalletIcon,
      name: "TRAINEE - 1/wk 64 ppl(rec)",
    },

    {
      icon: AccountBalanceWalletIcon,
      name: "JERSEYS & KITS AVAILABLITY",
    },
  ];

  return (
    <div className="register">
      <div className="register__text">
        <h3>Select your Skill Level </h3>

        <p>
          Skill level based on Pokemon GO GBL and our Ranking :Elite = GBL LVL -
          22, 23, 24 Ace = GBL LVL - 21, 20, 19 Challenger = GBL LVL - 18, 17,
          16 Rivial = GBL LVL - 15, 14, 13 Trainee = Open Class ( all skill
          type)
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

export default Skills;
