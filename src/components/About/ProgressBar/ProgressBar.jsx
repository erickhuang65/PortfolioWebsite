import { width } from '@fortawesome/free-solid-svg-icons/fa0'
import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({progress, className}) => {
    const progressBarWidth = {
        width: `${progress}%`,
    };

  return (
    <div className={`progress-bar ${className}`}>
        <div className='progress' style={progressBarWidth}></div>
    </div>
  )
}

export default ProgressBar
