import React from "react";
import { Switch, Route } from "react-router-dom";
import FullPositions from "./FullPositions";
import PlayerPosition from "./PlayerPosition";

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Switch>
    <Route exact path="/positions" component={FullPositions} />
    <Route path="/positions/:name" component={PlayerPosition} />
  </Switch>
);

export default Roster;
