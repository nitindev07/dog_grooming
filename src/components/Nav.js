import React from 'react'

const Nav = () => {
  return (
    <div className='' id='home'>
      <ul className='hidden lg:flex gap-6 text-md'>
        <li><a className='hover:border-b-4' href="/">Home</a></li>
        <li><a className='hover:border-b-4' href="#price">Prices</a></li>
        <li><a className='hover:border-b-4' href="#contact">Contact</a></li>
        <li><a className='hover:border-b-4' href="#getap">Get An Apponitment</a></li>
      </ul>
    </div>
  )
}

export default Nav
