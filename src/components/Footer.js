import React from 'react'
import whiteDog from '../assets/img/logo-white.svg'
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='bg-orange py-6'>
      <div className='flex lg:flex-row flex-col gap-y-8 items-center justify-between max-w-[1140px] mx-auto'>
        <div><img src={whiteDog} alt="" /></div>
        <div><p className='text-white'>© Copyright 2023. All rights reserved.</p></div>
        <div className='flex gap-4'>
          <AiFillYoutube  className='bg-white/40 rounded-full p-2 text-white text-[40px]'/>
          <AiFillInstagram className='bg-white/40 rounded-full p-2 text-white text-[40px]'/>
          <AiFillGithub className='bg-white/40 rounded-full p-2 text-white text-[40px]'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
