import React from 'react'
import './About.css'
import 'animate.css'
import LanguageList from './LanguageList/LanguageList'
import { useState } from 'react'
import FrameWork from './FrameWork/FrameWork'

const About = () => {

  const [currentComponent, setCurrentComponent] = useState("LanguageList")

  return (
    <div className='about-page'>
      <div className='text-container'>
        <h1 className='title-text'>
          <span>About Me</span>
        </h1>
        <h3 className='intro-text'>
          <span>I am a results driven Software Developer with a unique background that has prepared me to approach problem solving analytically,  </span>
        </h3> 
        <div className='graph-text'>
          <button onClick={() => setCurrentComponent("LanguageList")}>Languages</button>
          <button onClick={() => setCurrentComponent("FrameWork")}>Frameworks & Technologies</button>
          {
          currentComponent === 'LanguageList' ? (
            <LanguageList />
          ) : currentComponent === 'FrameWork' ? (
            <FrameWork />
          ) : <></> 
          }
        </div>
      </div>
      <div className='image-container'>
        <h1 className="fa-beat-fade">More to come...</h1>
      </div>
    </div>
  )
}

export default About
