import React, { useState } from 'react'

import DownArrow from "../Images/Down Arrow.svg"
import Slideshow from './Slideshow'

import Beach from "../Images/Beach.jpg"
import Graduation from "../Images/Graduation.jpg"
import Drone from "../Images/Drone.jpg"

import Img1 from "../Images/Senior Capstone Images/Drone.png"
import Img2 from "../Images/Senior Capstone Images/Design.png"
import Img3 from "../Images/Senior Capstone Images/ControlBoard.png"
import Img4 from "../Images/Senior Capstone Images/CircuitBoard.png"
import Img5 from "../Images/Senior Capstone Images/Flow.png"
import Img6 from "../Images/Senior Capstone Images/Schematic.png"
import Img7 from "../Images/Senior Capstone Images/TopFlow.png"

import Img8 from "../Images/RG.png"
import Img9 from "../Images/rgo3l.png"
import Img10 from "../Images/Static.png"

import Img11 from "../Images/Tuner/BatteryPower.jpg" 
import Img110 from "../Images/Tuner/Product.png"
import Img111 from "../Images/Tuner/Tuner Schematic.png"
import Img12 from "../Images/Car.jpg"

import Img21 from "../Images/DiscoveryProjectImages/Assembly.png";
import Img22 from "../Images/DiscoveryProjectImages/Schematic.png";
import Img23 from "../Images/DiscoveryProjectImages/V1_Opener.png";
import Img24 from "../Images/DiscoveryProjectImages/V2_Opener.png";
import Img25 from "../Images/DiscoveryProjectImages/V3_Opener.png";
import Img26 from "../Images/DiscoveryProjectImages/V4_Opener.jpg";

