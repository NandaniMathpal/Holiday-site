import React from 'react'
import MainImg from './MainImg/MainImg'
import Services from './Services/Services'
import Cards from './Card/Card'
import Popular from './Popular/Popular'
import Gallery from './Gallery/Gallery'
import Footer from './Footer/Footer'
import Inter from './Popular/Inter'
import Feature from './Feature/Feature'
import Hotel from './Hotel/Hotel'

const Home = () => {
  return (
    <div>
      <MainImg/>
      <Services/>
      <Cards/>
      <Popular/>
      <Inter/>
      <Feature/>
      <Gallery/>
      <Hotel/>
    </div>
  )
}

export default Home
