import React from 'react'

//images
import Pfp from "../Images/Profile Picture.jpg"
import Drone from "../Images/Drone.jpg"
import Beach from "../Images/Beach.jpg"
import Graduation from "../Images/Graduation.jpg"
import Math from "../Images/Math.svg"
import Duck from "../Images/Duck.svg"
import Playing from "../Images/Playing.jpg"
import MarchingBand from "../Images/MarchingBand.PNG"

//svg image
import DownArrow from "../Images/Down Arrow.svg"


export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="bio-and-image">
        <div className="bio">
          Hello and thank you for visiting my website! My name is <span className="bold-reg-text">Rudra Goel</span>, and I am a third year <span className="bold-reg-text">Computer Engineering Student @ Georgia Tech</span> from Aurora, CO. Back in 2017, I took my first shot at electronics and got my hands down and dirty with a tiny Arduino Uno starter kit. Ever since then, I've been stumbling upon more and more information about how our computers even work. 
          <br></br><br></br><br></br>
          I find it hard to believe that all the intense processing in a device is because of a small chunk of silicon. Like cmon, who's going to believe that, pff? That's why my goal one day is<span className="about-me-italics"> to design computer chips</span> But that's easier said than done -_- 
          <br></br><br></br><br></br>
          Aside from just taking some VLSI courses at my school, I want to get involved in extracurriculars like <a href="https://siliconjackets.gt/" target="__blank"><span className="bold-reg-text">SiliconJackets</span></a> and <span className="bold-reg-text">research in digital design. </span>
          <br></br><br></br><br></br>
          I also want to climb every <a href="https://siliconjackets.gt/" target="__blank"><span className="bold-reg-text">14er in Colorado</span></a> by the time I'm 30. 
          <br></br><br></br><br></br>
          In my free time, you'll most likely find me at <a href="https://siliconjackets.gt/" target="__blank"><span className="bold-reg-text">The Hive</span></a> or in <span className="bold-reg-text">Marching Band or Robowrestling</span> or <span className="bold-reg-text">binging HBO</span>. I could also be stuck playing a really aggressive <span className="bold-reg-text">Plants vs Zombies level</span>.  
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
          <img src={MarchingBand} className="fadeInLeft" alt="Beach"  />
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
