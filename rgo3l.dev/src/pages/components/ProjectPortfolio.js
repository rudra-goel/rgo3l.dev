import React, { useState } from 'react'

import DownArrow from "../Images/Down Arrow.svg"

export default function ProjectPortfolio() {
  const [isClicked1, setIsClicked1] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)
  const [isClicked3, setIsClicked3] = useState(false)


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
          <div className="project-content-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Sit amet cursus sit amet dictum sit amet. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Cursus risus at ultrices mi. Diam donec adipiscing tristique risus. In eu mi bibendum neque egestas congue quisque egestas. Massa tincidunt nunc pulvinar sapien. In mollis nunc sed id semper risus in. Placerat vestibulum lectus mauris ultrices eros in. Et ligula ullamcorper malesuada proin libero nunc. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Netus et malesuada fames ac. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Enim sit amet venenatis urna cursus eget nunc scelerisque. Odio euismod lacinia at quis risus sed vulputate odio. Eu facilisis sed odio morbi quis commodo.
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
          <div className="project-content-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Sit amet cursus sit amet dictum sit amet. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Cursus risus at ultrices mi. Diam donec adipiscing tristique risus. In eu mi bibendum neque egestas congue quisque egestas. Massa tincidunt nunc pulvinar sapien. In mollis nunc sed id semper risus in. Placerat vestibulum lectus mauris ultrices eros in. Et ligula ullamcorper malesuada proin libero nunc. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Netus et malesuada fames ac. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Enim sit amet venenatis urna cursus eget nunc scelerisque. Odio euismod lacinia at quis risus sed vulputate odio. Eu facilisis sed odio morbi quis commodo.
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
          <div className="project-content-container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Sit amet cursus sit amet dictum sit amet. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Cursus risus at ultrices mi. Diam donec adipiscing tristique risus. In eu mi bibendum neque egestas congue quisque egestas. Massa tincidunt nunc pulvinar sapien. In mollis nunc sed id semper risus in. Placerat vestibulum lectus mauris ultrices eros in. Et ligula ullamcorper malesuada proin libero nunc. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Netus et malesuada fames ac. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Enim sit amet venenatis urna cursus eget nunc scelerisque. Odio euismod lacinia at quis risus sed vulputate odio. Eu facilisis sed odio morbi quis commodo.
          </div>
        </div>
        
      </div>
     
    </div>
  )
}
