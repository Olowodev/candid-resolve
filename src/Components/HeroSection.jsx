import React from 'react'
import hero from '../Assets/hero.png'
import './hero.css'

const HeroSection = () => {
  return (
    <section className='py-8'>
        <div className='mx-12 flex justify-between items-center'>
            <div className='flex flex-col gap-10'>
                <div className='text-white max-w-3xl flex flex-col gap-5'>
                    <h1 className='text-8xl'>Resolve dispute from home</h1>
                    <h3 className='text-3xl'>Settle your dispute like a pro, we make dispute resolution seamles</h3>
                </div>
                <div>
                    <button>Get Started</button>
                    <button>Speak with our Team</button>
                </div>
            </div>
            <div className=''>
                <div className=''>
                    <img className='w-[100%]' src={hero} alt='hero' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection