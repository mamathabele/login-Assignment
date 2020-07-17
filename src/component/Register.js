import React, { Component } from "react";
import { Link } from "react-router-dom";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export default class register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      password: "",
      value: "",
      errors: {
        fullName: "",
        email: "",
        password: "",
      },
    };
  }
  handlechange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5
            ? "Full Name must be at least 5 characters long!"
            : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8
            ? "Password must be at least 8 characters long!"
            : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
    event.preventDefault();
  };

  render() {
    const { errors } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <form onSubmit={this.handleSubmit}>
          <br></br>
          <h1>Register</h1>
          <br></br>
          <div>
            <label> Name </label>
            <br></br>
            <input
              type="text"
              name="fullname"
              value={this.state.fullname}
              onChange={this.handlechange}
              style={{
                // borderColor: "#0062CC",
                borderRadius: "5px",
                width: "400px",
                border: "1px solid #CED4DA",
              }}
              noValidate
            />
            {errors.fullName.length > 0 && (
              <span className="error">{errors.fullName}</span>
            )}
          </div>

          <div>
            <label> Email </label>
            <br />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handlechange}
              style={{
                // borderColor: "#0062CC",
                borderRadius: "5px",
                width: "400px",
                border: "1px solid #CED4DA",
              }}
              noValidate
            />
            {errors.email.length > 0 && (
              <span className="error">{errors.email}</span>
            )}
          </div>
          <div>
            <label> Password </label>
            <br />
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handlechange}
              style={{
                // borderColor: "#0062CC",
                borderRadius: "5px",
                width: "400px",
                border: "1px solid #CED4DA",
              }}
              noValidate
            />
            {errors.email.length > 0 && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <input
            type="submit"
            value="Submit"
            onSubmit={this.handleSubmit}
            style={{
              color: "white",
              backgroundColor: "#007BFF",
              borderRadius: "5px",
              width: "400px",
              height: "35px",
              border: "1px solid #CED4DA",
            }}
          />
        </form>
        <br></br>
        <p className="back text-center">
          Login<Link to={"/"}>Here</Link>
        </p>
      </div>
    );
  }
}
