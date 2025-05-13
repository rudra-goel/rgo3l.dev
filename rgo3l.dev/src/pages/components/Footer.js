import React from 'react'
import Copyright from "../Images/copyright.svg"
export default function 
() {
  return (
    <div className="footer-container">
        <p>
        
            I used
            <a className="footer-a" target="__blank"href="https://react.dev/"> React.js </a> 
            to make this website ¯\_(ツ)_/¯ Thank you for visiting.
        
        </p>
        <div className="footer-name-tm">
            <img src={Copyright} alt="cprght" className="copyright"/>
            <p>RG 2025</p>
        </div>
    </div>
  )
}
