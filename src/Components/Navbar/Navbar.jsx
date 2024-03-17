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
                    <li>SHOP</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>BLOG</li>
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