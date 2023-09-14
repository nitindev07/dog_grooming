import React from 'react'
import phone from '../assets/img/phone.svg'
const Program = () => {
  return (
    <div>
      <div className='flex justify-end items-baseline gap-1 '>
        <img className='w-[28px] lg:w-[34px] h-[28px] lg:h-[34px]' src={phone} alt="" />
        <div className='lg:text-[22px] text-blue font-extrabold '>+ 1000 10 90 000</div>
      </div>
      <div className='flex gap-1 text-[13px]'>
        <p className='hidden lg:flex'>Opening Hours:</p>
        <p>Mon - Sun: 10am - 6pm</p>
      </div>
    </div>
  )
}

export default Program
