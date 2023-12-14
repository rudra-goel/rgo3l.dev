import React from 'react'

export default function Navbar() {
  let page = window.location.href;
  console.log(page)
  page = page.split("/")
  page = page[page.length-1]
  switch (page) {
    case "about-me":
      return (
        <div className="navbar" >
            <nav>
                <li><a href="/">Home</a></li>
                <li><a href="/project-portfolio">Project Portfolio</a></li>
                <li><a href="/experience">Experience</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/contact">Contact</a></li>
            </nav>
          </div>
      )
      break;
    case "project-portfolio":
      return (
        <div className="navbar" >
            <nav>
                <li><a href="/">Home</a></li>
                <li><a href="about-me">About Me</a></li>
                <li><a href="/experience">Experience</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/contact">Contact</a></li>
            </nav>
          </div>
      )
      break;
    case "experience":
      return (
        <div className="navbar" >
            <nav>
                <li><a href="/">Home</a></li>
                <li><a href="about-me">About Me</a></li>
                <li><a href="/project-portfolio">Project Portfolio</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/contact">Contact</a></li>
            </nav>
          </div>
      )
      break;
      case "resume":
        return (
          <div className="navbar" >
            <nav>
                <li><a href="/">Home</a></li>
                <li><a href="about-me">About Me</a></li>
                <li><a href="/project-portfolio">Project Portfolio</a></li>
                <li><a href="/experience">Experience</a></li>
                <li><a href="/contact">Contact</a></li>
            </nav>
          </div>
      )
      break;
      case "contact":
        return (
          <div className="navbar" >
            <nav>
                <li><a href="/">Home</a></li>
                <li><a href="about-me">About Me</a></li>
                <li><a href="/project-portfolio">Project Portfolio</a></li>
                <li><a href="/experience">Resume</a></li>            </nav>
                <li><a href="/resume">Experience</a></li>
          </div>
      )
      break;
    
  
    default:
      return (
        <div className="navbar" >
            Error in Navbar
          </div>
      )
      break;
  }
  
}
