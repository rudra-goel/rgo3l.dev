import React from 'react'
import Pfp from "../Profile Picture.jpg"
import Drone from "../Drone.jpg"
import Beach from "../Beach.jpg"
import Graduation from "../Graduation.jpg"

export default function AboutMe() {
  return (
    <div className='about-me'>
      <div className="bio-with-pfp">
        <div className="full-bio">
            <div className="bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In fermentum posuere urna nec tincidunt. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Euismod in pellentesque massa placerat duis ultricies lacus. Suspendisse potenti nullam ac tortor vitae. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Vitae congue eu consequat ac felis donec et. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Tincidunt id aliquet risus feugiat in ante metus dictum. Viverra tellus in hac habitasse platea dictumst vestibulum. Amet dictum sit amet justo. Elit at imperdiet dui accumsan sit. Nam aliquam sem et tortor consequat id porta nibh. Purus semper eget duis at tellus at urna condimentum. Dolor morbi non arcu risus quis. Lacus vestibulum sed arcu non odio euismod lacinia. Urna et pharetra pharetra massa. Purus viverra accumsan in nisl.
            </div>
            <div className="bio">
            Laoreet non curabitur gravida arcu ac. Fermentum et sollicitudin ac orci. Risus quis varius quam quisque id diam vel. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Vivamus arcu felis bibendum ut tristique et. Ut sem viverra aliquet eget sit amet. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus semper eget duis at tellus at urna. Magna sit amet purus gravida. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Amet massa vitae tortor condimentum lacinia quis vel eros.
            </div>
        </div>
        <div className="pfp">
            <img className="pfp"src={Pfp} alt="Profile Picture" />
        </div>
      </div>
        <div className="other-pics">
            <img className="opfp"src={Graduation} alt="Profile Picture" />
            <img className="opfp"src={Beach} alt="Profile Picture" />
            <img className="opfp"src={Drone} alt="Profile Picture" />
        </div>
        
    </div>
  )
}
