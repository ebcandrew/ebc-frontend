import axios from "../../axios";
import React, { useState } from "react";
import Button from "../button/Button";
import Heading from "../text/Heading";
import "./Contact.css";
import { AlertError, AlertSuccess } from "../Alerts/Alert";
import { CircularProgress } from "@mui/material";

function Contact() {
  const messageValues = {
    name: "",
    email: "",
    message: "",
  };

  const [message, setMessage] = useState(messageValues);

  const [isFetching, setIsFetching] = useState(false);

  const [error, setError] = useState(Boolean);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);

    try {
      const post = await axios.post("/contacts", message).then((res) => {
        console.log(res);
        setSuccess(true);
        setSuccessMessage("success");
        window.location.reload();
      });

      post();

      window.location.reload();
    } catch (error) {
      console.log(error);
      setError(true);
      error && setErrorMessage(error.response.data?.message);
      console.log(error);
      setIsFetching(false);
    }
  };

  const handleCloseModal = () => {
    setError(false);
    setSuccess(false);
  };

  return (
    <div className="contact">
      {error && (
        <AlertError message={errorMessage} onclick={handleCloseModal} />
      )}

      {success && (
        <AlertSuccess message={successMessage} onclick={handleCloseModal} />
      )}
      <Heading text={"get in touch with us"} />

      <div className="contact__form">
        <h4>Contact us</h4>

        <div className="contact__form__container">
          <div className="left">
            <input
              type="text"
              placeholder="Your Name"
              id=""
              value={message.name}
              onChange={handleInputChange}
              name="name"
            />{" "}
            <br />
            <input
              type="email"
              placeholder="Your Email Address"
              id=""
              value={message.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>

          <div className="right">
            <textarea
              id=""
              cols="30"
              rows="10"
              value={message.message}
              onChange={handleInputChange}
              name="message"
              placeholder="Your Message"
            ></textarea>
          </div>
        </div>
        <div className="FormButtons" onClick={handleSubmit}>
          <Button
            className="ContactButton"
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

export default Contact;
