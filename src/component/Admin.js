import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MapContainer from "./map";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      loggedIn,
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Nav className="mr-auto">
            <Nav.Link
              href="/Logout"
              style={{ color: "white", paddingLeft: "750px" }}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar>

        <MapContainer></MapContainer>
      </div>
    );
  }
}
