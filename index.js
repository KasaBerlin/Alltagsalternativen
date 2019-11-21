import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

// components
import Header from "./components/Header";
import App from "./App";
import Was from "./components/WasistSexismus";
import Ifaqs from "./components/Genderifaqs";
import Zwei from "./components/Zweigeschlechtlichkeit";
import Selbstverteiler from "./components/Selbstverteiler";
import DiesUndDas from "./components/DiesUndDas";
import Links from "./components/Links";
import Kontakt from "./components/Kontakt";

const routing = (
  <HashRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/WasIstSexismus" component={Was} />
      <Route exact path="/Ifaqs" component={Ifaqs} />
      <Route exact path="/Zweigeschlechtlichkeit" component={Zwei} />
      <Route exact path="/Selbstverteiler" component={Selbstverteiler} />
      <Route exact path="/DiesUndDas" component={DiesUndDas} />
      <Route exact path="/Links" component={Links} />
      <Route exact path="/Kontakt" component={Kontakt} />
      <Redirect to="/" />
    </Switch>
  </HashRouter>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
