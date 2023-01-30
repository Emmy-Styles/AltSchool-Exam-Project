import React from 'react'
import { Outlet } from 'react-router-dom'
// import Navbar from '../Components/Navbar/Navbar'
import Nav from '../Components/Navbar/Nav'

const Layout = () => {
  return (
    <div>
        <Nav />

        {<Outlet />}
    </div>
  )
}

export default Layout