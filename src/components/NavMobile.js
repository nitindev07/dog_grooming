import React from 'react'

const NavMobile = () => {
  return (
    <div className=''>
      <div className='mt-12 text-blue ' id='home'>
      <ul className='lg:hidden flex flex-col items-center gap-6 text-md'>
        <li><a href="/">Home</a></li>
        <li><a href="#price">Prices</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#getap">Get An Apponitment</a></li>
      </ul>
    </div>
    </div>
  )
}

export default NavMobile
