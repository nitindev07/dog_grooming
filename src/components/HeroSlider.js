import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../swiper.css'

import { Pagination, Navigation, Autoplay } from 'swiper'

import { heroSlider } from '../data'

const HeroSlider = () => {
  return (
    <Swiper modules={[Pagination, Navigation, Autoplay]} autoplay={true} loop={true} pagination={{clickable: true, dynamicBullets: true}} navigation={true} className='heroSlider'>
      {heroSlider.map((slide,idx) =>{
        const {title, subtitle, image, buttonText}= slide
        return <SwiperSlide key={idx}>
          <div>
            <div className='flex items-center w-full mx-auto px-7 lg:px-0 lg:gap-28 max-w-[1140px] lg:flex-row flex-col gap-14  ' >
              <div className='lg:max-w-[600px] mx-auto  lg:mx-0 flex flex-col lg:items-start items-center gap-10 text-center lg:text-start'>
                <h1 className='text-blue text-[36px] leading-tight lg:text-[72px] lg:leading-[98px] font-extrabold'>{title}</h1>
                <p className='max-w-[530px] lg:text-[18px] text-[16px]'>{subtitle}</p>
                <button className='btn'>{buttonText}</button>
              </div>
              <img className='h-96 lg:h-auto' src={image.type} alt="" />
            </div>
          </div>
        </SwiperSlide>
      })}
    </Swiper>
  )
}

export default HeroSlider
