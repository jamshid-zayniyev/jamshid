import React from 'react'

const Inputs = () => {
  return (
    <div className='my-20 flex flex-col gap-5 items-center justify-center'>
        <input type="text" className='w-full border-none outline-none bg-[#edf2f8] px-[15px] py-[15px] rounded-[10px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]' placeholder='Your Name'/>
        <input type="email" className='w-full border-none outline-none bg-[#edf2f8] px-[15px] py-[15px] rounded-[10px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]' placeholder='Your Email'/>
        <textarea className='w-full h-[130px] md:h-[200px] border-none outline-none bg-[#edf2f8] px-[15px] py-[15px] rounded-[10px] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]' placeholder='Your Message'></textarea>
        <button  type="button" class="text-white bg-[#313bac] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 max-w-[200px]">Send Message</button>

    </div>
  )
}

export default Inputs