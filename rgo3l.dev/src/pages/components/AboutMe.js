import React from 'react'

//images
import Pfp from "../Profile Picture.jpg"
import Drone from "../Drone.jpg"
import Beach from "../Beach.jpg"
import Graduation from "../Graduation.jpg"

//svg image
import DownArrow from "../Down Arrow.svg"


export default function AboutMe({ scrollDown }) {
  return (
    <div className='about-me'>
      <div className="bio-with-pfp">
        <div className="full-bio">
            <div className="bio">
              Laoreet non curabitur gravida arcu ac. Fermentum et sollicitudin ac orci. Risus quis varius quam quisque id diam vel. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Vivamus arcu felis bibendum ut tristique et. Ut sem viverra aliquet eget sit amet. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus semper eget duis at tellus at urna. Magna sit amet purus gravida. 
            </div>
            <div className="bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In fermentum posuere urna nec tincidunt. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. 
            </div>
        </div>
        <div className="pfp">
            <img className="pfp"src={Pfp} alt="Profile Picture" />
        </div>
      </div>
        <div className="other-pics">
            <img className="opfp"src={Graduation} alt="Profile Picture" />

            <div className="middle-about-me-item">
              <img className="opfp"src={Beach} alt="Profile Picture" />
              <a onClick={() => {scrollDown("experience")}}>
                <img className="down-arrow" src={DownArrow} alt="Down Arrow"/>
              </a>
            </div>
            
            <img className="opfp"src={Drone} alt="Profile Picture" />
        </div>
        
    </div>
  )
}
