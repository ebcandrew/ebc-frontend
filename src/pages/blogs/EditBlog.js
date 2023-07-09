import axios from "../../axios";
import React, { useState } from "react";
import "./EditBlog.css";
import { useParams } from "react-router";
import { CircularProgress } from "@mui/material";
import Button from "../../components/button/Button";
import { useEffect } from "react";
import { AlertError, AlertSuccess } from "../../components/Alerts/Alert";

function EditBlog() {
  const [blogDetails, setBlogDetails] = useState([]);
  const [file, setFile] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [load, setLoad] = useState(false);

  const [headline, setHeadline] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  const [error, setError] = useState(Boolean);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [successMessage, setSuccessMessage] = useState("");

  const { id } = useParams();

  const defaults = () => {
    setTitle(blogDetails.title);
    setHeadline(blogDetails.headline);
    setDescription(blogDetails.description);
    setBody(blogDetails.blogBody);
    // setFile(blogDetails.thumbnail);
  };

  useEffect(() => {
    try {
      const fetchBlog = async () => {
        await axios.get(`/blogs/${id}`).then((res) => {
          setBlogDetails(res.data?.data);
          setLoad(true);
          defaults();
        });
      };

      fetchBlog();
    } catch (error) {
      setError(true);
      error && setErrorMessage(error.response.data?.error._message);
      setIsFetching(false);
    }
  }, [load]);

  const updateBlog = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("blogBody", body);
    formData.append("headline", headline);
    if(file)
    formData.append("thumbnail", file);
    formData.append("description", description);
    console.log(formData);

    try {
      await axios.patch(`/blogs/${id}`, formData).then((res) => {
        setSuccess(true);
        setSuccessMessage(res.data?.message);
        window.location.href = "/blogs";
      });
    } catch (error) {
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
    <div className="editblog">
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
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          id="fileInput"
          style={{ display: "none", cursor: "pointer" }}
        />

        {/* {file && (
          <div className="blog__image__preview">
            <img src={URL.createObjectURL(file)} alt="" />
          </div>
        )} */}

        <label htmlFor="fileInput" style={{ cursor: "pointer", fontSize: 40 }}>
          <div className="btn__submit">
            <Button text={"upload image"} />
          </div>
        </label>

        <div className="btn__submit" onClick={updateBlog}>
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

export default EditBlog;
