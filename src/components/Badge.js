import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

const Badge = props => {
  return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logo de la conferencia" />
      </div>
      <div className="Badge__section-name">
        <img className="Badge__avatar" src={props.avatarUrl} alt="Avatar" />
        <h1>
          {props.firstName} <br /> {props.lastName}
        </h1>
      </div>
      <div className="Badge__section-info">
        <h3>{props.jobTitle}</h3>
        <div>@{props.twitter}</div>
      </div>
      <div className="Badge__footer">#platziconf</div>
    </div>
  );
};

export default Badge;
