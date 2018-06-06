import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App/App";
import Contact from "../Contact/Contact";
import NotFound from "../NotFound/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/contact" component={Contact} />
      <Route path="/:linkId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router;
