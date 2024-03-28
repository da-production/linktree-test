'use client'
import React from 'react'
import {signIn} from 'next-auth/react'

function page() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <button onClick={()=> signIn('google') } className='p-4 bg-blue-500 text-slate-100 shadow-sm'>Login using Google</button>
    </div>
  )
}

export default page