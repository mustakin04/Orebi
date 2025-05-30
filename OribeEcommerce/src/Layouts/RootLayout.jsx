import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Header from '../Component/Header/Header'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}

export default RootLayout