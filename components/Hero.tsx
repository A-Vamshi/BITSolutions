import React from 'react'
import Button from './ui/Button'
import { Spotlight } from './ui/Spotlights'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { FaLocationArrow } from "react-icons/fa6"
import image from "../images/pngwing.com.png"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
          <div>
               <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="blue" />
               <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="#2186FF" />
               <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="#2186FF" />
          </div>
          <Image src={image} alt="logo" className='absolute h-[700px] w-[700px] self-center ml-64 opacity-50' />
          {/* <div className="absolute top-0 left-0 h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.2] flex items-center justify-center">
               <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div> */}
          <div className='flex justify-center relative my-20 z-10'>
               <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase text-5xl tracking-widest text-center text-blue-100'><span className='text-outline'>BIT</span> Solutions</h2>
                    <h2 className='uppercase text-xs tracking-widest text-center text-blue-100 max-w-80 '>The solution to all your Business & IT problems</h2>
                    <TextGenerateEffect
                         className='text-center text-[40px] md:text-5xl lg:text-6xl'
                         words="Transforming Innovative Ideas into Creative Implementations"
                    />
                    <p className='text-center mt-3 md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl'>We develop React Native, React.js, Next.js, Flutter applications, ML models, Web3 websites and more!</p>
                    <a href="#projects">
                         <Button 
                              title="Check our work"
                              position="right"
                              otherClasses=""
                              icon={<FaLocationArrow />}
                         />
                    </a>
               </div>
          </div>
    </div>
  )
}
 
export default Hero