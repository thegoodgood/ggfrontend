import "./App.css";
import "./views/containers/containers.css";
import "./views/components/components.css";

import React from "react";

import { Switch, Route } from "react-router-dom";
import Pages from "./views/pages";
import Nav from "./views/components/Nav";



const App = () => {
  return (
    <div>

      <Switch>
        <Route exact path="/signup"       component={Pages.SignupPage} />
        <Route exact path="/login"        component={Pages.LoginPage} />
        <Route exact path="/home"     component={Pages.HomePage} />
        <Route exact path="/profile"      component={Pages.ProfilePage} />
        <Route component={Pages.HomePage} />
      </Switch>
    </div>
  )
}

export default App;
