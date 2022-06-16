import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import User from "./components/User";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
