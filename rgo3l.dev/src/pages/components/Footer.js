import React from 'react'
import Copyright from "../Images/copyright.svg"
export default function 
() {
  return (
    <div className="footer-container">
        <p>
        
            Coded purely in 
            <a  className="footer-a"> Visual Studio</a>, 
            this website uses 
            <a className="footer-a" target="__blank"href="https://react.dev/"> React.js </a> 
            as its static front-end framework and A LOT of CSS to make it look undoubtedly pretty ¯\_(ツ)_/¯ Thank you for visiting.
        
        </p>
        <div className="footer-name-tm">
            <img src={Copyright} alt="cprght" className="copyright"/>
            <p>Rudra Goel 2024</p>
        </div>
    </div>
  )
}
