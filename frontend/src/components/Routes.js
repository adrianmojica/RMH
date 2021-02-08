import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import PrivateRoute from './PrivateRoute';
import Profile from './Profile'
import Dashboard from './Dashboard'
import NotFound from './NotFound';
import Register from "./Register";
import Login from "./Login";
import NewEntry from "./NewEntry";
import { AuthContext } from './context/auth';

function Routes() {
  const existingToken = localStorage.getItem('token')
  const [authToken, setAuthToken] = useState(existingToken);

  const setToken = (token) => {
    if (!token) {
      localStorage.removeItem('token')
    } else {
      localStorage.setItem('token', token);
    }
    setAuthToken(token)
  }

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
     
        <Switch>
          <Route exact path="/register"><Register /></Route>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/"><Home /></Route>
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/newEntry" component={NewEntry} />
          <Route component={NotFound} />
        </Switch>
     
    </AuthContext.Provider>
  );
}

export default Routes;
