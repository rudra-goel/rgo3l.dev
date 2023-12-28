import React from 'react';

export default function Home() {
  return (
    <div className="home-container">
        <div className="static-name">
          <div className="name">
            <h1>Rudra</h1>
            <h1>Goel</h1>
          </div>
          <h2>Student @ Georgia Tech</h2>
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

        </div>
    </div>
  )
}
