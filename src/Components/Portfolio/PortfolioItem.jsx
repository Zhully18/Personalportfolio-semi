import React, { useState } from 'react'
import Close from '../Asset/close.svg'

const PortfolioItem = ({img, title, details}) => {
    const [modal, setModal] =useState(false);

    const toggleModal =() =>{
        setModal(!modal);
    };

  return (
    <div className="portfolio_item">
        <img src={img} alt="" className="portfolio_img" />
      {/* The onclick toggleModal makes the details stored appear */}
    <div className="portfolio_hover" onClick={toggleModal}>
        <h3 className="portfolio_title">{title}</h3>
    </div>

        {modal && (
             <div className="portfolio_detail">
             <div className="portfolio_detail-content">
                 <img src={Close} alt="" className="detail_close" onClick={toggleModal}/>
                 
                 <h3 className="portfolio_detail_title">{title}</h3>
                 
                 <ul className="portfolio_list grid">
                     {details.map(({icon, title, desc}, index) =>{
                         return(
                             <li className="detail_item" key={index}>
                                 <span className="detail_icon">{icon}</span>
                                 
                                 <div>
                                     <span className="detail_title">{title}</span>
                                     <span className="detail_text">{desc}</span>
                                 </div>
                             </li>
                         )
                     })}
                 </ul>
     
                 <img src={img} alt="" className="detail_img" />
             </div>
         </div>
        )}
    </div>
  )
}

export default PortfolioItem