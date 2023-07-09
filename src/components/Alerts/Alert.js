import React from "react";
import {
  CloseIcon,
  SentimentSatisfiedAltIcon,
  SentimentVeryDissatisfiedIcon,
} from "../imports/icons/Icons";
import "./Alert.css";

export function AlertError({ message, onclick }) {
  return (
    <div className="alert">
      <div className="alert__container error">
        <div className="container__header">
          <SentimentVeryDissatisfiedIcon />
        </div>

        <div className="container__footer">{message}</div>
        <div className="container__close" onClick={onclick}>
          <CloseIcon />
        </div>
      </div>
    </div>
  );
}

export function AlertSuccess({ message, onclick }) {
  return (
    <div className="alert">
      <div className="alert__container success">
        <div className="container__header">
          <SentimentSatisfiedAltIcon />
        </div>

        <div className="container__footer">{message}</div>
        <div className="container__close" onClick={onclick}>
          <CloseIcon />
        </div>
      </div>
    </div>
  );
}
