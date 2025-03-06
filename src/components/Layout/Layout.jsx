import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import './Layout.css'

const Layout = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="page">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
