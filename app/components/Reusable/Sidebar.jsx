import React from 'react'
import DropDownProfile from '../ui/DropDownProfile'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import Icones from '../ui/Icones'
import Link from 'next/link'

async function Sidebar() {
  const session = await getServerSession(nextAuthOptions);
  
  return (
    <div className='flex flex-col items-center h-full'>
      <div className='text-white w-full h-16 flex justify-center items-center '>
        <Icones.logo className="w-10 " />
      </div>
      <div className='h-full w-full flex flex-col items-center justify-between'>
        <ul className='flex flex-col gap-3 text-slate-100 mt-6'>
          <Link href="/account/pages">
            <Icones.wallpaperBroken className="w-6" />
          </Link>
        </ul>
        <DropDownProfile user={session.user} />
      </div>
    </div>
  )
}

export default Sidebar