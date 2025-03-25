import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Cardd from '../Cardd/Cardd'
import Music from '../music/Music'

function Layout() {
  return (
    <div>
      <Music/>
      <Cardd/>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout
