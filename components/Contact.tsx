"use client"
import React, { useRef } from 'react'
import { Toaster, toast } from "sonner";

const Contact = () => {
  const ref = useRef<HTMLFormElement>(null)
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "61c1ba63-f7ed-487f-ad4c-174094ae5006");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
        ref.current?.reset();
        toast.success("Message sent!")
    } else {
      toast.error("Message unsent!")
    }
  }
  return (
    <div className='w-full justify-center items-center flex md:p-4 sm:p-5'>
      <form onSubmit={handleSubmit} method="POST" ref={ref}>
          <p className='m-2'>Name: <input id="name" type="text" name="name" placeholder='Your name' required className='border-2 w-full rounded-md border-white-100' /></p>
          <p className='m-2'>E-mail: <input type="email" name="email" required placeholder='example@mail.com' className='border-2 w-full rounded-md border-white-100'  /> </p>
          <p className='m-2'>Phone number: <input type="tel" name="number" required placeholder='9876543210' className='border-2 w-full rounded-md border-white-100'  /> </p>
          <p className='m-2'>Any additional message: <textarea name="text" required placeholder='Your message...' className='border-2 w-full rounded-md border-white-100 h-28'  /> </p>
          <p className='items-center justify-center flex md:m-10 sm:m-10'>
            <button type="submit" className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2186FF_0%,#393BB2_50%,#2186FF_100%)]" />
              <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}>
                  Send
              </span>
            </button>
          </p>
      </form>
      <Toaster richColors />
    </div>
  )
}

export default Contact
