import React from "react";
import "./styles/Badges.css";
import BadgesList from "./BadgesList";
import { Link } from "react-router-dom";

const BadgesContainer = props => {
  return (
    <div className="Badges__container">
      <div className="Badges__buttons">
        <Link className="btn btn-primary" to="/badges/new">
          New Badges
        </Link>
      </div>

      <div className="Badges_list">
        <div className="Badges__container">
          <ul className="list-unstyled">
            {props.data.map(data => {
              return <BadgesList key={data.id} {...data} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BadgesContainer;