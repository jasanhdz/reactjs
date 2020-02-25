import React from "react";
import "./styles/Badges.css";
import BadgesList from "./BadgesList";

const BadgesContainer = props => {
  return (
    <div className="Badges__container">
      <div className="Badges__buttons">
        <a className="btn btn-primary" href="/badges/new">
          New Badges
        </a>
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
