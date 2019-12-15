import React,{useState} from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

const Header = ({navLinks,currentPath}) => {
const [hidden,isHidden]=useState(false)

function setHide(){
  isHidden(!hidden)
  $("nav").toggle();
}

const getLinks=()=>navLinks.map(({path},i)=>i<8?<li key={i}><Link replace={path === currentPath} to={"/"+path}>{path}</Link></li>:null)

return(
  <header>
    <div id="slider" onClick={() =>setHide()}><i id="arrow" className={hidden ? 'fas fa-caret-left flip-vertical-left':'fas fa-caret-left flip-vertical-right'}></i></div>
      <nav className='slide-in-right main-nav'>
        <ul>
        {getLinks()}
        </ul>
      </nav>
    <div className="logo">
      <h1>alltagsalternativen</h1>
    </div>
  </header>
)};

export default Header;
