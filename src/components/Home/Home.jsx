import React from 'react'
import './Home.css'
import 'animate.css';
import { useNavigate } from 'react-router-dom'


const Home = () => {
  
  const navigate = useNavigate();

  return ( 
    <div className='home-page'>
      <div> 
        <h1 className='text'>
          <span className='animate__animated animate__bounce'>H</span>
          <span className='animate__animated animate__bounce'>i</span>
          <br />
          <div className='logo'>
            <span>I'm</span>
            <img className='animate__animated animate__bounce' src="./src/assets/logo.png" alt="text-logo" />
            <span>rick, </span>
          </div>
          <br />
          <span>Software Developer</span>
        </h1>
        <button onClick={() => navigate('/contact/dev')}>Contact Me</button>
      </div>
      <div className="logo-container">
        <img className="fa-beat-fade" src="./src/assets/logo.png" alt="logo" />
      </div>
    </div>
  )
}

export default Home
