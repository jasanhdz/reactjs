import React from "react";
import Badge from "../../components/Badge";
import { Link } from "react-router-dom";
import confLogo from "../../images/platziconf-logo.svg";
import "../../components/styles/BadgeDetails.css";
import Modal from "../../components/Modal";

const BadgeDetails = props => {
  const badge = props.badge;
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
                {badge.firstName || "Jasan"} {badge.lastName || "Hernández"}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              id={badge.id}
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              jobTitle={badge.jobTitle}
              twitter={badge.twitter}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>

              <div>
                <button
                  onClick={props.handleClick}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete
                </button>
                {props.modalIsVisibility && (
                  <Modal onClose={props.handleClick}>
                    <p>lorem Isup</p>
                  </Modal>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BadgeDetails;
