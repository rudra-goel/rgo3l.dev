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
        Position: "Undergraduate Research Assistant",
        Date:"Fall 2023",
        Company:"Najafi Lab",
        Link:"https://www.najafilab.org/home",
        Location:"Atlanta, GA",
        Description:"I made custom circuits for mice stationed in LickOmeter rigs, designed and 3D printed parts to interface with lab instruments and aid researchers.  ",
        Skills:["Solidworks", "Cura Slicing", "3D Printing", "SCRUM Workflow", "MATLAB", "Python", "Circuit Analysis"],
        FooterDescription: "My time in this lab was mainly spent as a lab engineer working under Principal Investigator Dr. Farzaneh Najafi and Lab Tech Tim Stamm. I would often aid lab members in their research by designing and 3D printing peripheral components to lab instruments. Often, the parts my team members and I made were also interfaced with lab mice. The images showcase some examples of parts designed and in action. "
        
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
        Position: "RoboWrestling",
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
                        My time in this lab was mainly spent as a lab engineer working under Principle Investigator Dr. Farzaneh Najafi and Lab Tech Tim Stamm. 
                        I would often <span className="bold-reg-text">aid lab members in their research by designing and 3D printing peripheral components to lab instruments</span>. 
                        Often, the parts my team members and I made were also interfaced with lab mice. 
                        The images showcase some examples of parts designed and in action. 
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
