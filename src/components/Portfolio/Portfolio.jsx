import React from 'react'
import './Portfolio.css'

const Portfolio = () => {

  const portfolioRender = (portfolioData) => { 
    return (
        <div className = "images-container">
            {
                portfolioData.map((port, idx) => {
                    return (
                        <div key={idx} className="image-box">
                            <img src={port.cover} alt="portfolio" className = "portfolio-image"/>
                            <div className="content">
                                <p className="title">{port.title}</p>
                                <h4 className="description">{port.description}</h4>
                                <button className="btn" onClick={() => window.open(port.url)}>View</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

  return (
    <div className='portfolio-page'>

    </div>
  )
}

export default Portfolio
