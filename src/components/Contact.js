import React from 'react'
import dogi from '../assets/img/dogs/dog-contact.png'

const Contact = () => {
  return (
    <div className='bg-yellow-secondary relative pt-8 lg:pt-24  pb-48 lg:pb-16' id='contact' >
      <div className='max-w-[1000px] mx-auto flex lg:justify-between justify-center'>
        <div className='absolute -bottom-3'>
          <img src={dogi} alt="" />
        </div>
        <div></div>
        <div className='flex flex-col items-center'>
          <div className='text-orange font-semibold text-[18px] mb-2'>Contact</div>
          <p className='text-[36px] text-blue font-bold'>+ 1000 10 90 000</p>
          <div className='flex gap-1 text-[17px] text-blue mb-9'>
             <p className='flex'>Opening Hours:</p>
            <p>Mon - Sun: 10am - 6pm</p>
          </div>
          <button className='btn'>Get an appointment</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
