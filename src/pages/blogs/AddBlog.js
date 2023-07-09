import { CircularProgress } from "@mui/material";
import axios from "../../axios";
import React, { useState } from "react";
import Button from "../../components/button/Button";
import "./AddBlog.css";
import { useEffect } from "react";
import { AlertError, AlertSuccess } from "../../components/Alerts/Alert";

function AddBlog() {
  const [file, setFile] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [headline, setHeadline] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [user, setUser] = useState([]);

  const [error, setError] = useState(Boolean);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    try {
      const fetchUser = async () => {
        axios.get("/users/me").then((res) => {
          setUser(res.data?.data);
        });
      };

      fetchUser();
    } catch (error) {
      setError(true);
      error && setErrorMessage(error.response.data?.message);
      setIsFetching(false);
    }
  }, []);

  const handleSubmit = async () => {
    const formData = new FormData();

    setIsFetching(true);

    formData.append("title", title);
    formData.append("blogBody", body);
    formData.append("headline", headline);
    formData.append("thumbnail", file);
    formData.append("description", description);
    formData.append("author", user.username);

    try {
      await axios.post("/blogs", formData).then((res) => {
        setSuccess(true);
        setSuccessMessage(res.data?.message);
        window.location.href = "/blogs";
      });
    } catch (error) {
      console.log(error);
      setError(true);
      error && setErrorMessage(error.response.data?.message);
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
          <p>title</p>

          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <p>headline</p>

          <input
            type="text"
            required
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
          />
        </div>

        <div>
          <p>description</p>

          <input
            type="text"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <p>content</p>

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <input
          required
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          id="fileInput"
          style={{ display: "none", cursor: "pointer" }}
        />

        {file && (
          <div className="blog__image__preview">
            <img src={URL.createObjectURL(file)} alt="" />
          </div>
        )}

        <label htmlFor="fileInput" style={{ cursor: "pointer", fontSize: 40 }}>
          <div className="btn__submit">
            <Button text={"upload thumbnail"} />
          </div>
        </label>

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

export default AddBlog;
