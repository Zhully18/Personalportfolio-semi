import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact_header">
          <h2>Get In Touch</h2>
        </div>
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
    </>
  )
}

export default Contact