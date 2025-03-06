import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faEnvelope, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='navbar'>
        <Link to={"/"}>
            <img src="/logo.png" alt="logo" className="nav-logo" />
        </Link>
        <nav className='navbar-list'>
            <Link to={"/"}>
              <FontAwesomeIcon icon={faHouse} />
            </Link>
            <Link to={"/about/dev"}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link to={"/portfolio"}>
              <FontAwesomeIcon icon={faFolderOpen} />
            </Link>
            <Link to={"/contact/dev"}>
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
        </nav>
    </div>
  )
}

export default Sidebar
