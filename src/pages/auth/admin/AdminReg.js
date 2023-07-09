import axios from "../../../axios";
import React, { useState } from "react";
import "./AdminAuth.css";
import Button from "../../../components/button/Button";
import { CircularProgress } from "@mui/material";

function AdminReg() {
  const initialValues = {
    name: "",
    email: "",
    username: "",
    password: "",
  };

  const [users, setUsers] = useState(initialValues);
  const [isFecting, setIsFetching] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsers({
      ...users,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);

    try {
      const post = await axios
        .post("/users/admin/register", users)
        .then((res) => {
          console.log(res);
        });

      post();

      console.log(users);
    } catch (error) {
      setIsFetching(false);
      console.log(error);
    }
  };

  return (
    <>
      <div className="admin__container">
        <div className="admin__container__form">
          <h4>Admin sign up</h4>

          <form>
            <div className="name">
              <input
                type="name"
                placeholder="full name"
                value={users.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>
            <div className="username">
              <input
                type="name"
                placeholder="username"
                value={users.username}
                onChange={handleInputChange}
                name="username"
              />
            </div>
            <div className="email">
              <input
                type="email"
                placeholder="example@gmail.com"
                value={users.email}
                onChange={handleInputChange}
                name="email"
              />
            </div>
            <div className="password">
              <input
                type="password"
                placeholder="password"
                value={users.password}
                onChange={handleInputChange}
                name="password"
              />
            </div>
            <div onClick={handleSubmit}>
              <Button
                text={
                  isFecting ? (
                    <CircularProgress size={16} color="inherit" />
                  ) : (
                    "submit"
                  )
                }
              />
            </div>{" "}
            <div className="admin__container__form__create">
              <h5>already have an account? </h5>
              <a href="/admin/login"> log in</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminReg;
