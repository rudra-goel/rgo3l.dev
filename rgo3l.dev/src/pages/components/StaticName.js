import React from 'react'
import github from "../Images/github.svg"
import instagram from "../Images/instagram.svg"
import linkedin from "../Images/linkedin.svg"
import Fireworks from "../Images/Fireworks.svg"
import UpArrow from "../Images/Up Arrow.svg"
export default function StaticName({ scrollFunction }) {
  return (
    <>
      <div className='top-image'>
        <img src={Fireworks} height="250px" width="250px"/>
      </div>
      <div className="static-name-container">
          <div className="name">
              <div className="rudra">
                Rudra
              </div>
              <div className="goel">
                Goel
              </div>
            </div>
            <div className="student">
              Student & Solitare Extraordinaire
            </div>
            <div className="socials-and-scroll">
              <div className="socials">
                <a target="_blank" href="https://github.com/rudra-goel">
                  <div className="social-container">
                    <img src={github} height="30px" width="30px"/>
                    - Github
                  </div>
                </a>
                <a target="_blank" href="https://www.instagram.com/_rudra.goel_?igsh=YnB2NHppNmd6dTBv&utm_source=qr">
                  <div className="social-container">
                    <img src={instagram} height="30px" width="30px"/>
                    - Instagram
                  </div>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/rudra-goel-239392251/">
                  <div className="social-container">
                    <img src={linkedin} height="30px" width="30px"/>
                    - LinkedIn
                  </div>
                </a>
              </div>
              <div className="scrollwheel">
                <div className="toc-page" onClick={() => {scrollFunction("about-me")}} >
                  About Me
                </div>
                <div className="toc-page" onClick={() => {scrollFunction("experience")}} >
                  My Experience
                </div>
                <div className="toc-page" onClick={() => {scrollFunction("project-portfolio")}} >
                  Projects
                </div>
                <div className="toc-page" onClick={() => {scrollFunction("contact")}} >
                  Reach out
                </div>
              </div>
            </div>
      </div>
    </>
  )
}
