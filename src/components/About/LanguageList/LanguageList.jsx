import React from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import './LanguageList.css'

const LanguageList = () => {
    // this component handles all the tech languages that are being passed into ProgressBar

    const list = [
        {name: "PYTHON", progress: 100, className: "python-class", years: 4},
        {name: "JAVASCRIPT", progress: 50, className: "js-class", years: 2},
        {name: "JAVA", progress: 25, className: "java-class", years: 1},
        {name: "SQL", progress: 100, className: "sql-class", years: 5},
    ]

  return (
    <div className='language-page'>
        {/* <h2 className='language-graph'>Languages </h2>  */}
        {list.map((item, index) => (
            <ul className='language-graph' key={index}>
                <div>{item.name}: {item.years} year(s)</div>
                <ProgressBar progress={item.progress} className={item.className}/>
            </ul>
        )
        )}
    </div>
  )
}

export default LanguageList
