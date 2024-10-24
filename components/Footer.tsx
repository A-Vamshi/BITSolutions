"use client";
import React from 'react'
import Button from './ui/Button'
import { FaLocationArrow } from "react-icons/fa6"
import { socialMedia } from '@/data/index'
import Contact from './Contact'

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] pb-10 md:mb-5'  id="contact"> 
     <div className='flex flex-col items-center'>
          <h1 className='heading'>Ready to take your <span className='text-outline'>Digital Presence</span> to next level?</h1>
          <p className='text-white-200 md:mt-10 my-5 text-center'>Get a call from us!</p>
          <Contact />
          <p className='m-3'>Or</p>
          <a href="mailto:vamshi.edustudy@gmail.com">
               <Button title="Email us" icon={<FaLocationArrow />} position="right" otherClasses='' />
          </a>
     </div>
     <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
          <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 BIT Solutions</p>
          <div className='flex items-center md:gap-3 gap-6'>
               {socialMedia.map((profile) => (
                    <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"> 
                         <img src={profile.img} alt={profile.img} width={20} height={20} />
                    </div>
               ))}
          </div>
     </div>
    </footer>
  )
}

export default Footer