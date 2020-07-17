import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      username: "",
      password: "",
      loggedIn,
      errors: {
        username: "",
        password: "",
      },
    };
  }
  handlechange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "username":
        errors.username =
          value.length < 5
            ? "username must be at least 5 characters long!"
            : "";
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
  submitForm = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === "mamatha" && password === "password") {
      localStorage.setItem("token", "tttkkid");

      this.setState({
        loggedIn: true,
      });
    }
  };
  render() {
    const { errors } = this.state;

    if (this.state.loggedIn) {
      return <Redirect to="/Admin" />;
    }
    return (
      <div style={{ paddingTop: "150px" }}>
        <h1>Login</h1>

        <form onSubmit={this.submitForm}>
          <div>
            <input
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.handlechange}
              style={{
                borderRadius: "5px",
                width: "400px",
                border: "1px solid #CED4DA",
                textAlign: "center",
              }}
              noValidate
            />

            {errors.username.length > 0 && (
              <span className="error">{errors.username}</span>
            )}
          </div>
          <div>
            <br></br>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.handlechange}
              style={{
                borderRadius: "5px",
                width: "400px",
                border: "1px solid #CED4DA",
                textAlign: "center",
              }}
            />
            {errors.password.length > 0 && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <br></br>
          <br></br>
          <input
            type="submit"
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
        <h5>Don't have an account?</h5>
        <h5>
          Register <Link to={"/Register"}>Here</Link>
        </h5>
      </div>
    );
  }
}
