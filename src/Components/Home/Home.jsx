import React from 'react'
import './Home.css'
import lady from '../Asset/lady.png'
import star from '../Asset/star.png'

const Home = () => {
  return (
    <div>
        <div className="home" id='home'>
            <div className="header">
            <h1>I'm <span>Chloe Gates,</span><br/>Software Developer</h1>
        </div>
        <div className="home-container">
            <div className="left">
                <div className="upp">
                    {/* icon */}
                    <p>I am an exception full stack developer that builds and <br/> 
                        designs software for my clients <br/> 
                    </p>
                </div>
                <div className="down">
                    <h2>250+</h2>
                    <p>Clients served</p>
                </div>
            </div>
            <div className="middle">
                <div className="semi_shape"></div>
                <img src={lady} alt="" />
            </div>
            <div className="right">
                <img src={star} alt=""/>
                <h2 className="right_text">10 Years</h2>
                <h3>Experience</h3>
                <hr/>
            </div>
        </div>
        <div className="btns">
            <button><a href="#portfolio">Portfolio</a></button>
            <button>Hire Me</button>
        </div>
    </div>
    </div>
  )
}

export default Home