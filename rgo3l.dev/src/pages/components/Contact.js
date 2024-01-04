import React, { useRef } from 'react'
import ContactImage from "../Contact-Image.svg"
import emailjs from '@emailjs/browser'

export default function () {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_6kbeb25', 'template_svzw5r5', form.current, 'b5-XGMt4O8JUIysE6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <>
        <div className="contact-form">
            <form ref={form} className="form-container" onSubmit={sendEmail}>
                <div className="input-group">
                    <input type="text" placeholder="Your Name" name="from_name"/>
                </div>
                <div className="input-group">
                    <input type="email" placeholder="Your Email" name="from_email"/>
                </div>
                <div className="input-group">
                    <textarea type="email" placeholder="Message" rows="7" name="message"/>
                </div>
                <div className="input-group">
                    <input className="submit-btn" type="submit" value="Send" />
                </div>
            </form>
        </div>
        <div className='contact-title'>
            <div className="content-container">
                <div className="title-image">
                    <span className="contact-title-span">Reach Out To Me!</span>
                    <img src={ContactImage} className="contact-image" alt="image" />
                    
                </div>
                <div className="contact-subtext">
                    <p>All messages will be forwarded to my email inbox.</p>
                    <p>I'll try my best to reply as soon as possible!</p>
                </div>
            </div>
        </div>
    </>
  )
}
