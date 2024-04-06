import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className="nav">
        <div className="navigation">
            <div className="nav_header">
                <h2 className="nav_logo">Chloe <span>Gates</span></h2>
            </div>
            <div className="nav_links">
                <ul>
                    <li>
                        <a href="#home">HOME</a></li>
                    <li>
                        <a href="#services">SERVICES</a></li>
                    <li>
                        <a href="#resume">RESUME</a></li>
                    <li>
                        <a href="#portfolio">PORTFOLIO</a></li>
                </ul>
            </div>
            <div className="btn">
                <button>Hire Me</button>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar