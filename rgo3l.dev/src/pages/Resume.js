import React from 'react'
import Navbar from '../components/Navbar'

export default function Resume() {
  return (
    <div>
        <Navbar />
        <div className="resumeContainer">
          <h1 className="resume-header">Check Out My Resume</h1>
          <object
            type="application/pdf"
            width="600"
            height="700"
            data="/End of Semester Report.pdf"
           >

            
          </object>
        </div>
    </div>
  )
}
