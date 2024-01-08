import React, { useState } from 'react'
import ExperienceTile from './ExperienceTile'
import Slidehow from "./Slideshow.js"
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

export default function Experience() {

    const [isCardActive, setIsCardActive] = useState([false, false, false])


    const NajafiLab ={
        Position: "Undergraduate Research Assistant",
        Date:"Fall 2023",
        Company:"Najafi Lab",
        Link:"https://www.najafilab.org/home",
        Location:"Atlanta, GA",
        Description:"I made custom circuits for mice stationed in LickOmeter rigs, designed and 3D printed parts to interface with lab instruments and aid researchers.  ",
        Skills:["Solidworks", "Cura Slicing", "3D Printing", "SCRUM Workflow", "MATLAB", "Python", "Circuit Analysis"],

    }
    const DART ={
        Position: "Data Aggregation/Reporting/Testing (DART) Intern",
        Date:"Summer 2022",
        Company:"YPrime",
        Link:"https://yprime.com",
        Location:"DeVault, PA",
        Description:"",
        Skills:[],

    }
    const Robojackets ={
        Position: "Electrical SubTeam Lead",
        Date:"Fall 2023 - Spring 2024",
        Company:"GT Robojackets",
        Link:"https://robojackets.org/",
        Location:"Georgia Tech - Atlanta, GA",
        Description:"",
        Skills:[],

    }
  return (
    <div className="experience-tile-container">
        <div className="experience-tile">
            <ExperienceTile data={NajafiLab} />
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
                        <Slidehow images={[Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11]}/>
                    </div>
                    <div className="experience-footer-more-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Sit amet cursus sit amet dictum sit amet. 
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
                        setIsCardActive([false, !isCardActive[1], false]);
                    }}>
                    <img className="expand-bar" src={Bar} alt="Down Arrow" width="100%"/>
                    More Info
                </div>
                <div className={ `experience-active-${isCardActive[1]}` }>
                    <div className="slideshow-container">
                        <Slidehow images={[]}/>
                    </div>
                    <div className="experience-footer-more-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Sit amet cursus sit amet dictum sit amet. 
                    </div>                </div>
            </div>
            
        </div>
        <div className="experience-tile">
            <ExperienceTile data={Robojackets} />
            <div className={`experience-footer`}>
                <div 
                    className="accordian_label" 
                    onClick={() => {
                        setIsCardActive([false, false, !isCardActive[2]]);
                    }}>
                    <img className="expand-bar" src={Bar} alt="Down Arrow" width="100%"/>
                    More Info
                </div>
                <div className={ `experience-active-${isCardActive[2]}` }>
                    <div className="slideshow-container">
                        <Slidehow images={[]}/>
                    </div>
                    <div className="experience-footer-more-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Sit amet cursus sit amet dictum sit amet. 
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
