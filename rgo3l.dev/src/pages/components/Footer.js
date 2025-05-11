import React from 'react'
import Copyright from "../Images/copyright.svg"
export default function 
() {
  return (
    <div className="footer-container">
        <p>
        
            I use 
            <a className="footer-a" target="__blank"href="https://react.dev/"> React.js </a> 
            as this website's static front-end framework and A LOT of CSS to make it look undoubtedly pretty ¯\_(ツ)_/¯ Thank you for visiting.
        
        </p>
        <div className="footer-name-tm">
            <img src={Copyright} alt="cprght" className="copyright"/>
            <p>Rudra Goel 2025</p>
        </div>
    </div>
  )
}
