import axios from "../../axios";
import React, { useEffect, useState } from "react";
import Heading from "../../components/text/Heading";
import { AlertError, AlertSuccess } from "../../components/Alerts/Alert";
import Button from "../../components/button/Button";
import { CircularProgress } from "@mui/material";

function AllTournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const [error, setError] = useState(Boolean);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    try {
        const allTournaments = async () => {
          await axios.get("/tournaments/").then((res) => {
            console.log(res.data?.data);
            setTournaments(res.data?.data);
          });
        };

        const fetchUser = async () => {
          await axios("/users/me").then((res) => {
            console.log(res.data?.data);
            setUserDetails(res.data?.data);
          });
        };

        allTournaments();
        fetchUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleTournamentRoute = (id) => {
    window.location.href = `/tournament/${id}`;
  };

  const handleTournamentDelete = async (id) => {
    setIsFetching(true);
    try {
      await axios.delete(`/tournaments/${id}`).then((res) => {
        setSuccess(true);
        setSuccessMessage(res.data?.message);
        window.location.href = "/alltournaments";
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
    <div className="alltournaments">
      {error && (
        <AlertError message={errorMessage} onclick={handleCloseModal} />
      )}

      {success && (
        <AlertSuccess message={successMessage} onclick={handleCloseModal} />
      )}
      <Heading text={"all tournaments"} />

      <div className="alltournaments__list">
        {tournaments?.map((tournament, index) => {
          return (
            <div className="alltournaments__list__item" key={index}>
              <ol>
                <li onClick={() => handleTournamentRoute(tournament._id)}>
                  <p id="name">
                    {index + 1} {tournament.name}
                  </p>
                  <p>
                    event details: <span>{tournament.eventDetails}</span>
                  </p>
                  <p>
                    date created: <span>{tournament.createdAt}</span>
                  </p>
                  <p>
                    event location: <span>{tournament.location}</span>
                  </p>
                  <p>
                    featured: <span>{tournament.isFeatured.toString()}</span>
                  </p>
                  <p>
                    remote: <span>{tournament.isRemote.toString()}</span>
                  </p>
                  <p>
                    league: <span>{tournament.league}</span>
                  </p>
                  <p>
                    event info: <span>{tournament.info}</span>
                  </p>
                  <p>
                    event date: <span>{tournament.startDate}</span>
                  </p>
                  <p>
                    event time: <span>{tournament?.startTime}</span>
                  </p>
                  <p>
                    rsvp code: <span>{tournament.rsvpCode}</span>
                  </p>
                </li>
              </ol>

              {userDetails?.role === "admin" && (
                <div className="admin__btn">
                  {/* <h3>
                    <a
                      style={{ textDecoration: "none" }}
                      href={`/editblog/${tournament._id}}`}
                    >
                      <Button text={"edit"} />
                    </a>{" "}
                  </h3> */}

                  <h3 onClick={() => handleTournamentDelete(tournament._id)}>
                    <Button
                      text={
                        isFetching ? (
                          <CircularProgress size={14} color="inherit" />
                        ) : (
                          "delete"
                        )
                      }
                    />
                  </h3>

                  <a
                    href={`/edit-tournament/${tournament._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      text={
                        isFetching ? (
                          <CircularProgress size={14} color="inherit" />
                        ) : (
                          "edit"
                        )
                      }
                    />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTournaments;
