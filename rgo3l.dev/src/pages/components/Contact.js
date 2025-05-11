import React, { useRef, useState } from 'react'
import ContactImage from "../Images/Contact-Image.svg"
import emailjs from '@emailjs/browser'

export default function () {
    const form = useRef();
    const [hasSubmit, setHasSubmit] = useState(false);
    
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_6kbeb25', 'template_svzw5r5', form.current, 'b5-XGMt4O8JUIysE6')
          .then((result) => {
              console.log(result.text);
              setHasSubmit(true);
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
                {
                    hasSubmit ? 
                    <>
                        <div className="submit-complete">
                            Your message has been sent. Thank you!
                        </div>
                    </>
                    :
                    <div className="input-group">
                        <input className="submit-btn" type="submit" value="Send" />
                    </div>
                }
            </form>
        </div>
        <div className='contact-title'>
            <div className="content-container">
                <div className="title-image">
                    <span className="contact-title-span">Reach Out To Me!</span>
                    <img src={ContactImage} className="contact-image" alt="image" />
                    
                </div>
                <div className="contact-subtext">
                    <p>All messages go straight to my personal inbox :-)</p>
                </div>
            </div>
        </div>
    </>
  )
}
