import React from 'react'
import './Contact.css'
import { FaEnvelope ,FaLocationDot, FaPhone} from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="contact" id='contact'>
        <div className="contact_header">
          <h2>Get In Touch</h2>
        </div>
        <div className="contact_info">
        <div className="left">
            <h2>Lets Talk</h2>
            <p>I'm available to discuss about new project, ideas and work or you need a helping hand in your ptoject. 
              Feel free to send me a message and lets discuss business.
            </p>
            <div className="contact_details">
              <div className="detail">
              <FaEnvelope />
                <p>chloegates@gmail.com</p>
              </div>
              <div className="detail">
              <FaPhone />
                <p>+234678900</p>
              </div>
              <div className="detail">
              <FaLocationDot />
                <p>LA, Nigeria</p>
              </div>
            </div>
        </div>
        <div className="right">
        <div className="contact_input">
          <div className="text">
            <input type="text" placeholder='Email' />
          </div>
          <div className="text">
            <input type="text" placeholder='Subject' />
          </div>
          <div className="message">
            <textarea name="Message"  cols="30" rows="10">Message</textarea>
          </div>
          <div className="btn">
            <button>Send Message</button>
          </div>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Contact