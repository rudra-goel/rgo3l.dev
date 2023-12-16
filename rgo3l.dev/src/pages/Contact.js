import React, { useState } from 'react'
import Navbar from '../components/Navbar'

export default function Contact() {
  const [isComplete, setIsComplete] = useState(false)

  const handleSubmit = () => {
    console.log("invoked")
    const messageDetails = {
      Name: document.getElementById("name").value,
      Email: document.getElementById("email").value,
      MessageBody: document.getElementById("message").value,
    }

    console.log(messageDetails)
    
    setIsComplete(true)
  }

  if(!isComplete){
    return (
      <div>
          <Navbar />
          <h1> Want to Reach Out?</h1>
          <h3>(The form below directs all correspondence to my email inbox!)</h3>
          <div className="form-container">
            <input type="text" className="single-input" placeholder="Name" id="name"/>
            <input type="text" className="single-input" placeholder="Email" id="email"/>
            <textarea type="" className="multiline-input" placeholder="Let me know what's on your mind!" id="message"/>
            <button type="submit" onClick={() => handleSubmit()}>Submit</button>
          </div>
      </div>
    )
  } else {
      return (
        <div>
            <Navbar />
            <h1> Thanks for Reaching Out</h1>
            <h3>I'll reply as soon as I can</h3>
        </div>
      )

  }
}
