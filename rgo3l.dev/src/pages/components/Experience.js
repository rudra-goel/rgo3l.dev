import React, { useState } from 'react'
import ExperienceTile from './ExperienceTile'
import Slideshow from "./Slideshow.js"
//svg image
import Bar from "../Images/Horizontal Bar.svg"
import TopRight from "../Images/Top-Right.svg"

import Img3 from "../Images/Najafi Lab Images/Img3.png"
import Img4 from "../Images/Najafi Lab Images/Img4.png"
import Img5 from "../Images/Najafi Lab Images/Img5.png"
import Img6 from "../Images/Najafi Lab Images/Img6.png"
import Img7 from "../Images/Najafi Lab Images/Img7.png"
import Img8 from "../Images/Najafi Lab Images/Img8.png"
import Img9 from "../Images/Najafi Lab Images/Img9.png"
import Img10 from "../Images/Najafi Lab Images/Img10.png"
import Img11 from "../Images/Najafi Lab Images/Img11.png"

import Img12 from "../Images/Robojackets Images/Schematic-Full.png"
import Img13 from "../Images/Robojackets Images/Converter.png"
import Img14 from "../Images/Robojackets Images/Motors.png"
import Img15 from "../Images/Robojackets Images/Full Bot.png"
import Img16 from "../Images/Robojackets Images/Exposed Bot.png"
import Img17 from "../Images/Robojackets Images/PCB.png"
import Img18 from "../Images/Robojackets Images/PCB.jpg";
import Img19 from "../Images/Robojackets Images/RobotAssembledSideAngle.jpg";
import Img20 from "../Images/Robojackets Images/RobotAssembledV1.jpg";



