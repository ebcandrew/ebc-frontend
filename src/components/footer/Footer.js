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
      // error && setErrorMessage(error.response.data?.error.errors.email.message);
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
                <a href="/">
                  <li> home</li>
                </a>

                <a href="/login">
                  <li> login</li>
                </a>

                <a href="/shop">
                  <li> store</li>
                </a>

                <a href="/rules">
                  <li> rules</li>
                </a>
              </ul>
            </div>

            <div>
              <ul>
                <a href="/tournament">
                  <li> tournaments</li>
                </a>

                <a href="/leaderboard">
                  <li> leaderboard</li>
                </a>

                <a href="/blogs">
                  <li> blog</li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__three">
          <ul>
            <a href="/">
              <li> help & support</li>
            </a>

            <a href="/">
              <li> privacy policy</li>
            </a>

            <a href="/">
              <li> term of use</li>
            </a>
          </ul>
        </div>

        <div className="footer__four">
          <h3>don't miss a thing</h3>

          <p>Subscribe us now to get the latest news and update</p>

          <div className="box">
            <p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
              />
            </p>

            <p onClick={handleNewsSubscribe}>
              <MailOutlineIcon />
            </p>
          </div>
        </div>
      </div>

      <div className="footer__location">
        <div className="icon">
          <LocationOnIcon />
        </div>

        <div className="text">
          <h3>toronto</h3>

          <p>100 Queen St W, Toronto, ON M5H 2N2, Canada</p>
        </div>
      </div>

      <div className="footer__last">
        <div className="copyright">
          <p>© 2023 EBC. All rights reserved.</p>
          <div className="dev__by">
            <a href="https://apnadevs.com" target="_blank" rel="noreferrer">
              {" "}
              Website Development By ApnaDevs{" "}
            </a>
          </div>
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
  );
}

export default Footer;
