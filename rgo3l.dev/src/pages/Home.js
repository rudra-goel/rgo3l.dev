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
            <div className="about-me-title">
              Here's a little bit about me!
            </div>
            <AboutMe scrollDown={scroll}/>
          </div>

          <div id="experience" className="experience-container">
            <div className='experience-header'>Some Experiences I've Been Apart Of :-)</div>
            <Experience /> 
            <a href="https://gtvault-my.sharepoint.com/:b:/g/personal/rgoel68_gatech_edu/EQiPKfQBY3FLmAS-aCQNPUcBEtrqbnfnsm6PTOYWh_v-Ng?e=uKhCgX" target="__blank">
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
