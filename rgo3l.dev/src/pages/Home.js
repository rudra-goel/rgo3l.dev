import React from 'react';
import "./Home.css"
import "./components/Styles/AboutMe.css"
import "./components/Styles/Contact.css"
import "./components/Styles/Experience.css"
import "./components/Styles/StaticName.css"
import "./components/Styles/Footer.css"
import "./components/Styles/ProjectPortfolio.css"

import StaticName from './components/StaticName';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPortfolio from './components/ProjectPortfolio';

import RightArrow from "./Images/Right Arrow.svg"

export default function Home() {

  const scroll = (page) => {
    document.getElementById(page).scrollIntoView();
  }

  return (
    <div className="home-container">
        <div className="static-name">
          <StaticName scrollFunction={scroll} />
        </div>

        <div className="dynamic-content">

          <div id="about-me" className="about-me">
            <div className="about-me-title">
              Hey There! I'm Rudra
            </div>
            <AboutMe scrollDown={scroll}/>
          </div>

          <div id="experience" className="experience-container">
            <div className='experience-header'>Some Experiences I've Been Apart Of :-)</div>
            <Experience /> 
            <div className="resume-link">
              <a href="https://gtvault-my.sharepoint.com/:b:/g/personal/rgoel68_gatech_edu/EQiPKfQBY3FLmAS-aCQNPUcBEtrqbnfnsm6PTOYWh_v-Ng?e=uKhCgX" target="__blank">
                  View Full Resume
              </a>
              <img className="resume-link-arrow"src={RightArrow} alt="Right Arrow" />
            </div>
          </div>
          
          <div id="project-portfolio" className="project-portfolio">
            <div className='projects-header'>Cool projects</div>
            <ProjectPortfolio />

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
