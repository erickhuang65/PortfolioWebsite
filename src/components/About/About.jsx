import React from 'react'
import './About.css'
import 'animate.css' 
import LanguageList from './LanguageList/LanguageList'
import { useState, useEffect } from 'react'
import FrameWork from './FrameWork/FrameWork'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const [loaderImg, setLoaderImg] = useState(true);
  const navigate = useNavigate();
  const [currentComponent, setCurrentComponent] = useState("LanguageList");

  useEffect(() => {
    setTimeout(() => {
      setLoaderImg(false);
    }, 3000); 
  }, []);

  return (
    <>
    {
      loaderImg ? (
        <img className='loader-img' src="/loader.gif" alt="" />
      ) : (
      <div className='about-page'>
        <div className='text-container'>
          <h1 className='title-text'>
            <span>About Me</span>
          </h1>
          <h3 className='intro-text'>
            <span>I am a results driven Software Developer with a unique background that has prepared me to communicate with team members effectively, approach problems analytically, and actively take the initiative to support team members.</span>
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
    </>
  );
}

export default About
