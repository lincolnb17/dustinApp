import React from 'react'
import About from '../../components/about/About'
import Banner from '../../components/banner/Banner'
import Contact from '../../components/contact/Contact'
import Navbar from '../../components/navbar/Navbar'
import Services from '../../components/services/Services'

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <Contact></Contact>

    </div>
  
    
  )
}

export default Home