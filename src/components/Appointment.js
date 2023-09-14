import React from 'react'
import dog from '../assets/img/dogs/dog-appointment.png'
const Appointment = () => {
  return (
    <section className='bg-orange-secondary w-full relative my-8 py-9 lg:h-[550px] h-[470px] px-4 lg;px-0 ' id='getap'>
      <div className='absolute -top-32 left-[-200%] lg:left-[28%]'><img src={dog} alt="" /></div>
      <div className='max-w-[800px]  bg-yellow mx-auto h-full mt-0 lg:mt-2 rounded-[70px] shadow-2xl '>
        <div className='flex flex-col justify-center py-3 p-9 items-center h-full max-w-[580px] mx-auto'>
        <h2 className='md:h2 font-semibold text-2xl text-blue  mb-8'>Get an appointment</h2>
        <input className='w-full px-8  md:py-5 py-3 rounded-full mb-5' type="text" placeholder='Fullname' />
        <input className='w-full px-8 md:py-5 py-3 rounded-full mb-5' type="email" name="" id="" placeholder='Email address' />
        <input className='w-full px-8 md:py-5 py-3 rounded-full mb-5' type="text" placeholder='Phone Number'/>
        <button className='px-20 bg-orange-hover text-blue lg:w-full md:py-5 py-3 rounded-full'>Send</button>
        </div>
      </div>
    </section>
  )
}

export default Appointment
