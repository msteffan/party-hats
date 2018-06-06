import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App/App";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/:linkId" component={App} />
      <Route component={App} />
    </Switch>
  </BrowserRouter>
)

export default Router;
