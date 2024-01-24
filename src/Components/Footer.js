import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const Footer = () => {
  const[email,setEmail]=useState("")
  return (

<footer className="bg-[#4F6F52]">
<div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-md">
    <strong className="block text-center text-xl font-bold text-gray-200 sm:text-3xl">
      Want us to email you with the latest blockbuster news?
    </strong>
    <ToastContainer theme='colored'></ToastContainer>
    <form onSubmit={(e)=>{
e.preventDefault();
toast.success("Thanks for subscribe!!")
setEmail("")
    }} className="mt-6">
      <div className="relative max-w-lg">
        <label className="sr-only" htmlFor="email"> Email </label>

        <input
          className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
          id="email"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email"
          placeholder="abc@gmail.com"
        />

        <button
        type={'submit'}
          className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-[#4F6F52] px-5 py-3 text-sm font-medium text-white transition hover:opacity-80"
        >
          Subscribe
        </button>
      </div>
    </form>
  </div>

  <div className="mt-16 border-t border-gray-100 pt-8">
    <p className="text-center text-xs/relaxed text-white">
      © Edu Blogs 2024. All rights reserved.
    </p>
  </div>
</div>
</footer>

  )
}

export default Footer