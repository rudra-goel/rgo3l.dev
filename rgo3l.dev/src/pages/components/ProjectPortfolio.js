import React, { useState } from 'react'

import DownArrow from "../Images/Down Arrow.svg"
import Slideshow from './Slideshow'

import Beach from "../Images/Beach.jpg"
import Graduation from "../Images/Graduation.jpg"
import Drone from "../Images/Drone.jpg"
export default function ProjectPortfolio() {
  const [isClicked1, setIsClicked1] = useState(true)
  const [isClicked2, setIsClicked2] = useState(false)
  const [isClicked3, setIsClicked3] = useState(false)
  const [isClicked4, setIsClicked4] = useState(false)




  return (
    <div className="project-portfolio-container">
      <div className="left-stationed-tile">
        <div className="lst-left-border" onClick={() => {setIsClicked1(!isClicked1)}}>
          Senior Capstone
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
                Ravana Custom Drone Technologies
              </div>

              <div className="project-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Sit amet cursus sit amet dictum sit amet. 
                  <ul className="project-description-list">
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                  </ul>
                  <div className="skills-developed">
                    <span className="skill">Gooning</span>
                  </div>
              </div>
              <div className="further-proj-info-link">
                <a href="#" target="__blank" className="further-proj-info-link">Checkout More!</a>
              </div>
            </div>
            
            <div className="project-slideshow">
              <Slideshow images={[Beach, Graduation, Drone]} />
            </div>
          </div>

        </div>
        
      </div>

      <div className="left-stationed-tile">
        <div className="lst-left-border" onClick={() => {setIsClicked2(!isClicked2)}}>
          rgo3l.dev
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
                rgo3l.dev
              </div>

              <div className="project-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Sit amet cursus sit amet dictum sit amet. 
                  <ul className="project-description-list">
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                  </ul>
                  <div className="skills-developed">
                    <span className="skill">Gooning</span>
                  </div>
              </div>
              <div className="further-proj-info-link">
                <a href="#" target="__blank" className="further-proj-info-link">Checkout More!</a>
              </div>
            </div>
            
            <div className="project-slideshow">
              <Slideshow images={[Beach, Graduation, Drone]} />
            </div>
          </div>

        </div>
        
      </div>

      <div className="left-stationed-tile">
        <div className="lst-left-border" onClick={() => {setIsClicked3(!isClicked3)}}>
          Rudamentary Tuner
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
                Rudamentary Tuner
              </div>

              <div className="project-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Sit amet cursus sit amet dictum sit amet. 
                  <ul className="project-description-list">
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                  </ul>
                  <div className="skills-developed">
                    <span className="skill">Gooning</span>
                  </div>
              </div>
              <div className="further-proj-info-link">
                <a href="#" target="__blank" className="further-proj-info-link">Checkout More!</a>
              </div>
            </div>
            
            <div className="project-slideshow">
              <Slideshow images={[Beach, Graduation, Drone]} />
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Sit amet cursus sit amet dictum sit amet. 
                  <ul className="project-description-list">
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                    <li>Item</li>
                  </ul>
                  <div className="skills-developed">
                    <span className="skill">Gooning</span>
                  </div>
              </div>
              <div className="further-proj-info-link">
                <a href="#" target="__blank" className="further-proj-info-link">Checkout More!</a>
              </div>
            </div>
            
            <div className="project-slideshow">
              <Slideshow images={[Beach, Graduation, Drone]} />
            </div>
          </div>
        </div>
        
      </div>
     
    </div>
  )
}
