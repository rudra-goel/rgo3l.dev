import React from 'react';
import "./Style.css"

import StaticName from './components/StaticName';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

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

          <div id="experience" className="experience-container">
            <div className='experience-header'>Here is some of my experience</div>
            <Experience /> 
            <a href="https://drive.google.com/file/d/1MJMCVuh27jCdWVRyQY3wrHbt6CXtlx5T/view?usp=drive_link" target="__blank">
              <div className="resume-link">
                View My Full Resume
              </div>
            </a>
          </div>
          
          <div id="project-portfolio" className="project-portfolio">
            <p>project portfolio</p>

          </div>
          <div id="contact" className="contact-container">
            <Contact />
          </div>

          <div className="footer">
            <Footer />
          </div>

          

        </div>
    </div>
  )
}