export default function ProjectPortfolio() {
  const [isClicked1, setIsClicked1] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)
  const [isClicked3, setIsClicked3] = useState(false)
  const [isClicked4, setIsClicked4] = useState(false)
  const [isClicked5, setIsClicked5] = useState(true)




  return (
    <div className="project-portfolio-container">
      <div className="left-stationed-tile">
        <div className="lst-left-border" onClick={() => {setIsClicked5(!isClicked5)}}>
          ECE 1100 Discovery Project 
          {
            !isClicked5 ? 
            <div className="pop-out-proj">
              <img src={DownArrow} alt="out-arrow" />
            </div>
            :
            <div className="pop-in-proj">
              <img src={DownArrow} alt="out-arrow" />
            </div>
          }
        </div>
        <div className={ isClicked5 ? `active-content` : `inactive-content` }>
        <div className='project-content-container'>
            <div className="project-content">
              <div className="project-title">
                1100 Discovery Project
              </div>


              

              <div className="project-description">

                  After living with my roommate for a semester and being locked out way too many times, I decided to make a an automatic door opener. This project was directly 
                  inspired by Varun Patel from <a href="https://www.bluehandcoding.com/" target="__blank"><span className="bold-reg-text">Blue Hand Coding</span></a>. 
                  I added a small twist to his design by using the <span className="bold-reg-text"> Adafruit Biometric Sensor  </span> to let only me and my roommate in. 
                  <br></br><br></br>
                  This is still a major work in progress; I am currently on my 3rd full iteration. My first two failed because of weak motors *\_/* 
                  But I have seen success with my electronics. My biometric sensor 
                  <ul className="project-description-list">
                    <li>Expose myself to campus makerspaces, <a href="https://hive.ece.gatech.edu/" target="__blank"><span className="bold-reg-text">The Hive</span></a></li>
                    <li>Utilizing Stepper motors & their Respective Drivers</li>
                    <li>Extremely iterative process for both proper power budgeting and gear ratios</li>
                    <li>February 2024 - Present</li>
                  </ul>
                  <div className="skills-developed">
                    <div className="skill-wrapper">
                      Embedded Systems
                    </div>
                    <div className="skill-wrapper">
                      Mechatronics
                    </div>
                    
                  </div>
              </div>
              <div className="further-proj-info-link">
              <a href="https://drive.google.com/drive/folders/1P0aZlLg1fVU2hS_mk4kBqOxoSB63m7Jk?usp=drive_link" target="__blank" 
className="further-proj-info-link">Checkout Some Videos</a>
              </div>
            </div>
            
            <div className="project-slideshow">
              <Slideshow images={[Img23, Img24, Img25, Img26, Img21, Img22]} />
            </div>
          </div>
        </div>
        
      </div>
      <div className="left-stationed-tile">
        <div className="lst-left-border" onClick={() => {setIsClicked1(!isClicked1)}}>
          Rudimentary Instrument Tuner 
          {
            !isClicked1 ? 
            <div className="pop-out-proj">
              <img src={DownArrow} alt="out-arrow" />
            </div>
            :
            <div className="pop-in-proj">
              <img src={DownArrow} alt="out-arrow" />
            </div>
          }
        </div>
        <div className={ isClicked1 ? `active-content` : `inactive-content` }>
        <div className='project-content-container'>
            <div className="project-content">
              <div className="project-title">
                A Real, Simple Tuner
              </div>


              

              <div className="project-description">
                  This is a fun little project I picked up on the side. I've been playing trombone since 4th grade and before every practice, I needed to tune. 
                  I've been doing it for so long, but I never really understood what's going on behind the scenes. So, I wanted to learn more. 
                  This is an extremely simple tuner that uses the <span className="bold-reg-text"> Elegoo Uno R3  </span> equipped with the <span className="bold-reg-text"> Atmega 328P microprocessor </span>. 
                  A RGB LED varying colors between blue, green, and red indicates to the user the how flat or sharp their instrument is. 
                  <ul className="project-description-list">
                    <li>Designed embedded system from scratch with emphasis in simplicity</li>
                    <li>Introduction to Fourier Transforms, a foundation in Digital Signal Processing</li>
                    <li>Designed and manufactured housing unit</li>
                    <li>November 2023 - December 2023</li>
                  </ul>
                  <div className="skills-developed">
                    <div className="skill-wrapper">
                      Embedded Systems
                    </div>
                    <div className="skill-wrapper">
                      CircuitPython
                    </div>
                    <div className="skill-wrapper">
                      Digital Signal Processing (DSP)
                    </div>
                  </div>
              </div>
              <div className="further-proj-info-link">
                <a href="https://github.com/rudra-goel/Tuner" target="__blank" 
className="further-proj-info-link">Checkout My Research and Project Progress</a>
              </div>
              <div className="further-proj-info-link">
              <a href="https://drive.google.com/drive/folders/1P0aZlLg1fVU2hS_mk4kBqOxoSB63m7Jk?usp=drive_link" target="__blank" 
className="further-proj-info-link">Checkout Some Videos</a>
              </div>
            </div>
            
            <div className="project-slideshow">
              <Slideshow images={[Img110, Img11, Img111]} />
            </div>
          </div>
        </div>
        
      </div>
      <div className="left-stationed-tile">
        <div className="lst-left-border" onClick={() => {setIsClicked2(!isClicked2)}}>
          Senior Capstone
          {
            !isClicked2 ? 
            <div className="pop-out-proj">
              <img src={DownArrow} alt="out-arrow" />
            </div>
            :
            <div className="pop-in-proj">
              <img src={DownArrow} alt="out-arrow" />
            </div>
          }
        </div>
        <div className={ isClicked2 ? `active-content` : `inactive-content` }>
          <div className='project-content-container'>
            <div className="project-content">
              <div className="project-title">
                Ravana Custom Drone Technologies
              </div>

              <div className="project-description">
                For my 12th grade Computer Science Capstone project, I decided to make a drone from the ground-up completely, with a focus on designing the the flight controller from scratch. 
                Throughout the year, I dug my hands deep in datasheets, physics principles and the fundamentals of embedded system design. 
                Although I was not successful in getting the drone to fly, I was able to control the motors individually based on gyroscopic data and outline the codebase for the control algorithm. 
                  <ul className="project-description-list">
                    <li>First experience at a Capstone project following the engineering design process closely</li>
                    <li>Design an efficient aero-mechanical system for quadcopter drones</li>
                    <li>August 2022 - April 2023</li>
                    <li>Have some fun</li>
                  </ul>
                  <div className="skills-developed">
                    <div className="skill-wrapper">
                      Embedded Systems
                    </div>
                    <div className="skill-wrapper">
                      SolidWorks
                    </div>
                    <div className="skill-wrapper">
                      EasyEDA
                    </div>
                    <div className="skill-wrapper">
                      C Programming Language
                    </div>
                    <div className="skill-wrapper">
                      PCB Fabrication & Soldering
                    </div>
                  </div>
              </div>
              <div className="further-proj-info-link">
                <a href="https://ravana-custom-drones.weebly.com/" target="__blank" className="further-proj-info-link">Official Project Website</a>
              </div>
              <div className="further-proj-info-link">
                <a href="https://www.youtube.com/watch?v=69wT93p-VG0" target="__blank" className="further-proj-info-link">Final Presentation Video</a>
              </div>
            </div>
            
            <div className="project-slideshow">
              <Slideshow images={[Img1, Img2, Img3, Img4, Img5, Img6, Img7]} />
            </div>
          </div>

        </div>
        
      </div>

      <div className="left-stationed-tile">
        <div className="lst-left-border" onClick={() => {setIsClicked3(!isClicked3)}}>
          rgo3l.dev
          {
            !isClicked3 ? 
            <div className="pop-out-proj">
              <img src={DownArrow} alt="out-arrow" />
            </div>
            :
            <div className="pop-in-proj">
              <img src={DownArrow} alt="out-arrow" />
            </div>
          }
        </div>
        <div className={ isClicked3 ? `active-content` : `inactive-content` }>
        <div className='project-content-container'>
            <div className="project-content">
              <div className="project-title">
                rgo3l.dev
              </div>

              <div className="project-description">
                What your on right now, Duh! I started version 1 of my personal portfolio website in December of 2023, deployed in January of the next year. 
                As the footer mentions, I used React.js as my front end web framework and pure CSS to style each component. 
                  <ul className="project-description-list">
                    <li>Utilized foundations in React.js to build personal web portfolio</li>
                    <li>Gained extensive knowledge about front-end design principles in CSS</li>
                    <li>December 2023 - January 2024</li>
                  </ul>
                  <div className="skills-developed">
                    <div className="skill-wrapper">
                      React.js
                    </div>
                    <div className="skill-wrapper">
                      CSS
                    </div>
                    <div className="skill-wrapper">
                      Google Firebase
                    </div>
                  </div>
              </div>
              <div className="further-proj-info-link">
                <a href="https://github.com/rudra-goel/rgo3l.dev" target="__blank" className="further-proj-info-link">Checkout The Github</a>
              </div>
            </div>
            
            <div className="project-slideshow">
              <Slideshow images={[Img8, Img9, Img10]} />
            </div>
          </div>

        </div>
        
      </div>

      

      <div className="left-stationed-tile">
        <div className="lst-left-border" onClick={() => {setIsClicked4(!isClicked4)}}>
          Gear Car
          {
            !isClicked4 ? 
            <div className="pop-out-proj">
              <img src={DownArrow} alt="out-arrow" />
            </div>
            :
            <div className="pop-in-proj">
              <img src={DownArrow} alt="out-arrow" />
            </div>
          }
        </div>
        <div className={ isClicked4 ? `active-content` : `inactive-content` }>
        <div className='project-content-container'>
            <div className="project-content">
              <div className="project-title">
                Gear Car
              </div>

              <div className="project-description">
                  This is a culminating final project for my 11th grade engineering class. We were tasked with designing a gear car from complete scratch. 
                  Our car must travel up a ramp without slipping and deposit a ping pong ball in a small can. 
                  Powered on ONE 9V battery, we used a BDC motor and a unique series of gears to drive the car forward.  
                  <ul className="project-description-list">
                    <li>Applied Engineering Design Process religiously</li>
                    <li>Modeled stress and performed analysis on rotating gears to optimize gear tooth design</li>
                    <li>Laser Cut body </li>
                    <li>March 2022 - May 2022</li>
                  </ul>
                  <div className="skills-developed">
                    <div className="skill-wrapper">
                      Solidworks Design & Simulation
                    </div>
                    <div className="skill-wrapper">
                      Laser Cutting
                    </div>
                  </div>
              </div>
              <div className="further-proj-info-link">
                <a href="https://drive.google.com/file/d/1H3F9kXrnjGiGh2UM7aDgVGxEFrHICk-8/view?usp=sharing" target="__blank" className="further-proj-info-link">Watch my car vroom</a>
              </div>
            </div>
            
            <div className="project-slideshow">
              <Slideshow images={[Img12]} />
            </div>
          </div>
        </div>
        
      </div>
     
    </div>
  )
}
