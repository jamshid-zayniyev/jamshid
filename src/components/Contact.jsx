import React from 'react'
import Telegram from "../assets/telegramP.png"
import LinkedIn from "../assets/LinkedInP.png"
import PhoneP from "../assets/PhoneP.png"
import Inputs from './Inputs'

const Contact = () => {
  return (
    <div id='contact'>
        <div className='text-[35px] my-10 md:text-[44px] text-center font-bold'>Contact Me</div>
        <div className='max-w-[700px] w-full m-auto px-5'>
           <div className='flex flex-wrap justify-center items-center gap-5 md:gap-10 my-5'>
            <a href='https://www.linkedin.com/in/jamshid-zayniev-091b66266/' target='blank' className='flex min-w-[300px] w-full sm:w-auto h-[70px] px-10 justify-start gap-2 items-center bg-[#fef4f5] rounded-[10px] shadow-md hover:shadow-lg cursor-pointer'>
                <img src={LinkedIn} alt="Telegram" className='w-[50px]' />
                <span className='text-[#5e6064]'>in/ekaterina-kutovaya</span>
            </a>
            <a href='https://t.me/jamzayn10' target='blank' className='flex min-w-[300px] w-full sm:w-auto h-[70px] px-10 justify-start gap-2 items-center bg-[#fef4f5] rounded-[10px] shadow-md hover:shadow-lg cursor-pointer'>
                <img src={Telegram} alt="Telegram" className='w-[50px]' />
                <span className='text-[#5e6064]'>t.me/jamzayn10</span>
            </a>
            <a href='tel:+998908292171' target='blank' className='flex min-w-[300px] w-full sm:w-auto h-[70px] px-10 justify-start gap-2 items-center bg-[#fef4f5] rounded-[10px] shadow-md hover:shadow-lg cursor-pointer'>
                <img src={PhoneP} alt="Telegram" className='w-[20px]' />
                <span className='text-[#5e6064]'>  +(998) 90 829 21 71</span>
            </a>
           </div>
           <Inputs/>
        </div>
    </div>
  )
}

export default Contact