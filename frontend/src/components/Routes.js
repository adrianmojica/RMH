import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";


function Routes() {
  return (
    <Switch>
      <Route exact path="/register"><Register /></Route>
      <Route exact path="/login"><Login /></Route>
      <Route exact path="/"><Home /></Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
