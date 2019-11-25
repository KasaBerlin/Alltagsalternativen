import React from "react";
import { Link } from "react-router-dom";

const Header = ({navLinks,currentPath}) => {
  
  const getLinks=()=>navLinks.map(({path},i)=><li key={i}><Link replace={path === currentPath} to={"/"+path}>{path}</Link></li>)

return(
  <header>
    <div id="slider"></div>
    <div id="mySidenav" className="sidenav">
      <nav>
        <ul id="about">
        {getLinks()}
        </ul>
      </nav>
    </div>
    <div className="logo">
      <h1>alltagsalternativen</h1>
    </div>
  </header>
)};

export default Header;
