import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <div className="footer">
            <div className="footer_top">
                <h2>Let's Connect</h2>
                <button>Hire Me</button>
            </div>
            <hr />
            <div className="footer_buttom">
                <div className="desc">
                    <h3>Chloe <span>Gates</span> </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incidicunt ut labore,
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incidicunt ut labore
                    </p>
                </div>
                <div className="nav_link">
                    <h3>Navigation</h3>
                    <ul className="links">
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Services</li>
                        <li>Resume</li>
                        <li>Portfolio</li>
                    </ul>
                </div>
                <div className="contact_link">
                    <h3>Contact</h3>
                    <ul className="links">
                        <li>+40 0986 000</li>
                        <li>www.example.com</li>
                        <li>chloegates@gmail.com</li>
                    </ul>
                </div>
                <div className="input">
                    <h3>Subscribe to my newsletter</h3>
                    <div className="input_field">
                        <input type="text" name="" id=""placeholder='Enter email' />
                        <button>Enter</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="copy">
                <div className="copy_left">
                    <p>Copyright 2024 <span>Chloe.</span> All Rights Reserved</p>
                </div>
                <div className="copy_right">
                    <p>Terms & Conditions |</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer