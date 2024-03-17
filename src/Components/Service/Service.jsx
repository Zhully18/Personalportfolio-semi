import React from 'react'
import './Service.css'
import lady from '../Asset/lady.png'
import { service } from '../Asset/data'

const Service = () => {
  return (
    <div>
        <div className="services">
            <div className="services_header">
            <h3 className="services_title">My <span>Services</span></h3>
            <hr/>
        </div>

        <div class="service_container">
            <div class="left_service">
                <img src={lady} alt=""/>
                <div class="circle_shape"></div>
            </div>
            <div class="right_service">
            {service.map(({head, text}, index) =>{
                         return(
                             <div className="service">
                                <div className="service_header">
                                    <h3 className="servive_header">{head}</h3>
                                </div>
                                <div class="service_body">
                                    <p class="service_text">{text}</p>
                                </div>
                             </div>
                         )
                     })}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Service