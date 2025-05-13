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
          
          
          Hello and thank you for visiting my portfolio! My name is <span className="bold-reg-text">Rudra Goel</span>, and I am in my undergrad studying <span className="bold-reg-text">Computer Engineering @ Georgia Tech</span> from Aurora, CO. Back in 2017, I took my first shot at electronics and got my hands dirty with an  Arduino Uno starter kit. I've grown very passionate about embedded systems ever since. 
          
          
          <br></br><br></br><br></br>
          My goal one day is to <span className="bold-reg-text">Design Computer Chips</span>
          <br></br><br></br><br></br>
          
          I am involved in <span className="bold-reg-text">Competitive Robotics</span> and research in <span className="bold-reg-text">ASIC Design & HPC</span>.

          <br></br><br></br><br></br>
          I also want to climb every <a href="https://en.wikipedia.org/wiki/List_of_Colorado_fourteeners" target="__blank"><span className="link">14er in Colorado</span></a> before I turn 30. 
          <br></br><br></br><br></br>


          I like being a Master Peer Instructor at the <a href="https://hive.ece.gatech.edu/" target="__blank"><span className="link">The Hive</span></a> 
          
          <br></br><br></br><br></br>

          I also like playing my trombone in <span className="bold-reg-text">Marching Band</span> and being a member of <a href="https://robojackets.org/teams/robowrestling/" target="__blank"><span className="link">Robowrestling</span></a>. 
          
          <br></br><br></br><br></br>

          I like camping, hiking, and spending time with family/friends :-)

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
