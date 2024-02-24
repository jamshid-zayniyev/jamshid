import React from 'react'
// icons
import { FaTelegram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Social = () => {
  return (
    <div className='absolute left-[20px] bottom-[20px] md:block hidden'>
        <a href='https://t.me/Behruz_Shodmonov' target='_blank' className='text-[#6b7688] text-[20px] bg-[white] w-[50px] h-[50px] flex justify-center items-center rounded-full transition-all hover:bg-[#313bac] hover:text-[white] mb-2'>
            <FaTelegram />
        </a>
        <a href='https://t.me/Behruz_Shodmonov' target='_blank'  className='text-[#6b7688] text-[20px] bg-[white] w-[50px] h-[50px] flex justify-center items-center rounded-full transition-all hover:bg-[#313bac] hover:text-[white]'>
            <FaLinkedinIn />
        </a>
    </div>
  )
}

export default Social