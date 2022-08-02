import React from 'react'

const Card = ({icon, title, body}) => {
  return (
    <div className='w-80 h-[350px] border hover:shadow-xl hover:border-0 border-[#dce2ee] rounded-3xl'>
        <div className='flex flex-col items-center gap-6 p-4'>
            <div>
                <img src={icon} alt={icon} />
            </div>
            <h1 className='font-bold text-xl text-center text-[#2e526b]'>{title}</h1>
            <p className='text-center text-[#2e526b]'>{body}</p>
        </div>
    </div>
  )
}

export default Card