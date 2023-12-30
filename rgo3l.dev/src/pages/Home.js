import React from 'react';
import "./Style.css"

import StaticName from './components/StaticName';
import AboutMe from './components/AboutMe';


export default function Home() {

  const elements = []
  for(let i =0; i < 100; i++){
    elements.push(Math.random()*1000 | 0)
  }

  return (
    <div className="home-container">
        <div className="static-name">
          <StaticName />
        </div>

        <div className="dynamic-content">

          <div className="about-me">
            <AboutMe />
          </div>

          <div className="experience">
            <p>experience</p>

          </div>
          
          <div className="project-portfolio">
            <p>project portfolio</p>

          </div>
          <div className="contact">
            <p>contact</p>

          </div>

          <div className="footer">
            <p>Footer</p>
          </div>

          {
            elements.map((element, i) => {
              return (
                <h1>{element}</h1>
              )
            })
          }

        </div>
    </div>
  )
}
