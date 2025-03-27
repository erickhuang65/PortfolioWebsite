import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faJs, faPython, faNode } from '@fortawesome/free-brands-svg-icons';
import './About.css';
import 'animate.css';
import { PacmanLoader } from 'react-spinners';
import LanguageList from './LanguageList/LanguageList';
import FrameWork from './FrameWork/FrameWork';

const About = () => {
  const [loading, setLoading] = useState(true);
  const [currentComponent, setCurrentComponent] = useState("LanguageList");
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const languages = [
    { icon: faJava, name: 'Java' },
    { icon: faJs, name: 'JavaScript' },
    { icon: faPython, name: 'Python' },
    { icon: faNode, name: 'Node.js' },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    const interval = setInterval(() => {
      setCurrentLanguage(prev => (prev + 1) % languages.length); // Rotate languages every 3 seconds
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [languages.length]);

  return (
    <div className="about-page">
      {loading ? (
        <PacmanLoader
          className="loader-container"
          loading={loading}
          color="yellow"
          size={20}
          speedMultiplier={1}
        />
      ) : (
        <div className="about-page">
          <div className="text-container">
            <h1 className="title-text">
              <span>About Me</span>
            </h1>
            <h3 className="intro-text">
              <span>
                I am a results-driven Software Developer with a distinctive background that has prepared me to work in dynamic environments, tackle challenges analytically, communicate with team members effectively, and technical skills to take on any challenges.
              </span>
            </h3>
            <div className="graph-text">
              <button onClick={() => setCurrentComponent("LanguageList")}>
                Languages
              </button>
              <button onClick={() => setCurrentComponent("FrameWork")}>
                Frameworks & Technologies
              </button>
              {currentComponent === 'LanguageList' ? (
                <LanguageList />
              ) : currentComponent === 'FrameWork' ? (
                <FrameWork />
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="image-container">
            <div className="languages-container">
              <div className="language">
                <FontAwesomeIcon 
                  icon={languages[currentLanguage].icon} 
                  size="6x" 
                  className="language-icon" 
                />
                <div>{languages[currentLanguage].name}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
