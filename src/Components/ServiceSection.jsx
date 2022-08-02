import React from 'react'
import { serviceCardInfo } from '../data'
import Card from './Card'

const ServiceSection = () => {
  return (
    <section className='my-24'>
        <div className='flex flex-col gap-16 mx-24'>
            <div className='self-center'>
                <h1 className='text-5xl font-bold after:right-0 text-[#004990] after:mx-auto after:content-[""] after:absolute after:-bottom-4 after:w-20 after:left-0 after:h-[4px] after:rounded-3xl after:bg-[#2e526b] relative '>Services</h1>
            </div>
            <div className='text-center'>
                <h3 className='text-3xl font-medium text-[#00499099]'>We provide insitutional alternative dispute resolution (ADR)</h3>
            </div>
            <div className='flex items-center justify-between'>
                {serviceCardInfo.map((cardInfo, index) => (
                    <Card {...cardInfo} />
                ))}
            </div>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold text-[#004990]'>Candid Resolve works with innovative and disruptive early-stage startups in Africa, providing startup advisory services related to seed raising, business plan/financial model review, cyber security advisory, due diligence, and deal support.</h1>
            </div>
        </div>
    </section>
  )
}

export default ServiceSection