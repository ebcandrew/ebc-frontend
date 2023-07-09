import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { loginCall } from "../../../apiCalls";
import { CircularProgress } from "@mui/material";
import Button from "../../../components/button/Button";

function AdminLogin() {
  const [isFetching, setIsFetching] = useState(false);

  const email = useRef();
  const password = useRef();

  const { dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    setIsFetching(true);
    e.preventDefault();
    try {
      loginCall(
        {
          email: email.current.value,
          password: password.current.value,
        },
        dispatch
      ).then((res) => {
        // setSuccessAlert(true);
        window.location.replace("/");
      });
    } catch (err) {
      console.log(err);
      setIsFetching(false);
      alert("something went erong, pls check your details");
    }
  };
  return (
    <>
      <div className="login">
        <div className="admin__container">
          <div className="admin__container__form">
            <h4>login</h4>

            <form>
              <div className="email">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="loginInput"
                  ref={email}
                />
              </div>

              <div className="password">
                <input type="password" placeholder="password" ref={password} />
              </div>
              <div onClick={handleSubmit}>
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
              {/* <div className="login__container__form__create">
                <h5>don't have an account? </h5>
                <a href="/admin/register"> sign up</a>
              </div> */}
              {/* <a href="/lost-password"> lost password?</a> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
