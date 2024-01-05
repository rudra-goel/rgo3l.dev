import React from 'react'
import ExperienceTile from './ExperienceTile'
//svg image
import Bar from "../Images/Horizontal Bar.svg"
import TopRight from "../Images/Top-Right.svg"

export default function Experience() {
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
  return (
    <div className="experience-tile-container">
        <div className="experience-tile">
            <ExperienceTile data={NajafiLab} />
            <div className="experience-footer">
                <div>
                    <input type="checkbox" name="experience_accordian" id="accordian_1" className="accordian_input"></input>
                    <label for="accordian_1" >
                        <div className="accordian_label">
                            <img className="expand-bar" for="accordian_1" src={Bar} alt="Down Arrow" width="100%"/>
                            More Info
                        </div>
                    </label>
                    <div className="experience-more-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet aliquam id diam maecenas ultricies mi eget. Lacus vestibulum sed arcu non odio euismod. Egestas integer eget aliquet nibh praesent tristique. Aliquam purus sit amet luctus venenatis. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Elementum tempus egestas sed sed risus pretium. Mauris ultrices eros in cursus turpis massa tincidunt. Sit amet est placerat in egestas erat. Pellentesque sit amet porttitor eget dolor morbi non. Ultrices vitae auctor eu augue.
                    </div>
                </div>
            </div>

        </div>
        <div className="experience-tile">
            <ExperienceTile data={DART} />
            <div className="experience-footer">
                <div>
                    <input type="checkbox" name="experience_accordian" id="accordian_2" className="accordian_input"></input>
                    <label for="accordian_2" >
                        <div className="accordian_label">
                            <img className="expand-bar" for="accordian_1" src={Bar} alt="Down Arrow" width="100%"/>
                            More Info
                        </div>
                    </label>
                    <div className="experience-more-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet aliquam id diam maecenas ultricies mi eget. Lacus vestibulum sed arcu non odio euismod. Egestas integer eget aliquet nibh praesent tristique. Aliquam purus sit amet luctus venenatis. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Elementum tempus egestas sed sed risus pretium. Mauris ultrices eros in cursus turpis massa tincidunt. Sit amet est placerat in egestas erat. Pellentesque sit amet porttitor eget dolor morbi non. Ultrices vitae auctor eu augue.
                    </div>
                </div>
            </div>
        </div>
        <div className="experience-tile">
            <ExperienceTile data={DART} />
            <div className="experience-footer">
                <div>
                    <input type="checkbox" name="experience_accordian" id="accordian_2" className="accordian_input"></input>
                    <label for="accordian_2" >
                        <div className="accordian_label">
                            <img className="expand-bar" for="accordian_1" src={Bar} alt="Down Arrow" width="100%"/>
                            More Info
                        </div>
                    </label>
                    <div className="experience-more-info">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet aliquam id diam maecenas ultricies mi eget. Lacus vestibulum sed arcu non odio euismod. Egestas integer eget aliquet nibh praesent tristique. Aliquam purus sit amet luctus venenatis. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Elementum tempus egestas sed sed risus pretium. Mauris ultrices eros in cursus turpis massa tincidunt. Sit amet est placerat in egestas erat. Pellentesque sit amet porttitor eget dolor morbi non. Ultrices vitae auctor eu augue.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
