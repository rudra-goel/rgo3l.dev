import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  let page = window.location.href;
  console.log(page)
  page = page.split("/")
  page = page[page.length-1]

  switch (page) {
    case "about-me":
      return (
        <div className="nav-container" >
            <nav className="navbar">
              <img alt="RG" id="navbar-logo" src="../../RG.png" width ="75" height="75"></img>
              <div className="menu-toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
              <ul className="nav-menu">   
                <li ><a className="nav-links" href="/">Home</a></li>
                <li ><a className="nav-links" href="/project-portfolio">Project Portfolio</a></li>
                <li ><a className="nav-links" href="/experience">Experience</a></li>
                <li ><a className="nav-links"href="/resume">Resume</a></li>
                <li ><a className="nav-links" href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
      )
      
    case "project-portfolio":
      return (
        <div className="nav-container" >
            <nav className="navbar">
              <img  alt="RG" id="navbar-logo" src="../../RG.png" width ="75" height="75"></img>
              <div className="menu-toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
              <ul className="nav-menu">   
                <li className="nav-links"><a className="nav-links" href="/">Home</a></li>
                <li><a className="nav-links" href="about-me">About Me</a></li>
                <li><a className="nav-links" href="/experience">Experience</a></li>
                <li><a className="nav-links" href="/resume">Resume</a></li>
                <li><a className="nav-links" href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
      )
    case "experience":
      return (
        <div className="nav-container" >
            <nav className="navbar">
              <img  alt="RG" id="navbar-logo" src="../../RG.png" width ="75" height="75"></img>
              <div className="menu-toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
              <ul className="nav-menu">   
                <li><a className="nav-links" href="/">Home</a></li>
                <li><a className="nav-links" href="about-me">About Me</a></li>
                <li><a className="nav-links" href="/project-portfolio">Project Portfolio</a></li>
                <li><a className="nav-links" href="/resume">Resume</a></li>
                <li><a className="nav-links" href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
      )
      case "resume":
        return (
          <div className="nav-container" >
            <nav className="navbar">
              <img  alt="RG" id="navbar-logo" src="../../RG.png" width ="75" height="75"></img>
              <div className="menu-toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
              <ul className="nav-menu">   
                <li><a className="nav-links" href="/">Home</a></li>
                <li><a className="nav-links" href="about-me">About Me</a></li>
                <li><a className="nav-links" href="/project-portfolio">Project Portfolio</a></li>
                <li><a className="nav-links" href="/experience">Experience</a></li>
                <li><a className="nav-links" href="/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
      )
      case "contact":
        return (
          <div className="nav-container" >
            <nav className="navbar">
              <img alt="RG" id="navbar-logo"  src="../../RG.png" width ="75" height="75"></img>
                <div className="menu-toggle" id="mobile-menu">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </div>
                <ul className="nav-menu">   
                  <li><a className="nav-links" href="/">Home</a></li>
                  <li><a className="nav-links" href="about-me">About Me</a></li>
                  <li><a className="nav-links" href="/project-portfolio">Project Portfolio</a></li>
                  <li><a className="nav-links" href="/resume">Experience</a></li>
                  <li><a className="nav-links" href="/experience">Resume</a></li>  
                </ul>
              </nav>
          </div>
      )
    
  
    default:
      return (
        <div className="nav-container" >
            Error in Navbar
          </div>
      )
  }
  
}
