import React from "react";
import { Concentration, Welcome, HowToPlay, HiScores } from "./components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

export const App = () => (
  <Router>
    <Route exact={true} path="/">
      <Welcome />

      <Link to="/game">Start Game</Link>
      <Link to="/how-to-play">How to Play</Link>
      <Link to="/hi-scores"> Hi Score</Link>
    </Route>

    <Switch>
      <Route path="/game">
        <Concentration />
      </Route>

      <Route path="/how-to-play">
        <HowToPlay />
      </Route>

      <Route path="/hi-scores">
        <HiScores />
      </Route>
    </Switch>
  </Router>
);
