import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'

const Bundles = ({ bundles }) => {
  
  return (
    <div className='grid md:grid-cols-3 grid-cols-1  gap-8'>
      {bundles.map((bundle,index)=>{
        const {price, name, list}= bundle
        return <div key={index} className='shadow-2xl text-center lg:h-full h-[500px] pt-12 pb-20 capitalize rounded-3xl'>
            <div className='h2 mb-4'><span>$</span>
              {price}
            </div>
            <h5 className='mb-12 text-[18px] font-semibold'>{name}</h5>
            <div className='flex flex-col items-start w-[250px] mx-auto gap-4' >
              {list.map((itms,idex)=>{
                return <div key={idex}>
                <div className='flex gap-2 items-center'>
                <BsCheckCircleFill className='text-orange w-[20px]'/>
                {itms}
                </div>
                </div>
              })}
            </div>
        </div>
      })}
    </div>
  )
}

export default Bundles
