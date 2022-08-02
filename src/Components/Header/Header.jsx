import React from 'react'
import HeroSection from '../HeroSection'
import NavBar from '../NavBar'
import './header.css'

const Header = () => {
  return (
    <header className='bg bg-[#004990]'>
        <NavBar />
        <HeroSection />
    </header>
  )
}

export default Header