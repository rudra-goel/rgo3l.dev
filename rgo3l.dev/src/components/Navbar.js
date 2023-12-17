import React, { useState } from 'react'
import "./Navbar.css"

export default function Navbar() {

  const [hamburgerIconState, setHamburgerIconState] = useState(false)
  const [menuLinksState, setMenuLinksState] = useState(false)
  
  const mobileNav = () => {
    setHamburgerIconState(!hamburgerIconState)
    setMenuLinksState(!menuLinksState)

  }
  
  return (
    <div className="nav-container" >
        <nav className="navbar">
          <img alt="RG" id="navbar-logo" src="../../RG.png" width ="75" height="75"></img>
          <div className={hamburgerIconState ? "menu-toggle is-active" : "menu-toggle"}  id="mobile-menu" onClick={mobileNav}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={menuLinksState ? "nav-menu active" : "nav-menu"}>   
            <li ><a className="nav-links" href="/">Home</a></li>
            <li ><a className="nav-links" href="/about-me">About Me</a></li>
            <li ><a className="nav-links" href="/project-portfolio">Project Portfolio</a></li>
            <li ><a className="nav-links" href="/experience">Experience</a></li>
            <li ><a className="nav-links"href="/resume">Resume</a></li>
            <li ><a className="nav-links nav-links-btn" href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
  )  
}
