import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

const Header = ({navLinks,currentPath}) => {
  const [count, setCount] = useState(0);
  
useEffect(()=>{
    let nav=document.querySelector("nav");
    let arrow=document.querySelector("#arrow")
      if(nav.hasAttribute("hidden")){
        nav.classList.add("slide-in-right")
        nav.removeAttribute('hidden')
        arrow.classList.replace("fa-caret-left","fa-caret-right")
      } else {
        nav.setAttribute("hidden",true)
        arrow.classList.replace("fa-caret-right","fa-caret-left")
      }
    })
    
const getLinks=()=>navLinks.map(({path},i)=><li key={i}><Link replace={path === currentPath} to={"/"+path}>{path}</Link></li>)

return(
  <header>
    <div id="slider" onClick={() => setCount(count + 1)}><i id="arrow" className="fas fa-caret-left"></i></div>
    <div id="mySidenav"  className="sidenav">
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
