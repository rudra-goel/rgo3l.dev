import React from 'react'

//svg image
import DownArrow from "../Down Arrow.svg"

export default function Experience() {
  return (
    <div className="experience">
        <div className="experience-header">
            here is some of my experience
        </div>
        <div className="one-experience">
            <div className="experience-title">
                <div className="position">
                    Undergraduate Research Assistant
                </div>
                <div className="subhead-information">
                    Fall 2023 | Najafi Lab | Georgia Tech - Atlanta, GA
                </div>
            </div>
            <div className="breif-experience-description">
                Laoreet non curabitur gravida arcu ac. Fermentum et sollicitudin ac orci. Risus quis varius quam quisque id diam vel. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Vivamus arcu felis bibendum ut tristique et. Ut sem viverra aliquet eget sit amet. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus semper eget duis at tellus at urna. Magna sit amet purus gravida. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Amet massa vitae tortor condimentum lacinia quis vel eros.
            </div>
            <div className="skills-developed">
                SolidWorks
                MATLAB
                Computer-Aided Manufacturing (CAM)
            </div>
            <div className="experience-footer">
            <a href="https://www.najafilab.org/home" target="__blank">Visit the Official Lab Website</a>
                <img className="down-arrow" src={DownArrow} alt="Down Arrow"/>
            </div>
        </div>
    </div>
  )
}
