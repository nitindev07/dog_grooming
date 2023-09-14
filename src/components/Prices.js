import React, { useEffect, useState } from 'react'
import { bundleData } from '../data'
import Bundles from './Bundles'

const Prices = () => {
  const[index,setIndex]=useState(0)
  const[bundles,setBundles]=useState([])

  useEffect(()=>{
    setBundles(bundleData[0].services);
  },[])
  const getBundle=(name)=>{
    const newBndle = bundleData.find((bundle)=>{
      return bundle.name === name 

    })
    setBundles(newBndle.services);
  }

  return (
    <section className='py-12 lg:py-24 px-2 lg:px-0' id='price'>
      <div className='max-w-[1140px] mx-auto'>
        <div className='text-center mb-20'>
          <div className='text-orange font-semibold text-[18px] mb-3'>Our Prices</div>
          <h2 className='h2 mb-3'>How Big Your Dog is?</h2>
          <p className='text-lg text-blue'>choose your dog category</p>
        </div>
        {/* bundle */}
        <div className='grid grid-cols-4 gap-2 lg:gap-9'>
          {bundleData.map((itms, idx)=>{
            const{name, image, dogCategory}=itms;
            return (
              <div key={idx} onClick={()=>{setIndex(idx); getBundle(name)}} className='text-center cursor-pointer'> 
                <div className='lg:mb-8 mb-2 hover:scale-105 transition-all duration-300'>
                  <img className='w-full' src={image.type} alt="" />
                </div>
                <h3 className='text-blue capitalize lg:text-2xl font-semibold lg:mb-2 mb-0'>{name}</h3>
                <div className={`${index === idx ? 'border-b-4 border-orange transition-all after:lg:w-5 after:lg:h-5 after:bg-triangle after:lg:bg-no-repeat after:lg:block after:lg:left-[120px] after:lg:absolute after:lg:-bottom-6 relative':'border-b-4 border-transparent'} pb-4 mb-12`}>
                <div className='hidden lg:block capitalize'>
                {dogCategory}
                </div>
                </div>
              </div>
            )
          })}
        </div>
        {/* bundle */}
        <div>
          <Bundles bundles={bundles}/>
        </div>
      </div>
    </section>
  )
}

export default Prices
