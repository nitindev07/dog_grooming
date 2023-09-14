import React, { useEffect, useState } from 'react'
import logo from '../assets/img/logo.svg'
import Nav from './Nav'
import {CgMenuRight} from 'react-icons/cg'
import Program from './Program'
import NavMobile from './NavMobile'




const Header = () => {
  const[bg, setBg]=useState(false)
  const[navMob, setNavMob]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{window.scrollY > 80 ? setBg(true): setBg(false);})
  })
  return (
    <header className={`${bg ? 'bg-white py-3 shadow-md':'bg-none py-4'} fixed w-full right-0 left-0 z-10 transition-all duration-300 px-4 lg:px-0`}>
      <div className='max-w-[1140px] mx-auto'>
        <div className='flex justify-between items-center'>
          <a href="/"><img src={logo} alt="" /></a>
          <div><Nav/></div>
          <div><Program/></div>
          <div className='md:hidden cursor-pointer' onClick={()=>setNavMob(!navMob)}><CgMenuRight className='text-3xl text-blue'/></div>
          <div onClick={()=>setNavMob(!navMob)} className={`${navMob ? 'max-h-[260px]': 'max-h-0' } fixed duration-300 bg-yellow shadow-lg left-0 w-full top-[73px] h-full overflow-hidden transition-all`}><NavMobile/></div>
        </div>
      </div>
    </header>
  )
}

export default Header
