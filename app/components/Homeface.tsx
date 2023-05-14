
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import React from 'react'
import Link from 'next/link';

export default function Homeface() {
  return (
    <section className='flex max-w-4xl mx-auto md:flex-row flex-col mt-16 ' >
      <div className='p-5 max-w-lg'>
      <h1 id="home" className='mb-10 font-bold text-white'>I'm A Full-Stack Developer</h1>
      <p className='mb-6 leading-normal text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta commodi, soluta maiores qui placeat facere maxime natus aliquam sequi magnam dipisicing elit. Dicta commodi, soluta maiores qui placeat facere maxime natus aliquam sequi magna provident debitis nesciunt nostrum consectetur quisquam earum ex similique quaerat labore dolores, iure harum! Deserunt qui, asperiores repellendus, voluptas et odit rerum neque id provident libero totam unde nihil nemo?</p>
 
    <button className='group flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 rounded-lg'>Profile
    <MdOutlineKeyboardArrowRight size={20} className='group-hover:rotate-90 duration-500'/>
    </button>
    </div>

    {/* right start */}
    
    <div className=''>
      <img src="https://static.vecteezy.com/system/resources/previews/019/837/539/original/businessman-cartoon-character-set-handsome-business-man-in-office-style-smart-suit-png.png" className='md:w-full w-1/2 mx-auto'/>
    </div>

    </section>


  )
}
