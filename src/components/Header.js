import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Header = ({navLinks,currentPath}) => {
  const [hidden, setHide] = useState(false);

useEffect(()=>{
  let arrow=document.querySelector("#arrow");
  let nav=document.querySelector("nav");
  nav.toggleAttribute("hidden")
  nav.classList.replace("slide-out-right","slide-in-right")
  arrow.classList.toggle("fa-caret-right")
})

// function toggleNav(){
//   if(!hidden){  
//     arrow.classList.replace("fa-caret-right","fa-caret-left")}
// }

const getLinks=()=>navLinks.map(({path},i)=><li key={i}><Link replace={path === currentPath} to={"/"+path}>{path}</Link></li>)

return(
  <header>
    <div id="slider" onClick={() =>setHide(!hidden)}><i id="arrow" className="fas fa-caret-left"></i></div>
    <div id="mySidenav"  className="sidenav">
      <nav className="slide-out-right">
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
