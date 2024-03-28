'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

function Logout() {
  return (
    <button className='p-2 px-6 font-semibold rounded-sm shadow-lg bg-white text-slate-900' onClick={()=>signOut()}>Logout</button>
  )
}

export default Logout