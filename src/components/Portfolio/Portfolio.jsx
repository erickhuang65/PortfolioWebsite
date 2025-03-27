import React from 'react'
import './Portfolio.css'
import { useEffect, useState } from 'react'

const Portfolio = () => {
    const [loaderImg, setLoaderImg] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoaderImg(false);
        }, 3000);
      }, [])

  return (
    <div>
    </div>
  )
}

export default Portfolio
