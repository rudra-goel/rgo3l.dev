import React from 'react'

//images
import Pfp from "../Images/Profile Picture.jpg"
import Drone from "../Images/Drone.jpg"
import Beach from "../Images/Beach.jpg"
import Graduation from "../Images/Graduation.jpg"
import Math from "../Images/Math.svg"
import Duck from "../Images/Duck.svg"
import Playing from "../Images/Playing.jpg"

//svg image
import DownArrow from "../Images/Down Arrow.svg"


export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="bio-and-image">
        <div className="bio">
          Hello and thank you for visiting my website! My name is <span className="bold-reg-text">Rudra Goel</span>, and I am a first year <span className="bold-reg-text">Computer Engineering Student @ Georgia Tech</span>. Back in 2017, I took my first shot at microelectronics and got my hands down and dirty with a tiny Arduino Uno starter kit. Ever since then, I've been stumbling upon more and more information about how our modern computers even work. <span className="about-me-italics">My goal one day is to fully understand each component of a computer and the logic behind our engineering standards.</span> 
          <br></br><br></br><br></br>
          In my free time, you'll most likely find me watching <span className="bold-reg-text">Cartoon Network</span> or <span className='bold-reg-text'>Spongebob</span> while cooking up 5 min ramen in my dorm. I could also be stuck playing a really aggressive <span className="bold-reg-text">Plants vs Zombies level</span>.  
        </div>
        <div className="bio-svg-image">
          <img src={Duck} alt="Beach"  height="300px" width="auto"/>
        </div>
      </div>
      <div className="about-me-images">
        <div className="img-container-abt-me">
          <img src={Beach} className="fadeInLeft" alt="Beach"  />
        </div>
        <div className="img-container-abt-me">
          <img src={Pfp} className="fadeInLeft" alt="Beach"  />
        </div>
        <div className="img-container-abt-me">
          <img src={Drone} className="fadeInLeft" alt="Beach"  />
        </div>
        
      </div>
        
    </div>
    
  )
}
