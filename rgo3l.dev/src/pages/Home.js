import React from 'react';
import "./Style.css"

import StaticName from './components/StaticName';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';


export default function Home() {

  const scroll = (page) => {
    document.getElementById(page).scrollIntoView();
  }

  return (
    <div className="home-container">
        <div className="static-name">
          <StaticName />
        </div>

        <div className="dynamic-content">

          <div className="about-me">
            <AboutMe scrollDown={scroll}/>
          </div>

          <div id="experience" className="experience">
            <Experience /> 
          </div>
          
          <div id="project-portfolio" className="project-portfolio">
            <p>project portfolio</p>

          </div>
          <div id="contact" className="contact">
            <p>contact</p>

          </div>

          <div className="footer">
            <p>Footer</p>
          </div>

          

        </div>
    </div>
  )
}
