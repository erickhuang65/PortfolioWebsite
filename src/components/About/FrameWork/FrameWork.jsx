import React from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import './FrameWork.css'

const FrameWork = () => {

    const list = [
        {name: "SPRING BOOT", progress: 25, className: "spring-class", years: 1},
        {name: "FLASK", progress: 25, className: "flask-class", years: 1},
        {name: "NODEJS", progress: 50, className: "node-class", years: 2},
        {name: "REACTJS", progress: 25, className: "react-class", years: 1}
    ]

  return (
    <div className='framework-page'>
        {list.map((item, index) => (
            <ul className='framework-graph' key={index}>
                <div>{item.name}: {item.years} year(s)</div>
                <ProgressBar progress={item.progress} className={item.className}/>
            </ul>
        )
        )}
    </div>
  )
}

export default FrameWork
