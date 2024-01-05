import React from 'react'
import github from "../Images/github.svg"
import instagram from "../Images/instagram.svg"
import linkedin from "../Images/linkedin.svg"

export default function StaticName() {
  return (
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
  )
}
