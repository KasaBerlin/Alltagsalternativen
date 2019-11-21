import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <div id="slider"></div>
    <div id="mySidenav" class="sidenav">
      <nav>
        <ul id="about">
          <li>
            <Link to="/">Hallo</Link>
          </li>
          <li>
            <Link to="/WasIstSexismus">Was ist Sexismus?</Link>
          </li>
          <li>
            <Link to="/Ifaqs">Gender IFAQs</Link>
          </li>
          <li>
            <Link to="/Zweigeschlechtlichkeit">Zweigeschlechtlichkeit</Link>
          </li>
          <li>
            <Link to="/Selbstverteiler">Für Selbstverteiler_Innen</Link>
          </li>
          <li>
            <Link to="DiesUndDas">dies und das</Link>
          </li>
          <li>
            <Link to="Links">Links</Link>
          </li>
          <li>
            <Link to="Kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="logo">
      <h1>alltagsalternativen</h1>
    </div>
  </header>
);

export default Header;
