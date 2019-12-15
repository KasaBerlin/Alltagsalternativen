import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footerbox">
    <footer>
      <Link to="/Impressum">Impressum + </Link>
      <Link to="/Datenschutz">Datenschutz</Link >
      <a href="https://www.facebook.com/Alltagsalternativen/"><i className="fab fa-facebook"></i></a>
    </footer>
  </div>)
;
export default Footer;