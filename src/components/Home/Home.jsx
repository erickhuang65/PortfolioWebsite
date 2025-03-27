import React, { useEffect, useState } from 'react';
import './Home.css';
import 'animate.css';
import { useNavigate } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  return (
    <div className="home-page">
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
        <div className="home-page">
          <div>
            <h1 className="text">
              <span className="animate__animated animate__bounce">H</span>
              <span className="animate__animated animate__bounce">i</span>
              <br />
              <div className="logo">
                <span>I'm</span>
                <img
                  className="animate__animated animate__bounce"
                  src="/logo.png"
                  alt="text-logo"
                />
                <span>rick, </span>
              </div>
              <br />
              <span>Software Developer</span>
            </h1>
            <button onClick={() => navigate('/contact/dev')}>Contact Me</button>
          </div>
          <div className="logo-container">
            <img className="fa-beat-fade" src="/logo.png" alt="logo" />
          </div>
      </div>
      )
    }
    </div>
  );
};

export default Home;
