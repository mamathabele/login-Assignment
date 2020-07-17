import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Switch, Route, Router, BrowserRouter } from "react-router-dom";
import Login from "./component/Login";
import Logout from "./component/Logout";
import Admin from "./component/Admin";
import Register from "./component/Register";
import MapContainer from "./component/map";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Logout" component={Logout} />
        <Route path="/Admin" component={Admin} />
        <Route path="/map" component={MapContainer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
