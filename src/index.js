import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Route, Redirect, Switch} from "react-router-dom";

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
import Footer from "./components/Footer";
import Impressum from "../src/components/Impressum";
import Datenschutz from "../src/components/Datenschutzerklärung"

import "@fortawesome/fontawesome-free/css/all.css";

const routing =()=>{
  const navLinks=[
    {path:"Hallo",comp:App},
    {path:"Was ist Sexismus", comp:Was},
    {path:"Gender IFAQs",comp:Ifaqs},
    {path:"Zweigeschlechtlichkeit",comp:Zwei},
    {path:"Für Selbstverteiler_Innen",comp:Selbstverteiler},
    {path:"Dies Und Das",comp:DiesUndDas},
    {path:"Links",comp:Links},
    {path:"Kontakt", comp:Kontakt},
    {path:"Impressum", comp:Impressum},
    {path:"Datenschutz", comp:Datenschutz}
 ]
  
  const getLinks=()=>navLinks.map(({path,comp},i)=><Route key={i} exact path={"/"+path} component={comp} />)

  return(
  <HashRouter>
    <Header navLinks={navLinks}/>
      <section className="main">
    <Switch>
{getLinks()}
      <Redirect to="/Hallo" />
    </Switch>
      </section>
    <Footer/>
  </HashRouter>
)};

ReactDOM.render(routing(), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
