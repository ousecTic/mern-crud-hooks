import React, { Fragment, createElement } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

//start to import components

import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import ListExercise from "./components/ListExercise";
import UpdateExercise from "./components/UpdateExercise";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" component={ListExercise} exact />
            <Route path="/create-exercise" component={CreateExercise} exact />
            <Route path="/create-user" component={CreateUser} exact />
            <Route path="/exercise/:id" component={UpdateExercise} exact />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
