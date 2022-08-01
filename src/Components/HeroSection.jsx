import React from 'react'
import hero from '../Assets/hero.png'

const HeroSection = () => {
  return (
    <section>
        <div className='mx-24 flex justify-between items-center'>
            <div>
                <div>
                    <h1>Resolve dispute from home</h1>
                    <h3>Settle your dispute like a pro, we make dispute resolution seamles</h3>
                </div>
                <div>
                    <button>Get Started</button>
                    <button>Speak with our Team</button>
                </div>
            </div>
            <div>
                <div className=''>
                    <img className='w-[100%] h-[500px]' src={hero} alt='hero' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection