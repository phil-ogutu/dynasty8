import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import FeaturedProperties from '../components/FeaturedProperties'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = ({properties}) => {

  return (
    <div>
        <Header />
        <FeaturedProperties properties={properties}/>
        <Contact />
        <Footer />
    </div>
  )
}

export default Home