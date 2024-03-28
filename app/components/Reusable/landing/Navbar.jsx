import { getServerSession } from "next-auth";
import Link from 'next/link'
import React from 'react'
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import Logout from "../../ui/Logout";


async function navbar() {
    
  const session = await getServerSession(nextAuthOptions)
  console.log("username : ",session?.user?.name)
  return (
    <div className='w-full h-92'>
        <header className='flex justify-between items-center p-10 text-sm relative z-10'>
            {/* links */}
            <ul className='flex items-center justify-start text-slate-100 gap-10 w-1/3'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>

            {/* Logo */}
            <div className=' w-1/3 flex justify-center items-center'>LogoHere</div>

            {/* Buttons */}
            <div className=' w-1/3 flex items-center justify-end'>
                {/* check condition */}
                {
                    !session && <Link href='login' className='p-2 px-6 font-semibold rounded-sm shadow-lg bg-white text-slate-900'>Sign up</Link>
                }
                {
                    !!session && <Logout />
                }
                
            </div>
        </header>
    </div>
  )
}

export default navbar