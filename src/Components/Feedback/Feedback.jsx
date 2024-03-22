import React from 'react'
import './Feedback.css'
import { feedback } from '../Asset/data'

const Feedback = () => {
  return (
    <div className="feedback">
        <h5>Clients Reviews</h5>
        <h3>Customers <span>Feedback</span></h3>
        <div className="customers">
          {feedback.map(({image, name, company, comment}, index)=> {
            return(
            <div className="item">
                <div className="user">
                    <img src={image} alt="" />
                    <div className="info">
                      <h5>{name}</h5>
                      <p>{company}</p>
                    </div>
                </div>
                <div className="ratings"></div>
                <p>{comment}</p>
            </div>
            )
          })}
        </div>
    </div>
  )
}

export default Feedback