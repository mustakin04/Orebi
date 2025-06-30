import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Header from '../Component/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../Component/Footer/Footer'

const RootLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default RootLayout