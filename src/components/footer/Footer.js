import axios from "../../axios";
import React, { useState } from "react";
import { LocationOnIcon, MailOutlineIcon } from "../imports/icons/Icons";
import {
  FbFoot,
  InstaFoot,
  Logo,
  MsgFoot,
  TwitterFoot,
  YtFoot,
} from "../imports/imgs/Images";
import "./Footer.css";
import { AlertError, AlertSuccess } from "../Alerts/Alert";
import { HiOutlineArrowUp } from "react-icons/hi";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(Boolean);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [successMessage, setSuccessMessage] = useState("");

  const handleNewsSubscribe = async () => {
    try {
      await axios
        .post("/newsletter", {
          email: email,
        })
        .then((res) => {
          setSuccess(true);
          setSuccessMessage(res.data?.message);
          window.location.reload();
        });
    } catch (error) {
      console.log(error);
      setError(true);
      console.log(error.response.data?.stack);
      error && setErrorMessage(error.response.data?.message);
    }
  };

  const handleCloseModal = () => {
    setError(false);
    setSuccess(false);
  };

  return (
    <div className="footer">
      {error && (
        <AlertError message={errorMessage} onclick={handleCloseModal} />
      )}

      {success && (
        <AlertSuccess message={successMessage} onclick={handleCloseModal} />
      )}
      <div className="ArrowWrapper">
        <HiOutlineArrowUp className="ArrowIcon" />
      </div>

      <div className="footer__container">
        <div className="footer__one">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <p>
            Pokémon GO is Trademark & © of Niantic, Inc. Pokémon And All
            Respective Names are Trademark & © of Nintendo 1996-2022 EBC are not
            affiliated with Niantic Inc., The Pokemon Company , or Nintendo
          </p>
        </div>

        <div className="footer__two">
          <h3>links</h3>

          <div className="links">
            <div>
              <ul>
                <Link to="/">
                  <li> home</li>
                </Link>

                <Link to="/login">
                  <li> login</li>
                </Link>

                <Link to="/shop">
                  <li> store</li>
                </Link>

                <Link to="/rules">
                  <li> rules</li>
                </Link>
              </ul>
            </div>

            <div>
              <ul>
                <Link to="/tournament">
                  <li> tournaments</li>
                </Link>

                <Link to="/leaderboard">
                  <li> leaderboard</li>
                </Link>

                <Link to="/blogs">
                  <li> blog</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__three">
          <ul>
            <Link to="/">
              <li> help & support</li>
            </Link>

            <Link to="/">
              <li> privacy policy</li>
            </Link>

            <Link to="/">
              <li> term of use</li>
            </Link>
          </ul>
        </div>

        <div className="footer__four">
          <h3>don't miss a thing</h3>

          <p>Subscribe us now to get the latest news and update</p>

          <div className="box">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />

            <span onClick={handleNewsSubscribe}>
              <MailOutlineIcon className="FooterIcon" />
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="footer__location">
          <div className="text">
            <h3>toronto</h3>
            <div className="LocationContainer">
              {" "}
              <div className="icon">
                <LocationOnIcon />
              </div>{" "}
              <p className="FooterLocationName">
                2297625 Ontario Inc86-50 Burnhamthorpe Rd WBox 317 Mississauga,
                ON L5B 3C2
              </p>
            </div>
          </div>
        </div>

        <div className="footer__last">
          <div className="copyright">
            <span>© 2023 EBC. All rights reserved.</span>
          </div>
          <div className="socials">
            <a
              href="https://www.facebook.com/people/EBC-Esports/100092606197171/
"
            >
              <img src={FbFoot} alt="" />
            </a>

            <a
              href="https://instagram.com/ebc_esports?igshid=ZGUzMzM3NWJiOQ==
          "
            >
              <img src={InstaFoot} alt="" />
            </a>

            <a href="https://www.twitch.tv/ebc_esports">
              <img src={MsgFoot} alt="" />
            </a>

            <a href="https://twitter.com/ebc_esports">
              <img src={TwitterFoot} alt="" />
            </a>

            <a href="https://www.youtube.com/channel/UCjJqDd6PV05Wk9Eow4ckOKQ">
              <img src={YtFoot} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
