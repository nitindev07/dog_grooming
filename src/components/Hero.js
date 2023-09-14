import React from 'react'
import HeroSlider from './HeroSlider'


const Hero = () => {
  return (
    <section className='min-h-[748px] relative pt-24 pb-12 flex items-center overflow-hidden lg:px-[50px] after:lg:h-[740px] after:lg:w-[740px] after:lg:absolute after:lg:-right-28 after:lg:-top-24 after:lg:rounded-full after:lg:bg-orange-tertiary '>
      <HeroSlider/>
    </section>
  )
}

export default Hero
