import React from 'react'
import hero from '../Assets/hero.png'
import {FaTeamspeak} from 'react-icons/fa'

const HeroSection = () => {
  return (
    <section className='py-8'>
        <div className='mx-12 flex justify-between items-center'>
            <div className='flex flex-col gap-16'>
                <div className='text-white max-w-3xl flex flex-col gap-9'>
                    <h1 className='text-8xl font-medium'>Resolve dispute from home</h1>
                    <h3 className='text-3xl'>Settle your dispute like a pro, we make dispute resolution seamless</h3>
                </div>
                <div className='flex items-center gap-12'>
                    <button className='hover:bg-transparent hover:text-white border border-white bg-white font-medium text-lg text-[#004990] rounded-2xl px-8 py-5'>Get Started</button>
                    <button className='hover:text-[#004990] text-white hover:bg-white flex items-center gap-3 border border-white px-8 py-5 rounded-2xl'>
                        <p className=' font-medium text-lg'>Speak with our Team</p>
                        <FaTeamspeak size={30} />
                    </button>
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