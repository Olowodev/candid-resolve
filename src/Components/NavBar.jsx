import React from 'react'

const NavBar = () => {
  return (
    <nav>
        <div className='justify-between flex mx-24 py-8 items-center'>
            <div>

            </div>
            <div className='flex gap-24 text-white'>
                <p>Our Services</p>
                <p>Online Resolution</p>
                <p>Resources</p>
            </div>
            <div>
                <button className='bg-white rounded-xl text-[#004990] px-8 py-3'>Login</button>
            </div>
        </div>
    </nav>
  )
}

export default NavBar