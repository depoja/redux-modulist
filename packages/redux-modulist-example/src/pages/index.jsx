import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import NotFound from "./NotFound";

const Pages = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Pages;
