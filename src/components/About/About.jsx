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
          <span>I am a results driven Software Developer with a unique background that has prepared me to communicate with team members effectively, approach problems analytically, and actively take the initiative to support team members. I pride myself on being a quick learner and thrive in dynamic environments, where I can quickly adapt to changes, and contribute effectively.</span>
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
