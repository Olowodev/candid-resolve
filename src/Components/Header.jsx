import React from 'react'
import HeroSection from './HeroSection'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='bg-[#004990]'>
        <NavBar />
        <HeroSection />
    </header>
  )
}

export default Header