import React from 'react'

//images
import Pfp from "../Images/Profile Picture.jpg"
import Drone from "../Images/Drone.jpg"
import Beach from "../Images/Beach.jpg"
import Graduation from "../Images/Graduation.jpg"
import Math from "../Images/Math.svg"
import Duck from "../Images/Duck.svg"

//svg image
import DownArrow from "../Images/Down Arrow.svg"


export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="bio-and-image">
        <div className="bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Dictum varius duis at consectetur lorem. Elit sed vulputate mi sit. Neque gravida in fermentum et sollicitudin ac orci phasellus. Commodo ullamcorper a lacus vestibulum sed arcu.
          <br></br><br></br><br></br>
          Id faucibus nisl tincidunt eget nullam non. Nec feugiat in fermentum posuere urna. Egestas sed sed risus pretium quam vulputate. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Ultrices dui sapien eget mi proin sed. Vel facilisis volutpat est velit egestas dui. Varius quam quisque id diam vel quam elementum. Condimentum lacinia quis vel eros donec.
        </div>
        <div className="bio-svg-image">
          <img src={Duck} alt="Beach"  height="300px" width="auto"/>
        </div>
      </div>
      <div className="about-me-images">
        <img src={Beach} className="fadeInLeft" alt="Beach"  height="300px" width="auto"/>
        <img src={Pfp} className="fadeIn" alt="Beach"  height="300px" width="auto"/>
        <img src={Drone} className="fadeInRight" alt="Beach"  height="300px" width="auto"/>
      </div>
        
    </div>
    
  )
}
