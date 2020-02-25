import React from "react";
import "./styles/BadgesCard.css";
import twitterLogo from "../images/twitter-48.png";

const BadgesList = props => {
  return (
    <div className="Card__container">
      <div className="Card__img">
        <img
          className="Card__img-avatar"
          src={props.avatarUrl}
          alt="Avatar"
        ></img>
      </div>
      <div>
        <p className="font-weight-bold">
          {props.firtsName} {props.lastName}
        </p>
        <div className="Card__twitter">
          <img
            className="Card__twitterLogo"
            src={twitterLogo}
            alt="logoTwitter"
          ></img>
          <p className="Card__twitter">@{props.twitter}</p>
        </div>
        <p className="Card__jobTitle">Job Title: {props.jobTitle}</p>
      </div>
    </div>
  );
};

export default BadgesList;
