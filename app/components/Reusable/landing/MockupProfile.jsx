import React from 'react'
import mockup from "@/public/smartphone-and-mobile-phone-free-png.png"
import Image from 'next/image'
import pawel from '@/public/mockup-background/pawel.jpg'
import image from '@/public/mebroukiamine.png'


function MockupProfile() {
  return (
    <div className='relative'>
        <div className='w-[calc(100%-20px)] left-3 h-[calc(100%-18px)] overflow-y-auto bg-white z-10 absolute top-[10px] rounded-3xl before:absolute before:left-10 before:rounded-b-lg before:h-3 before:w-24 before:bg-black'>
          <div className='flex items-center flex-col gap-5 relative z-10'>
            <div className=" flex h-[60px] w-[60px] items-center justify-center rounded-full border-[4px] mt-8 shadow-md border-white bg-pink-400 dark:!border-navy-700">
              <img className="h-full w-full rounded-full" src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png' alt="" />
            </div>
          </div>
          <Image alt="pawel" src={pawel} className='h-full absolute top-0 left-0 z-0' />
        </div>
        <Image alt='mockup' src={mockup} className='drop-shadow-2xl relative z-0' />
        <div className='w-[calc(100%-5px)] left-1 h-[calc(100%-18px)] overflow-y-auto shadow-xl bg-transparent z-0 absolute top-[10px] rounded-3xl'></div>
    </div>
  )
}

export default MockupProfile