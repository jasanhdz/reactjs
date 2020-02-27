import React from "react";
import Heroe from "../components/Heroe";
import BadgeContainer from "../components/BadgeContainer";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
      avatarUrl:
        "https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
    }
  };
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  handleClick = e => {
    console.log("Button was click");
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.form);
  };
  render() {
    return (
      <React.Fragment>
        <Heroe />
        <BadgeContainer
          Badge={<Badge {...this.state.form} />}
          Form={
            <BadgeForm
              onChange={this.handleChange}
              handleClick={this.handleClick}
              handleSubmit={this.handleSubmit}
              {...this.state.form}
            />
          }
        />
      </React.Fragment>
    );
  }
}

export default BadgeNew;
