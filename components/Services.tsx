import { services } from '@/data/index'
import React from 'react'
import { Button } from './ui/MovingBorder'

const Services = () => {
  return (
     <div className='py-20' id="projects">
          <h1 className='heading'>The {' '}
               <span className='text-outline'>services</span>
               {' '}we offer
          </h1>
          <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
               {services.map(item => (
                    <Button key={item.id} duration={Math.floor(Math.random() * 10000) + 10000} borderRadius="1.25rem" className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
                         <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                              <img src={item.thumbnail} alt={item.thumbnail} className="lg:w-32 md:w-20 w-16" />
                              <div className='lg:ms-5'>
                                   <h1 className='text-start text-xl md:text-2xl font-bold'>
                                        {item.title}
                                   </h1>
                                   <p className='text-start text-white-100 mt-3 font-semibold'>
                                        {item.desc}
                                   </p>
                              </div>
                         </div>
                    </Button>
               ))}
          </div>
     </div>
  )
}

export default Services