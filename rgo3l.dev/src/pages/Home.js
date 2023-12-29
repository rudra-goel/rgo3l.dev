import React from 'react';
import "./Home.css"
import github from "./github.svg"
import instagram from "./instagram.svg"
import linkedin from "./linkedin.svg"


export default function Home() {

  const elements = []
  for(let i =0; i < 100; i++){
    elements.push(Math.random()*1000 | 0)
  }
  console.log(elements)

  return (
    <div className="home-container">
        <div className="static-name">
          <div className="name">
            <div className="rudra">
              Rudra
            </div>
            <div className="goel">
              Goel
            </div>
          </div>
          <div className="student">
            Student @ Georgia Tech
          </div>
          <div className="socials">
            <a target="_blank" href="https://github.com/rudra-goel">
              <div className="socials-container">
                <img src={github} height="30px" width="30px"/>
                - Github
              </div>
            </a>
            <a target="_blank" href="https://www.instagram.com/_rudra.goel_?igsh=YnB2NHppNmd6dTBv&utm_source=qr">
              <div className="socials-container">
                <img src={instagram} height="30px" width="30px"/>
                - Instagram
              </div>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/rudra-goel-239392251/">
              <div className="socials-container">
                <img src={linkedin} height="30px" width="30px"/>
                - LinkedIn
              </div>
            </a>
          </div>
        </div>
        <div className="dynamic-content">
          <h1>Content</h1>

          <div className="aboutMe">
            <p>about me</p>
          
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
