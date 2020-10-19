import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Featured from "../components/Featured";
import Others from "../components/Others";

function routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header />
          <Main />
          <Featured />
          <Others />
        </Route>
      </Switch>
    </Router>
  );
}

export default routes;
