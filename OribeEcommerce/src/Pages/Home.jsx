import React from 'react'
import Banner from '../Component/Banner/Banner'
import AdditonalInfo from '../Component/AdditonalInfo/AdditonalInfo'
import Advertise from '../Component/Advertise/Advertise'
import NewArrivals from '../Component/NewArrivals/NewArrivals'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <AdditonalInfo></AdditonalInfo>
        <Advertise></Advertise>
        <NewArrivals tittle="New Arrivals"></NewArrivals>
        
    </div>
  )
}

export default Home