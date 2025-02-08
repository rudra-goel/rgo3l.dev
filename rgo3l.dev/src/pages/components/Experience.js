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

    const [isCardActive, setIsCardActive] = useState([true, false, false])


    const NajafiLab ={
        Position: "Undergraduate Engineering Intern",
        Date:"Fall 2023",
        Company:"Najafi Lab",
        Link:"https://www.najafilab.org/home",
        Location:"Atlanta, GA",
        Description:"I made custom circuits for mice stationed in LickOmeter rigs, designed and 3D printed parts to interface with lab instruments to aid researchers, and implemented real-time filtering algorithms to mitigate perturbations in imaging data .",
        Skills:["Solidworks", "3D Printing", "MATLAB", "Python", "Circuit Analysis", "Xilinx FPGAs"],
        FooterDescription: "I aided postdocs by prototyping neural imaging experiments to understand prefrontal cortex decision making to treat schizophrenia. Developed and implemented high-performance digital signal processing (DSP) algorithms in Verilog for FPGA platforms, including real-time analysis of random signals, low-voltage amplifier on Xilinx FPGA, and data acquisition systems.Reduced light pollution in 2P scope by designing a 3D printed shield on 2P scope reducing error in day-to-day experiments."
        
    }
    const DART ={
        Position: "Data Aggregation / Reporting / Testing (DART) Intern",
        Date:"Summer 2022",
        Company:"YPrime",
        Link:"https://yprime.com",
        Location:"DeVault, PA",
        Description:"Wrote VBA and Python scripts to consolidate and aggregate data from SQL Servers into graphical representations for project analysts.",
        Skills:["Microsoft Visual Basic", "Python", "MS Office", "Sharepoint", "SQL Server"],
        FooterDescription: "I worked closely with a team of 4 and helped them with various tasks from updating sharepoint pages to compiling data. The bulk of my internship focussed on creating a data pipeline between the company's SQL server to their sharepoint page for different departments to see. My solution focussed on a combination of Visual Basic and Python to retrieve and organize the data.  "
        
    }
    const Robojackets ={
        Position: "RoboWrestling Electrical STL",
        Date:"Current",
        Company:"GT RoboJackets",
        Link:"https://robojackets.org/",
        Location:"Georgia Tech",
        Description:"Work closely with a team of 4 to create a 500g robot from scratch. I focus on the ground-up build of the control and power board for our robot. ",
        Skills:["KiCAD", "SolidWorks", "Embedded Systems" , "C Programming", "PCB Manufacturing & Soldering", "Robotics"],
        FooterDescription: "As the team's electrical architect, I attempt to integrate all desires functionalities of our robot into our control board. I design the main controls and power distribution all onto one board. Currently, our robot uses the Teensy 4.1 development board equipped with a ARM Cortex-M7 microprocessor. Throughout this experience, I have gained a deep understanding in power budgeting and embedded systems design with a strong interest to continue in the future. "

    }
  return (
    <div className="experience-tile-container">
        <div className="experience-tile">
            <ExperienceTile data={Robojackets} />
            <div className={`experience-footer`}>
                <div 
                    className="accordian_label" 
                    onClick={() => {
                        setIsCardActive([!isCardActive[0], false, false]);
                    }}>
                    <img className="expand-bar" src={Bar} alt="Down Arrow" width="100%"/>
                    More Info
                </div>
                <div className={ `experience-active-${isCardActive[0]}` }>
                    <div className="slideshow-container">
                        <Slideshow images={[Img15, Img12, Img13 , Img16, Img17, Img18, Img19, Img20]}/>
                    </div>
                    <div className="experience-footer-more-info">
                        As the team's electrical architect, I attempt to integrate all desires functionalities of our robot into our control board. 
                        I design the main controls and power distribution all onto one board. 
                        Currently, our robot uses the <span className="bold-reg-text">Teensy 4.1 development board equipped with a ARM Cortex-M7 microprocessor.</span> In addition to the Teensy 4.1, we utilize many other peripherals; consequently, my comprehension off data sheets has improved significantly.  
                        Throughout this experience, I have gained a deep understanding in power budgeting and embedded systems design with a strong interest to continue in the future. 
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
                        setIsCardActive([false, !isCardActive[1], false]);
                    }}>
                    <img className="expand-bar" src={Bar} alt="Down Arrow" width="100%"/>
                    More Info
                </div>
                <div className={ `experience-active-${isCardActive[1]}` }>
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
                        setIsCardActive([false, false, !isCardActive[2]]);
                    }}>
                    <img className="expand-bar" src={Bar} alt="Down Arrow" width="100%"/>
                    More Info
                </div>
                <div className={ `experience-active-${isCardActive[2]}-no-images` }>
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