export default function Experience() {

    const [isCardActive, setIsCardActive] = useState([true, false, false, false])
    
    const Robojackets ={
        Position: "Robowrestling Electrical Subteam Lead",
        Date:"Current",
        Company:"GT RoboJackets",
        Link:"https://robojackets.org/",
        Location:"Georgia Tech",
        Description:"Led electrical system design for autonomous and remote controlled sumo wrestling robots in 500g division ",
        Skills:["KiCAD", "Embedded Systems" , "Bare Metal C Programming", "RF PCB Manufacturing", "Autonomous Controls"],

    }

    const NajafiLab ={
        Position: "Undergraduate Research Assistant",
        Date:"Fall 2023",
        Company:"Najafi Lab",
        Link:"https://www.najafilab.org/home",
        Location:"Atlanta, GA",
        Description:"I made custom circuits for mice stationed in LickOmeter rigs, designed and 3D printed parts to interface with lab instruments to aid researchers, and implemented real-time filtering algorithms to mitigate perturbations in imaging data .",
        Skills:[ "Resin Printing", "MATLAB", "Python", "Circuit Analysis", "Xilinx System-On-Chips (SoC)"],
        
    }
    const DART ={
        Position: "Data Aggregation / Reporting / Testing (DART) Intern",
        Date:"Summer 2022",
        Company:"YPrime",
        Link:"https://yprime.com",
        Location:"DeVault, PA",
        Description:"Wrote VBA and Python scripts to consolidate and aggregate data from SQL Servers into graphical representations for project analysts.",
        Skills:["Microsoft Visual Basic", "Python", "MS Office", "Sharepoint", "SQL Server"],
    }

    const ORS ={
        Position: "Opportunity Research Scholar",
        Date:"Fall 24 - Spring 25",
        Company:"Mobile Advanced Research @ GT (MARGA) Lab",
        Link:"",
        Location:"Atlanta, GA",
        Description:"How can we manipulate the near-field effects of acoustic waves to beamform with 3D-printed materials? These are metasurfaces and can be used to create a Personal Acoustic Spaces (PAS) in large auditoriums or small home stereo systems.",
        Skills:["COMSOL Multiphysics", "Literature/Peer Reviews", "Academic Research", "Conference Submission"],
        
    }
  return (
    <div className="experience-tile-container">
        <div className="experience-tile">
            <ExperienceTile data={Robojackets} />
            <div className={`experience-footer`}>
                <div 
                    className="accordian_label" 
                    onClick={() => {
                        setIsCardActive([!isCardActive[0], false, false, false]);
                    }}>
                    <img className="expand-bar" src={Bar} alt="Down Arrow" width="100%"/>
                    More Info
                </div>
                <div className={ `experience-active-${isCardActive[0]}` }>
                    <div className="slideshow-container">
                        <Slideshow images={[Img15, Img12, Img13 , Img16, Img17, Img18, Img19, Img20]}/>
                    </div>
                    <div className="experience-footer-more-info">
                        Sumo robotics is the perfect combination of meticulous design and destructive matches. Essentially two bots compete to push each other off the steel platform (Dohyo) autonomously.
                        <br></br><br></br>
                        You can check out our 2025 in-house comp right here! LINK
                        <br></br><br></br>
                        We create custom PCBs capable of outputting 50A to power our drivetrains and integrate microprocessors with in-line serial programmers. We use a broad range of MCUs, but we especially like the Teensy 4.1 from PRJC because of its high frequency processing and vast GPIO array. 
                        <br></br><br></br>
                        As electrical lead, my goal is to expand our PCB capabilities to have RF waveguides and encourage new members to grow through experiential learning. Our designs fail sometimes, but that just means we're learning all the time. (its cheesy but true lmao)
                    </div>
                </div>
            </div>
            
        </div>
        <div className="experience-tile">
            <ExperienceTile data={ORS} />
            <div className={`experience-footer`}>
                <div 
                    className="accordian_label" 
                    onClick={() => {
                        setIsCardActive([false, !isCardActive[1], false, false]);
                    }}>
                    <img className="expand-bar" src={Bar} alt="Down Arrow" width="100%"/>
                    More Info
                </div>
                <div className={ `experience-active-${isCardActive[1]}` }>
                    <div className="slideshow-container">
                        <Slideshow images={[]}/>
                    </div>
                    <div className="experience-footer-more-info">
                        Personal Acoustic Spaces are a novel concept of a spatial zone with maximum acoustic energy - essentially an area where sound is the loudes without pointing spealers in that direction. 
                        <br></br><br></br><br></br>
                        We used a 3D-printed labyrinthine type metasurface in the shape of a brick to modulate sound waves coming out of a speaker to beamform in both azimuth and elevation. These bricks can be easily abutted to a speaker to beamform and thus create a personal acoustic zone. 

                        <br></br><br></br><br></br>
                        Check out our paper here: LINK

                        <br></br><br></br><br></br>
                        Poster: LINK
                    </div>
                </div>
            </div>
            
        </div>
        <div className="experience-tile">
            <ExperienceTile data={NajafiLab} />
            <div className={`experience-footer`}>
                <div 
                    className="accordian_label" 
                    onClick={() => {
                        setIsCardActive([false, false, !isCardActive[2], false]);
                    }}>
                    <img className="expand-bar" src={Bar} alt="Down Arrow" width="100%"/>
                    More Info
                </div>
                <div className={ `experience-active-${isCardActive[2]}` }>
                    <div className="slideshow-container">
                        <Slideshow images={[Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11]}/>
                    </div>
                    <div className="experience-footer-more-info">
                    I aided in prototyping neural imaging experiments of the prefrontal cortex to ultimately treat schizophrenia. Initially, I made custom circuits for mice stationed in LickOmeter rigs, <span className="bold-reg-text">but I soon transitioned to  work in signal processing. </span> <br></br><br></br> To reduce interference and noise in data postprocessing, I implemented real-time filering algorithms to mitigate distortions in specific stopband frequencies on an FPGA.<br></br><br></br>
                    
                    I also designed and 3D printed parts to interface with lab instruments to aid researchers. <br></br><br></br>
                    </div>
                </div>
            </div>

        </div>
        <div className="experience-tile">
            <ExperienceTile data={DART} />
            <div className={`experience-footer`}>
                <div 
                    className="accordian_label" 
                    onClick={() => {
                        setIsCardActive([false, false, false, !isCardActive[3]]);
                    }}>
                    <img className="expand-bar" src={Bar} alt="Down Arrow" width="100%"/>
                    More Info
                </div>
                <div className={ `experience-active-${isCardActive[3]}-no-images` }>
                    <div className="experience-footer-more-info">
                        I worked closely with a team of 4 and helped them with various tasks from updating sharepoint pages to compiling data. 
                        The bulk of my internship focussed on creating a data pipeline between the company's SQL server to their sharepoint page for different departments to see. 
                        My solution focussed on a <span className="bold-reg-text">combination of Visual Basic and Python to retrieve and organize the data.</span>
                    </div>                
                </div>
            </div>
            
        </div>
        
    </div>
  )
}
