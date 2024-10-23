"use client"
import React from 'react'

const Contact = () => {
  return (
    <div className='w-full justify-center items-center flex md:p-4 sm:p-5'>
      <form action="https://formsubmit.co/vamshi.edustudy@gmail.com" method="POST">
          <p className='m-2'>Name: <input id="name" type="text" name="name" required className='border-2 w-full rounded-md border-white-100' /></p>
          <p className='m-2'>E-mail: <input type="email" name="email" required className='border-2 w-full rounded-md border-white-100'  /> </p>
          <p className='m-2'>Phone number: <input type="tel" name="number" required className='border-2 w-full rounded-md border-white-100'  /> </p>
          <input type="hidden" name="_captcha" value="false"></input>
          <p className='items-center justify-center flex md:m-10 sm:m-10'>
            <button type="submit" className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2186FF_0%,#393BB2_50%,#2186FF_100%)]" />
              <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}>
                  Send
              </span>
            </button>
          </p>
      </form>
    </div>
  )
}

export default Contact
