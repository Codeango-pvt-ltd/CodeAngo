import React from "react";
import logo from "../logo.jpg";
import search from "../search.jpg";
export default function Navbar() {

  return (
    <div className="navbar">
      <div className="logo" >
        <img src={logo}  alt="logo" />
      </div>
      <span className="bubblebluesmall2" ></span>
      <div className="search">
        <input type="text" placeholder="Search for anything here"/>
        <img src={search} alt="search" />
        
      </div>
      <div className ="loginSection">
        <hr className="hr"></hr>
        <a href="/">
          {" "}
          <div className="login"> Log in</div>
        </a>
        {/* <hr className="loginhr"></hr> */}
        <a href="/">
          {" "}
          <div className="signup">
            <button className="reg"> Sign Up</button>
          </div>{" "}
        </a>
      </div>
      <hr className="navbarhr"></hr>
      <span className="bubblesbluebig"></span>
      <span className="bubblesorangebig"></span>
      <span className="bubblebluesmall"></span>
      <span className="bubbleorangesmall"></span>
      <span className="bubbleorangebg3"></span>
    </div>
  );
}
