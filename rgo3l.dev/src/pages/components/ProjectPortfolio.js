import React, { useState } from 'react'

import DownArrow from "../Images/Down Arrow.svg"
import Slideshow from './Slideshow'

import Img1 from "../Images/Senior Capstone Images/Drone.png"
import Img2 from "../Images/Senior Capstone Images/Design.png"
import Img3 from "../Images/Senior Capstone Images/ControlBoard.png"
import Img4 from "../Images/Senior Capstone Images/CircuitBoard.png"
import Img5 from "../Images/Senior Capstone Images/Flow.png"
import Img6 from "../Images/Senior Capstone Images/Schematic.png"
import Img7 from "../Images/Senior Capstone Images/TopFlow.png"

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

import Img27 from "../Images/CameraAlertSystem/Img1.jpg";
import Img28 from "../Images/CameraAlertSystem/Img2.jpg";
import Img29 from "../Images/CameraAlertSystem/Img3.jpg";
import Img30 from "../Images/CameraAlertSystem/Img4.jpg";
import Img31 from "../Images/CameraAlertSystem/Img5.jpg";

import Img32 from "../Images/16bitComp/compSchematic.png";
import Img33 from "../Images/16bitComp/regfile.png";
import Img34 from "../Images/16bitComp/waveform.png";
import Img35 from "../Images/16bitComp/layout.png";

import Img36 from "../Images/ConvNetSim/Arch.jpg"
import Img37 from "../Images/ConvNetSim/CNN_Model.jpg"
import Img38 from "../Images/ConvNetSim/Diagram.jpg"
import Img39 from "../Images/ConvNetSim/Circle.gif"



