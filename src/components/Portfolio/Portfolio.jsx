import React from 'react'
import './Portfolio.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners';

const Portfolio = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

//   const portfolioRender = (portfolioData) => { 
//     return (
//         <div className = "images-container">
//             {
//                 portfolioData.map((port, idx) => {
//                     return (
//                         <div key={idx} className="image-box">
//                             <img src={port.cover} alt="portfolio" className = "portfolio-image"/>
//                             <div className="content">
//                                 <p className="title">{port.title}</p>
//                                 <h4 className="description">{port.description}</h4>
//                                 <button className="btn" onClick={() => window.open(port.url)}>View</button>
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//         )
//     }

  return (
    <div className='portfolio-page'>
        {
            loading ? (
                <PacmanLoader
                className='loader-container'
                loading={loading}
                color='yellow'
                size={20}
                speedMultiplier={1}
                />
            ) : (
                <div className='portfolio-page'>
                    <h1>Coming soon....</h1>
                </div>
            )
        }
    </div>
  );
}

export default Portfolio
