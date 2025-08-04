import React from 'react'

//images
import Pfp from "../Images/Profile Picture.jpg"
import Drone from "../Images/Drone.jpg"
import Beach from "../Images/Beach.jpg"
import Graduation from "../Images/Graduation.jpg"
import Math from "../Images/Math.svg"
import Duck from "../Images/Duck.svg"
import Yawn from "../Images/Yawn.JPG"
import CowFeed from "../Images/CowFeed.jpg"
import Playing from "../Images/Playing.jpg"
import MarchingBand from "../Images/MarchingBand.PNG"

//svg image
import DownArrow from "../Images/Down Arrow.svg"


export default function AboutMe() {
  // Bank of images for the scrolling banner
  const bannerImages = [
    { src: MarchingBand, alt: "Marching Band" },
    { src: Pfp, alt: "Profile Picture" },
    { src: Drone, alt: "Drone" },
    { src: Yawn, alt: "Yawn" },
    { src: CowFeed, alt: "CowFeed" },
    
    // Duplicate the images for seamless loop
    { src: MarchingBand, alt: "Marching Band" },
    { src: Pfp, alt: "Profile Picture" },
    { src: Drone, alt: "Drone" },
    { src: Yawn, alt: "Yawn" },
    { src: CowFeed, alt: "CowFeed" },
  ];

  return (
    <div className="about-me-container">
      <div className="bio-and-image">
        <div className="bio">
          Hello and thanks for visiting my portfolio. My name is <span className="bold-reg-text">Rudra Goel</span>, and I am studying <span className="bold-reg-text">Computer Engineering @ Georgia Tech</span> from Aurora, CO. Back in 2017, I took my first shot at electronics and got my hands dirty with an  Arduino Uno starter kit. I've grown very passionate about embedded systems ever since.
          <br></br><br></br><br></br>
          I like to <span className="bold-reg-text">Design Computer Chips. </span>I want to do this in the future, and teach others about this amazing field.
          <br></br><br></br><br></br>
          
          I am involved in <span className="bold-reg-text">Competitive Robotics</span> and research in <span className="bold-reg-text">ASIC Design & HPC</span>.

          <br></br><br></br><br></br>
          I also want to climb every <a href="https://en.wikipedia.org/wiki/List_of_Colorado_fourteeners" target="__blank"><span className="link">14er in Colorado</span></a> before I turn 30. 
          <br></br><br></br><br></br>


          I like being a Master Peer Instructor at the <a href="https://hive.ece.gatech.edu/" target="__blank"><span className="link">The Hive</span></a> 
          
          <br></br><br></br><br></br>

          I also like playing my trombone in <span className="bold-reg-text">Marching Band</span> and being an Electrical Lead of <a href="https://robojackets.org/teams/robowrestling/" target="__blank"><span className="link">Robowrestling</span></a>. 
          
          <br></br><br></br><br></br>

          I like camping, hiking, and spending time with family/friends :-)

        </div>
        <div className="bio-svg-image">
          <img src={Duck} alt="Duck"  height="300px" width="auto"/>
        </div>
      </div>
      
      <div className="about-me-images">
        <div className="scrolling-banner">
          <div className="banner-track">
            {bannerImages.map((image, index) => (
              <div key={index} className="banner-image-container">
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
        
    </div>
    
  )
}
