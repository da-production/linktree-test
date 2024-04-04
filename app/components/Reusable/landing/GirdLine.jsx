import Image from 'next/image'
import React from 'react'
import whatsapp from "@/public/socialmedialogos/whatsapp.png"
import facebook from "@/public/socialmedialogos/facebook.png"
import tiktok from "@/public/socialmedialogos/tiktok.png"
import snapchat from "@/public/socialmedialogos/snapchat.png"
import instagram from "@/public/socialmedialogos/instagram.png"
import dribbble from "@/public/socialmedialogos/dribbble.png"
import linkedin from "@/public/socialmedialogos/linkedin.png"
import pinterest from "@/public/socialmedialogos/pinterest.png"
import MagneticWrapper from '../../Effect/MagneticWrapper'

function GirdLine() {
  return (
    <div className='absolute top-0 w-full h-full grid grid-cols-7'>
        <div className='border-r-2 border-r-white/20 relative'>
        {/*   */}
            <div className='absolute -right-7 top-36 z-20 cursor-pointer'>
                <MagneticWrapper >
                    <Image alt="social" src={whatsapp} className=' w-14 ' />
                </MagneticWrapper>
            </div>
            <div className='absolute -right-7 top-[450px]  z-20 cursor-pointer'>
                <MagneticWrapper >
                    <Image alt="social" src={tiktok} className='drop-shadow-lg w-14 ' />
                </MagneticWrapper>
            </div>
            <div className='absolute w-4 h-4 bg-[#1e5af9] border-2 rounded-full -right-[9px] top-[350px] drop-shadow-lg'></div>
        </div>
        <div className='border-r-2 border-r-white/20 relative'>
            <div className='absolute w-4 h-4 bg-[#1e5af9] border-2 rounded-full -right-[9px] top-64 drop-shadow-lg'></div>
            <div className='absolute w-4 h-4 bg-[#1e5af9] border-2 rounded-full -right-[9px] top-20 drop-shadow-lg'></div>
            <div className='absolute -right-7 top-80  z-20 cursor-pointer'>
                <MagneticWrapper >
                    <Image alt="social" src={facebook} className='w-14  drop-shadow-lg' />
                </MagneticWrapper>
            </div>
            <div className='absolute -right-7 top-[500px]  z-20 cursor-pointer'>
                <MagneticWrapper >
                    <Image alt="social" src={snapchat} className='w-14  drop-shadow-lg' />
                </MagneticWrapper>
            </div>
        </div>
        <div className=' relative'></div>
        <div className=' relative'></div>
        <div className='border-r-2 border-r-white/20 relative'>
            
            <div className='absolute w-4 h-4 bg-[#1e5af9] border-2 rounded-full -right-[9px] top-[550px] drop-shadow-lg'></div>
            <div className='absolute w-4 h-4 bg-[#1e5af9] border-2 rounded-full -right-[9px] top-80 drop-shadow-lg'></div>
            <div className='absolute w-4 h-4 bg-[#1e5af9] border-2 rounded-full -right-[9px] top-10 drop-shadow-lg'></div>
            <Image alt="social" src={dribbble} className='absolute w-14 -right-7 top-24 drop-shadow-lg' />
            <Image alt="social" src={instagram} className='absolute w-14 -right-7 top-[420px] drop-shadow-lg' />
        </div>
        <div className='border-r-2 border-r-white/20 relative'>
            
            <div className='absolute w-4 h-4 bg-[#1e5af9] border-2 rounded-full -right-[9px] top-[500px] drop-shadow-lg'></div>
            <div className='absolute w-4 h-4 bg-[#1e5af9] border-2 rounded-full -right-[9px] top-72 drop-shadow-lg'></div>
            <div className='absolute w-4 h-4 bg-[#1e5af9] border-2 rounded-full -right-[9px] top-28 drop-shadow-lg'></div>
            <Image alt="social" src={linkedin} className='absolute w-14 -right-7 top-48 drop-shadow-lg' />
            <Image alt="social" src={pinterest} className='absolute w-14 -right-7 top-[380px] drop-shadow-lg' />
        </div>
    </div>
  )
}

export default GirdLine