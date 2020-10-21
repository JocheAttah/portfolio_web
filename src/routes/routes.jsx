import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Featured from "../components/Featured";
import Others from "../components/Others";
import About from "../components/About";
import Contact from "../components/Contact";

function routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header />
          <Main />
          <Featured />
          <Others />
          <About />
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default routes;
