import { projects } from '@/data/index'
import React from 'react'
// import { PinCard } from './ui/PinCard'
import { PinContainer } from './ui/PinContainer'


const ProjectShowCase = () => {
  return (
    <div className='py-20' id="projects">
     <h1 className='heading'>A selection of our {' '}
          <span className='text-outline'>recent projects</span>
     </h1>
     <div className='flex flex-wrap items-center justify-center p-4 gap-x-40 my-10 md:gap-y-20 sm:gap-y-20'>
          {projects.map(({ id, title, des, img, link }) => (
               <div key={id} className="lg:min-h-[33rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">  
                    <PinContainer title={title} href={link}>
                         <div className='relative flex items-center justify-center sm:w-[420px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] my-4'>
                              <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]'>
                                   <img src="/bg.png" alt="bg.img" />
                              </div>
                              <img
                                   src={img}
                                   alt={title}
                                   className="z-10 absolute bottom-0 h-80 w-96"
                              />
                         </div>
                         <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 my-2'>{title}</h1>
                         <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{des}</p>
                    </PinContainer>
               </div>
          ))}
     </div>
    </div>
  )
}

export default ProjectShowCase