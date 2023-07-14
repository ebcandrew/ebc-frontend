import axios from "../../axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Curved from "../../components/button/Curved";
import {
  ArrowDropDownIcon,
  FacebookIcon,
  InstagramIcon,
  MapIcon,
  ModeEditIcon,
  ToggleOnIcon,
  TwitterIcon,
} from "../../components/imports/icons/Icons";
import {
  Arts,
  Arts2,
  Cup,
  Di,
  User,
} from "../../components/imports/imgs/Images";
import Heading from "../../components/text/Heading";
import "./Profile2.css";
import { CircularProgress } from "@mui/material";
import { AlertError, AlertSuccess } from "../../components/Alerts/Alert";

function Profile2() {
  const [userDetails, setUserDetails] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [isFetching, setIsfetching] = useState(false);

  const [error, setError] = useState(Boolean);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [successMessage, setSuccessMessage] = useState("");

  const DP =
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";
  // const PF = "http://localhost:5000/imgs/users/";
  const PF = `${process.env.REACT_APP_API_PUB}/users/`;

  const defaultPic =
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg";

  const [userObj, setUserObj] = useState(
    localStorage.getItem("users") || localStorage.getItem("user")
  );
  const parsedData = JSON.parse(userObj);

  const [location, setLocation] = useState(parsedData.info?.location);
  const [friendCode, setFriendCode] = useState(parsedData.info?.friendCode);
  const [fb, setFb] = useState(parsedData.info?.socialLinks[0]);
  const [insta, setInsta] = useState(parsedData.info?.socialLinks[1]);
  const [twitter, setTwitter] = useState(parsedData.info?.socialLinks[2]);

  const [trophiesWorldWide, setTrophiesWorldWide] = useState([]);
  const [trophiesContentential, setTrophiesContentential] = useState([]);
  const [trophiesRegion, setTrophiesRegion] = useState([]);
  const [trophiesWorldWideActive, setTrophiesWorldWideActive] = useState(true);
  const [trophiesContententialActive, setTrophiesContententialActive] =
    useState(false);
  const [trophiesRegionActive, setTrophiesRegionActive] = useState(false);
  const [teamPresets, setTeamPresets] = useState([]);

  const [file, setFile] = useState(null);

  const initialValues = {
    name: parsedData?.name,
    paypal: parsedData?.paypal,
    info: {
      location: location,
      friendCode: friendCode,
      socialLinks: [fb, insta, twitter],
    },
    metamask: parsedData?.metamask,
  };

  const [usersValues, setUsersValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsersValues({
      ...usersValues,
      [name]: value,
    });
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    try {
      const fetchUser = async () => {
        await axios.get("/users/me").then((res) => {
          // console.log(res.data?.data);
          setUserDetails(res.data?.data);
        });
      };

      const fetchTrophiesWorldWide = async () => {
        await axios.get("/users/me").then((res) => {
          console.log(res.data?.data.trophies.worldWide);
          setTrophiesWorldWide(res.data?.data.trophies.worldWide);
        });
      };

      const fetchTrophiesContentential = async () => {
        await axios.get("/users/me").then((res) => {
          // console.log(res.data?.data.trophies.nationWide);
          setTrophiesContentential(res.data?.data.trophies.nationWide);
        });
      };

      const fetchTrophiesRegion = async () => {
        await axios.get("/users/me").then((res) => {
          // console.log(res.data?.data.trophies.regional);
          setTrophiesRegion(res.data?.data.trophies.regional);
        });
      };

      const fetchTeamPresets = async () => {
        await axios.get("/users/me").then((res) => {
          // console.log(res.data?.data.teamsPresets);
          setTeamPresets(res.data?.data.teamsPresets);
        });
      };

      fetchUser();
      fetchTrophiesWorldWide();
      fetchTrophiesContentential();
      fetchTrophiesRegion();
      fetchTeamPresets();
    } catch (error) {
      console.log(error);
      setError(true);
      error && setErrorMessage(error.response.data?.error._message);
    }
  }, []);

  const dinos = [
    Arts,
    Arts2,
    Arts,
    Arts2,
    Arts,
    Arts2,
    Arts,
    Arts2,
    Arts,
    Arts2,
  ];

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

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const objectData = {
    name: usersValues.name,
    paypal: usersValues.paypal,
    metamask: usersValues.metamask,
    info: {
      location: location,
      friendCode: friendCode,
      socialLinks: [fb, insta, twitter],
    },
  };

  const handleSubmit = async (e) => {
    console.log(objectData);
    e.preventDefault();
    setIsfetching(true);

    try {
      await axios.patch("/users/profile", objectData, config).then((res) => {
        setSuccess(true);
        setSuccessMessage(res.data?.message);
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
      setError(true);
      error && setErrorMessage(error.response.data?.error._message);
      setIsfetching(false);
    }
  };

  const handleUploadPic = async () => {
    setIsfetching(true);
    try {
      const formData = new FormData();

      formData.append("profilePhoto", file);
      await axios.patch("users/profilePhoto", formData).then((res) => {
        setSuccess(true);
        setSuccessMessage(res.data?.message);
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
      setError(true);
      error && setErrorMessage(error.response.data?.error._message);
      setIsfetching(false);
    }
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

      <div className="profile__banner__othertext">
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
      </div>

      <div className="profile2__info">
        <div className="leagues__matchup">
          <div>
            <Heading text={"general information"} />
          </div>

          <div className="arrows">
            <ArrowDropDownIcon />
          </div>
        </div>

        {editMode ? (
          <div className="profile2__info__stats">
            <div className="profile2__info__stats__section">
              <section>
                <div>
                  <div>
                    <h3>name</h3>
                    {/* <p>{userDetails.name}</p> */}

                    <p>
                      <span>
                        <MapIcon />
                      </span>{" "}
                      <input
                        type="text"
                        className="input_field"
                        autoFocus
                        value={usersValues.name}
                        onChange={handleInputChange}
                        name="name"
                      />
                    </p>
                  </div>

                  <div id="icon" onClick={handleEditMode}>
                    <ModeEditIcon />
                  </div>
                </div>
              </section>

              <section>
                <div>
                  <div>
                    <h3>paypal</h3>
                    {/* <p>{userDetails.paypal}</p> */}

                    <p>
                      <span>
                        <MapIcon />
                      </span>{" "}
                      <input
                        type="text"
                        className="input_field"
                        autoFocus
                        value={usersValues.paypal}
                        onChange={handleInputChange}
                        name="paypal"
                      />
                    </p>
                  </div>

                  <div id="icon" onClick={handleEditMode}>
                    <ModeEditIcon />
                  </div>
                </div>
              </section>

              <section>
                <div>
                  <div>
                    <h3>location</h3>
                    <p>
                      {" "}
                      <span>
                        <MapIcon />
                      </span>{" "}
                      {/* {userDetails.info?.location} */}
                      <input
                        type="text"
                        className="input_field"
                        autoFocus
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        name="location"
                      />
                    </p>
                  </div>

                  <div id="icon" onClick={handleEditMode}>
                    <ModeEditIcon />
                  </div>
                </div>
              </section>

              <section>
                <div>
                  <div>
                    <h3>metamask wallet</h3>
                    <p>
                      {" "}
                      <span>
                        <MapIcon />
                      </span>{" "}
                      {/* lorem ipsum */}
                      <input
                        type="text"
                        className="input_field"
                        autoFocus
                        value={usersValues.metamask}
                        onChange={handleInputChange}
                        name="metamask"
                      />
                    </p>
                  </div>

                  <div id="icon" onClick={handleEditMode}>
                    <ModeEditIcon />
                  </div>
                </div>
              </section>

              <section>
                <div>
                  <div>
                    <h3>facebook address</h3>
                    <p>
                      {" "}
                      <span>
                        <MapIcon />
                      </span>{" "}
                      {/* lorem ipsum */}
                      <input
                        type="text"
                        className="input_field"
                        autoFocus
                        value={fb}
                        onChange={(e) => setFb(e.target.value)}
                        name="metamask"
                      />
                    </p>
                  </div>

                  <div id="icon" onClick={handleEditMode}>
                    <ModeEditIcon />
                  </div>
                </div>
              </section>

              <section>
                <div>
                  <div>
                    <h3>instagram address</h3>
                    <p>
                      {" "}
                      <span>
                        <MapIcon />
                      </span>{" "}
                      {/* lorem ipsum */}
                      <input
                        type="text"
                        className="input_field"
                        autoFocus
                        value={insta}
                        onChange={(e) => setInsta(e.target.value)}
                        name="metamask"
                      />
                    </p>
                  </div>

                  <div id="icon" onClick={handleEditMode}>
                    <ModeEditIcon />
                  </div>
                </div>
              </section>

              <section>
                <div>
                  <div>
                    <h3>twitter address</h3>
                    <p>
                      {" "}
                      <span>
                        <MapIcon />
                      </span>{" "}
                      {/* lorem ipsum */}
                      <input
                        type="text"
                        className="input_field"
                        autoFocus
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                        name="metamask"
                      />
                    </p>
                  </div>

                  <div id="icon" onClick={handleEditMode}>
                    <ModeEditIcon />
                  </div>
                </div>
              </section>
            </div>

            <div className="profile2__info__stats__others">
              <section>
                <h3>social accounts</h3>
                <div className="profile2__info__stats__others__socials">
                  <div>
                    <p>
                      <FacebookIcon />
                    </p>

                    <p> {userDetails.info?.socialLinks[0]} </p>
                  </div>

                  <div>
                    <p>
                      <InstagramIcon />
                    </p>

                    <p> {userDetails.info?.socialLinks[1]} </p>
                  </div>

                  <div>
                    <p>
                      <TwitterIcon />
                    </p>

                    <p>{userDetails.info?.socialLinks[2]} </p>
                  </div>
                </div>
              </section>

              <section className="friends">
                <h3>friend code</h3>

                {/* <p>{userDetails.info?.friendCode}</p> */}
                <input
                  type="text"
                  className="input_field"
                  autoFocus
                  value={friendCode}
                  onChange={(e) => setFriendCode(e.target.value)}
                  name="code"
                />
              </section>

              <section className="radio">
                <h3>select team</h3>

                <div>
                  <p>
                    <input type="radio" name="team" id="" /> <span>valor</span>
                  </p>
                  <p>
                    <input type="radio" name="team" id="" /> <span>mystic</span>
                  </p>

                  <p>
                    <input type="radio" name="team" id="" />{" "}
                    <span>instinct</span>
                  </p>
                </div>
              </section>

              <section className="dinos">
                <div className="leagues__matchup">
                  <div>
                    <Heading text={"select pokemon"} />
                  </div>

                  <div className="arrows">
                    <ArrowDropDownIcon />
                  </div>
                </div>

                <div className="dinos__items__main">
                  {dinos.map((dino, index) => {
                    return (
                      <div className="dinos__items" key={index}>
                        <p>
                          <img src={dino} alt="" />
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
            <div className="profile2__terms">
              <input type="checkbox" name="" id="" checked />{" "}
              <span>
                broken terms of service (spoofing GPS location, shared accounts
                on multiple devices)
              </span>
            </div>

            <div className="profile2__btns">
              <input
                required
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                id="fileInput"
                style={{ display: "none", cursor: "pointer" }}
              />

              <p>
                {!file && (
                  <label
                    htmlFor="fileInput"
                    style={{ cursor: "pointer", fontSize: 40 }}
                  >
                    <Button text={"upload profile picture"} />
                  </label>
                )}

                {file && (
                  <div className="blog__image__preview">
                    <img src={URL.createObjectURL(file)} alt="" />
                  </div>
                )}

                {file && (
                  <p onClick={handleUploadPic}>
                    <Button
                      text={
                        isFetching ? (
                          <CircularProgress size={16} color="inherit" />
                        ) : (
                          "upload profile picture"
                        )
                      }
                    />
                  </p>
                )}
              </p>

              <p onClick={handleSubmit}>
                <Button
                  text={
                    isFetching ? (
                      <CircularProgress size={16} color="inherit" />
                    ) : (
                      "save info"
                    )
                  }
                />
              </p>
            </div>
          </div>
        ) : (
          <div className="profile2__info__stats">
            <div className="profile2__info__stats__section">
              <section>
                <div>
                  <div>
                    <h3>name</h3>
                    <p>{userDetails.name}</p>
                  </div>

                  <div id="icon" onClick={handleEditMode}>
                    <ModeEditIcon />
                  </div>
                </div>
              </section>

              <section>
                <div>
                  <div>
                    <h3>paypal</h3>
                    <p>{userDetails.paypal}</p>
                  </div>

                  <div id="icon" onClick={handleEditMode}>
                    <ModeEditIcon />
                  </div>
                </div>
              </section>

              <section>
                <div>
                  <div>
                    <h3>location</h3>
                    <p>
                      {" "}
                      <span>
                        <MapIcon />
                      </span>{" "}
                      {userDetails.info?.location}
                    </p>
                  </div>

                  <div id="icon" onClick={handleEditMode}>
                    <ModeEditIcon />
                  </div>
                </div>
              </section>

              <section>
                <div>
                  <div>
                    <h3>metamask wallet</h3>
                    <p>
                      {" "}
                      <span>
                        <MapIcon />
                      </span>{" "}
                      lorem ipsum
                    </p>
                  </div>

                  <div id="icon" onClick={handleEditMode}>
                    <ModeEditIcon />
                  </div>
                </div>
              </section>
            </div>

            <div className="profile2__info__stats__others">
              <section>
                <h3>social accounts</h3>
                <div className="profile2__info__stats__others__socials">
                  <div>
                    <p>
                      <FacebookIcon />
                    </p>

                    <p> {userDetails.info?.socialLinks[0]} </p>
                  </div>

                  <div>
                    <p>
                      <InstagramIcon />
                    </p>

                    <p> {userDetails.info?.socialLinks[1]} </p>
                  </div>

                  <div>
                    <p>
                      <TwitterIcon />
                    </p>

                    <p>{userDetails.info?.socialLinks[2]} </p>
                  </div>
                </div>
              </section>

              <section className="friends">
                <h3>friend code</h3>

                <p>{userDetails.info?.friendCode}</p>
              </section>

              <section className="radio">
                <h3>select team</h3>

                <div>
                  <p>
                    <input type="radio" name="team" id="" /> <span>valor</span>
                  </p>
                  <p>
                    <input type="radio" name="team" id="" /> <span>mystic</span>
                  </p>

                  <p>
                    <input type="radio" name="team" id="" />{" "}
                    <span>instinct</span>
                  </p>
                </div>
              </section>

              <section className="dinos">
                <div className="leagues__matchup">
                  <div>
                    <Heading text={"select pokemon"} />
                  </div>

                  <div className="arrows">
                    <ArrowDropDownIcon />
                  </div>
                </div>

                <div className="dinos__items__main">
                  {dinos.map((dino, index) => {
                    return (
                      <div className="dinos__items" key={index}>
                        <p>
                          <img src={dino} alt="" />
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
            <div className="profile2__terms">
              <input type="checkbox" name="" id="" checked />{" "}
              <span>
                broken terms of service (spoofing GPS location, shared accounts
                on multiple devices)
              </span>
            </div>

            {/* <div className="profile2__btns">
              <Button text={"upload profile picture"} />

              <Button text={"save info"} />
            </div> */}
          </div>
        )}
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

      <div className="tournamentbt__body__item">
        <div className="item__btn">
          <Curved text={"P"} />
        </div>

        <div className="other__items__2">
          <h3>team preset</h3>

          <p>
            Until this tournament begins, you may change your Pokemon team by
            returning to this page. Once the tournament begins, however, your
            team is locked! Choose carefully!
          </p>

          {teamPresets.map((team, index) => {
            <div className="spicie__rows" key={index}>
              <div className="select">
                <p>select species</p>

                <p>
                  <ArrowDropDownIcon />
                </p>
              </div>
              <div className="spicie__select">enter cp</div>

              <div className="spicie__select__btn">
                <p>shadow</p>

                <p className="active">
                  <ToggleOnIcon />
                </p>
              </div>
            </div>;
          })}

          {teamPresets.length > 0 && (
            <div className="spicie__row__button">
              <Button text={"load team #1"} />
              <Button text={"load team #2"} />
              <Button text={"load team #3"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile2;