export default function ProjectPortfolio() {
  // Define all projects data
  const projects = [
    {
      id: 'conv-accel',
      title: 'Convolution Accelerator',
      fullTitle: 'Convolutional Hardware Accelerator',
      description: `I simulated a new hardware architecture for the convolution layer in Convolutional Neural Networks (CNNs). It came from a paper published by Wang et al. in IEEE XPlore. It was really cool to build something thats foundational to computer vision.

It uses parallel FIR filters offering 33% less multipliers for a couple more adders. Check out the github page for the full description`,
      bulletPoints: [],
      skills: ['Computer Vision', 'CNNs'],
      images: [Img38,Img39, Img36, Img37 ],
      externalLinks: [
        {text: "Github", url: "https://github.com/rudra-goel/Convolutional_Accelerator"}
      ],
      isProject: true
    },
    {
      id: 'clipboard-manager',
      title: 'Clipboard Manager',
      fullTitle: 'Clipboard Manager for macOS',
      description: `I suck at typing (like a lot). I have to type in my username & password at least 3 times before I get it right. You know what they say 4th times a charm hahah.
      
      I built a macOS menu bar app that saves records of my clipboard. Any text, passwords, links, or images can be saved and copied in a moments notice. I have 10x my login experience to any webpage. Life is great. 
      
      Check out the github if you want to test it yourself!`,
      bulletPoints: [],
      skills: ['Swift'],
      externalLinks: [
        {text: "Github", url: "https://github.com/rudra-goel/ClipboardManager"}
      ],
      images: []
    },
    {
      id: '16bit-computer',
      title: '16-bit Programmable Computer',
      fullTitle: '16-bit Synchronous Programmable Computer',
      description: `This was a culminating project for my Intro to VLSI & Digital Design course. 

I built a computer that can perfrom basic arithmetic on two 16-bit numbers via a programmable bit to toggle between addition and subtraction using two's complement. 

This was designed in Cadence Virtuoso under the FreePDK 45nm technology node provided by NCSU. I took a modular approach when designing this by first creating 1-bit full adders, then 4-bit ripple carry adders (RCAs), and finally to 16-bit RCAs. Likewise for memory units starting from D-Flip-Flops to Register Files.`,
      bulletPoints: [
        'Optimized interconnect thickeness and layout geometries for design speedup',
        'Performed DFF characterization via setup & hold time analysis',
        'Implemented vector file simulations for parameters affecting metastability issues',
        'Utilized Python to automate design layout within 50 microns',
        'Physical Design (PD) iteration process to ensure DRC and LVS run clean'
      ],
      skills: ['Cadence Virtuoso', 'SKILL Scripting', 'Python Layout Automation'],
      images: [Img32, Img33, Img34, Img35]
    },
    {
      id: 'alert-system',
      title: 'A Live Alert System',
      fullTitle: 'A Live Alert System',
      description: `I work as a TA at the School of ECE's Senior Design Labs, but our parts shop has a weird floorplan. All the TA's sit behind a wall that separates them from the main foyer where people enter.

Sometimes, students will come in needing help, but will leave since they don't see anyone in their immediate vicinity. I decided to make a camera alert system that would notify us (TAs) when someone enters the shop.

UPDATE: This had to be taken down because of GT's privacy policy for camera's within the lab. It has been replaced with a Passive Infrared Sensor (PIR) that detects motion.`,
      bulletPoints: [
        'Utilize Python\'s OpenCV Library for real time image processing and object detection',
        'Embedded system developed with Raspberry Pi OS',
        'Had a lot of fun with Onshape *_*'
      ],
      skills: ['Embedded Systems'],
      images: [Img29, Img30, Img31, Img28, Img27]
    },
    {
      id: 'discovery-project',
      title: 'ECE 1100 Discovery Project',
      fullTitle: '1100 Discovery Project',
      description: `After living with my roommate for a semester and being locked out way too many times, I decided to make a an automatic door opener. This project was directly 
inspired by Varun Patel from Blue Hand Coding. 
I added a small twist to his design by using the Adafruit Biometric Sensor to let only me and my roommate in. 

This is still a major work in progress; I am currently on my 3rd full iteration. My first two failed because of weak motors *\_/* 
But I have seen success with my electronics. My biometric sensor`,
      bulletPoints: [
        'Expose myself to a campus makerspace, The Hive',
        'Various precision-driven stepper motors',
        'Iterative processes for power budgeting and CAD',
        'February 2024'
      ],
      skills: ['Embedded Systems', 'Mechatronics'],
      images: [Img23, Img24, Img25, Img26, Img21, Img22],
      links: [
        { text: 'Blue Hand Coding', url: 'https://www.bluehandcoding.com/' },
        { text: 'The Hive', url: 'https://hive.ece.gatech.edu/' }
      ]
    },
    {
      id: 'instrument-tuner',
      title: 'Rudimentary Instrument Tuner',
      fullTitle: 'A Real, Simple Tuner',
      description: `This is a fun little project I picked up on the side. I've been playing trombone since 4th grade and before every practice, I needed to tune. 
I've been doing it for so long, but I never really understood what's going on behind the scenes. So, I wanted to learn more. 
This is an extremely simple tuner that uses the Elegoo Uno R3 equipped with the Atmega 328P microprocessor. 
A RGB LED varying colors between blue, green, and red indicates to the user the how flat or sharp their instrument is.`,
      bulletPoints: [
        'Designed embedded system from scratch with emphasis in simplicity',
        'Introduction to Fourier Transforms, a foundation in Digital Signal Processing',
        'Designed and manufactured housing unit',
        'November 2023 - December 2023'
      ],
      skills: ['Embedded Systems', 'CircuitPython', 'Digital Signal Processing (DSP)'],
      images: [Img110, Img11, Img111],
      externalLinks: [
        { text: 'Checkout My Research and Project Progress', url: 'https://github.com/rudra-goel/Tuner' },
        { text: 'Checkout Some Videos', url: 'https://drive.google.com/drive/folders/1P0aZlLg1fVU2hS_mk4kBqOxoSB63m7Jk?usp=drive_link' }
      ]
    },
    {
      id: 'senior-capstone',
      title: 'Senior Capstone',
      fullTitle: 'Ravana Custom Drone Technologies',
      description: `For my 12th grade Computer Science Capstone project, I decided to make a drone from the ground-up completely, with a focus on designing the the flight controller from scratch. 
Throughout the year, I dug my hands deep in datasheets, physics principles and the fundamentals of embedded system design. 
Although I was not successful in getting the drone to fly, I was able to control the motors individually based on gyroscopic data and outline the codebase for the control algorithm.`,
      bulletPoints: [
        'First experience at a Capstone project following the engineering design process closely',
        'Design an efficient aero-mechanical system for quadcopter drones',
        'August 2022 - April 2023',
        'Have some fun'
      ],
      skills: ['Embedded Systems', 'SolidWorks', 'EasyEDA', 'C Programming Language', 'PCB Fabrication & Soldering'],
      images: [Img1, Img2, Img3, Img4, Img5, Img6, Img7],
      externalLinks: [
        { text: 'Official Project Website', url: 'https://ravana-custom-drones.weebly.com/' },
        { text: 'Final Presentation Video', url: 'https://www.youtube.com/watch?v=69wT93p-VG0' }
      ]
    },
    {
      id: 'gear-car',
      title: 'Gear Car',
      fullTitle: 'Gear Car',
      description: `This is a culminating final project for my 11th grade engineering class. We were tasked with designing a gear car from complete scratch. 
Our car must travel up a ramp without slipping and deposit a ping pong ball in a small can. 
Powered on ONE 9V battery, we used a BDC motor and a unique series of gears to drive the car forward.`,
      bulletPoints: [
        'Applied Engineering Design Process religiously',
        'Modeled stress and performed analysis on rotating gears to optimize gear tooth design',
        'Laser Cut body',
        'March 2022 - May 2022'
      ],
      skills: ['Solidworks Design & Simulation', 'Laser Cutting'],
      images: [Img12],
      externalLinks: [
        { text: 'Watch my car vroom', url: 'https://drive.google.com/file/d/1H3F9kXrnjGiGh2UM7aDgVGxEFrHICk-8/view?usp=sharing' }
      ]
    }
  ];

  // Single state object to manage all project expanded states
  const [expandedProjects, setExpandedProjects] = useState(
    projects.reduce((acc, project) => ({
      ...acc,
      [project.id]: true
    }), {})
  );

  const toggleProject = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  // Reusable ProjectCard component
  const ProjectCard = ({ project }) => {
    const isExpanded = expandedProjects[project.id];
    
    return (
      <div className="left-stationed-tile">
        <div className="lst-left-border" onClick={() => toggleProject(project.id)}>
          {project.title}
          {
            !isExpanded ? 
            <div className="pop-out-proj">
              <img src={DownArrow} alt="out-arrow" />
            </div>
            :
            <div className="pop-in-proj">
              <img src={DownArrow} alt="out-arrow" />
            </div>
          }
        </div>
        <div className={isExpanded ? `active-content` : `inactive-content`}>
          <div className='project-content-container'>
            <div className="project-content">
              <div className="project-title">
                {project.fullTitle}
              </div>

              <div className="project-description">
                {project.description.split('\n\n').map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {paragraph.includes('Blue Hand Coding') ? (
                      <span>
                        {paragraph.split('Blue Hand Coding')[0]}
                        <a href="https://www.bluehandcoding.com/" target="_blank" rel="noopener noreferrer">
                          <span className="bold-reg-text">Blue Hand Coding</span>
                        </a>
                        {paragraph.split('Blue Hand Coding')[1]}
                      </span>
                    ) : paragraph.includes('The Hive') ? (
                      <span>
                        {paragraph.split('The Hive')[0]}
                        <a href="https://hive.ece.gatech.edu/" target="_blank" rel="noopener noreferrer">
                          <span className="bold-reg-text">The Hive</span>
                        </a>
                        {paragraph.split('The Hive')[1]}
                      </span>
                    ) : paragraph.includes('camera alert system') ? (
                      <span>
                        {paragraph.split('camera alert system')[0]}
                        <span className='bold-reg-text'>camera alert system</span>
                        {paragraph.split('camera alert system')[1]}
                      </span>
                    ) : paragraph.includes('Elegoo Uno R3') ? (
                      <span>
                        {paragraph.split('Elegoo Uno R3')[0]}
                        <span className="bold-reg-text">Elegoo Uno R3</span>
                        {paragraph.split('Elegoo Uno R3')[1].split('Atmega 328P')[0]}
                        <span className="bold-reg-text">Atmega 328P</span>
                        {paragraph.split('Atmega 328P')[1]}
                      </span>
                    ) : paragraph.includes('Adafruit Biometric Sensor') ? (
                      <span>
                        {paragraph.split('Adafruit Biometric Sensor')[0]}
                        <span className="bold-reg-text">Adafruit Biometric Sensor</span>
                        {paragraph.split('Adafruit Biometric Sensor')[1]}
                      </span>
                    ) : (
                      paragraph
                    )}
                    {index < project.description.split('\n\n').length && (
                      <>
                        <br /><br /><br />
                      </>
                    )}
                  </React.Fragment>
                ))}

                <ul className="project-description-list">
                  {project.bulletPoints.map((point, index) => (
                    <li key={index}>
                      {point.includes('The Hive') ? (
                        <span>
                          {point.split('The Hive')[0]}
                          <a href="https://hive.ece.gatech.edu/" target="_blank" rel="noopener noreferrer">
                            <span className="bold-reg-text">The Hive</span>
                          </a>
                          {point.split('The Hive')[1]}
                        </span>
                      ) : (
                        point
                      )}
                    </li>
                  ))}
                </ul>

                <div className="skills-developed">
                  {project.skills.map((skill, index) => (
                    <div key={index} className="skill-wrapper">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {project.externalLinks && project.externalLinks.map((link, index) => (
                <div key={index} className="further-proj-info-link">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="further-proj-info-link">
                    {link.text}
                  </a>
                </div>
              ))}
            </div>
            
            <div className="project-slideshow">
              <Slideshow 
                isProject={project.isProject} 
                images={project.images} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="project-portfolio-container">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
