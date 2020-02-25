import React from "react";
import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";

const Heroe = () => {
  return (
    <div className="BadgeNew__hero">
      <img className="img-fluid" src={header} alt="Logo"></img>
    </div>
  );
};

export default Heroe;
