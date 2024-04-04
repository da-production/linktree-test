'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

function AuthProvider({title,icon,provider}) {
  return (
    <button onClick={()=>signIn(provider,{redirect:false,callbackUrl:'/account'})} className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
        <span className="absolute left-4">
            {icon}
        </span>
        <span>{title}</span>
    </button>
  )
}

export default AuthProvider