"use client";
import React, { useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi";
import {RxCross2} from "react-icons/rx";



export default function Header() {
    const [toggle,setToggle] = useState(true)
    return (
    <section className="bg-gray-700 text-white sticky top-0 left-0 right-0" >
      <div className='flex justify-between items-center p-1 '>
        <div className='ml-7'>
        <h1 className='font-autograph mt-3 font-extrabold  text-5xl'>
             HS
        </h1><p className='font-thin text-xs ml-1 text-gray-400'>Hammad Saleem</p>
        </div>
 
        <ul className='m-7 md:flex hidden'>

        <a className="cursor-pointer" href="#home">
          <li className='mx-5 text-1xl '>Home</li></a>
        <a className="cursor-pointer" href="#about">
          <li className='mx-5 text-1xl '>About</li></a>
          <a className="cursor-pointer" href="#portfolio"> 
          <li className='mx-5 text-1xl '>Portfolio</li></a>
        <a className="cursor-pointer" href="#skills"> 
          <li className='mx-5 text-1xl '>Skills</li></a>
          <a className="cursor-pointer" href="#contact"> 
          <li className='mx-5 text-1xl '>Contact</li></a>
        </ul>
      
      <div className='pr-5 md:hidden z-10' onClick={()=>{
        setToggle(!toggle);
        console.log (toggle);
      }}
      >

      {toggle ? <GiHamburgerMenu size={24}/> : <RxCross2 size={24}/>}
      </div>
      {/* overlay start here */}
    
      {!toggle && (

    <div className='fixed top-0 left-0 bg- h-screen bg-gray-900 w-full flex justify-center font-semibold'>
    <ul className='m-7 text-white '>
    <a className="cursor-pointer" href="#home" >
          <li className='mx-5 text-1xl hover:scale-150 duration-500'>Home</li></a>
        <a className="cursor-pointer" href="#about">
          <li className='mx-5 text-1xl hover:scale-150 duration-500'>About</li></a>
          <a className="cursor-pointer" href="#portfolio"> 
          <li className='mx-5 text-1xl '>Portfolio</li></a>
        <a className="cursor-pointer" href="#skills"> 
          <li className='mx-5 text-1xl '>Skills</li></a>
          <a className="cursor-pointer" href="#contact"> 
          <li className='mx-5 text-1xl'>Contact</li></a>
        </ul>
    </div>
      )}

    </div>
    </section>
  )
}
