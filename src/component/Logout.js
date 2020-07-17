import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
export default class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
  }
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}
