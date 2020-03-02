import React from "react";
import Badge from "../../components/Badge";
import { Link } from "react-router-dom";
import confLogo from "../../images/platziconf-logo.svg";
import "../../components/styles/BadgeDetails.css";

const BadgeDetails = props => {
  return (
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {props.firstName || "Jasan"} {props.lastName || "Hernández"}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              id={props.id}
              firstName={props.firstName}
              lastName={props.lastName}
              email={props.email}
              jobTitle={props.jobTitle}
              twitter={props.twitter}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${props.id}/edit`}
                >
                  Edit
                </Link>
              </div>

              <div>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BadgeDetails;
