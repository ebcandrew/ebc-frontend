import { CircularProgress } from "@mui/material";
import axios from "../../axios";
import React, { useState } from "react";
import Button from "../../components/button/Button";
import { AlertError, AlertSuccess } from "../../components/Alerts/Alert";
import { type } from "@testing-library/user-event/dist/type";

function CreateLeague() {
  const [isFetching, setIsFetching] = useState(false);
  const [leagueType, setLeagueType] = useState("");
  const [leagueName, setLeagueName] = useState("");
  // const [name, setName] = useState("");
  const [rounds, setRounds] = useState("");
  const [cat, setCat] = useState("");

  const [error, setError] = useState(Boolean);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [successMessage, setSuccessMessage] = useState("");

  const [catModal, setCatModal] = useState(false);

  const categories = ["great", "ultra", "master"];

  const data = {
    name: leagueName,
    leagueType: cat,
    rounds: rounds,
    // name: name,
  };
  const config = {
    headers: {
      content_type: "application/json",
    },
  };

  const handleSubmit = async () => {
    setIsFetching(true);

    try {
      await axios.post("/leagues/", data, config).then((res) => {
        setSuccess(true);
        setSuccessMessage(res.data?.message);
        console.log(res.data.message)
        window.location.href = "/leagues";
      });
    } catch (error) {
      console.log(error);
      setError(true);
      error && setErrorMessage(error.response.data?.error._message);
      setIsFetching(false);
    }
  };

  const handleCloseModal = () => {
    setError(false);
    setSuccess(false);
  };

  return (
    <div className="addblog">
      {error && (
        <AlertError message={errorMessage} onclick={handleCloseModal} />
      )}

      {success && (
        <AlertSuccess message={successMessage} onclick={handleCloseModal} />
      )}
      <div className="addblog__form">
        <div>
          <p>league name</p>

          <input
            type="text"
            required
            value={leagueName}
            onChange={(e) => setLeagueName(e.target.value)}
          />
        </div>

        {/* <div>
          <p>name</p>

          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div> */}

        <div>
          <p>type</p>

          <input
            type="text"
            required
            value={cat}
            onClick={(e) => setCatModal(!catModal)}
            readOnly
          />
        </div>

        {catModal && (
          <div className="catmodal">
            {categories.map((item, index) => {
              return (
                <div className="catmodal__item" key={index}>
                  <p
                    onClick={() => {
                      setCat(item);
                      setCatModal(false);
                    }}
                  >
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        <div>
          <p>rounds</p>

          <input
            type="number"
            required
            value={rounds}
            onChange={(e) => setRounds(e.target.value)}
          />
        </div>

        <div className="btn__submit" onClick={handleSubmit}>
          <Button
            text={
              isFetching ? (
                <CircularProgress size={16} color="inherit" />
              ) : (
                "submit"
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default CreateLeague;
