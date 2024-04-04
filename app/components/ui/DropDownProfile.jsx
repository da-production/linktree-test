'use client'
import React, { useState } from 'react'
import Icones from './Icones'
import {signOut} from 'next-auth/react'

import image from '@/public/mebroukiamine.png'
import Image from 'next/image'

function DropDownProfile({user}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='relative'>
            <div
                onClick={()=>setIsOpen(prev=>!prev)}
                className=" cursor-pointer flex h-[40px]  items-center justify-center rounded-full border-[3px] mb-5 shadow-md border-[#1e5af9]  dark:!border-navy-700">
                <Image className="h-full w-full rounded-full" src={image} alt=""/>
            </div>
            <div
                className={`profile__dropdown  ${!isOpen ? '' : 'active'}`}>
                
                <div
                        className="w-[250px] max-w-md rounded-lg bg-[#1a2c3b] text-xs overflow-hidden p-1 drop-shadow-xl divide-y divide-gray-700">
                        <div aria-label="header" className="flex space-x-4 items-center p-4 w-full">
                            <div aria-label="avatar" className="flex mr-auto items-center space-x-4">
                                <Image
                                    src={image}
                                    alt={user.name}
                                    className="w-12 h-12 shrink-0 rounded-full"/>
                                <div className="space-y-2 flex flex-col flex-1 truncate">
                                    <div className="font-medium relative text-md leading-tight text-gray-100">
                                        <span className="flex">
                                            <span className="truncate relative pr-8">
                                                {user.name}
                                                <span
                                                    aria-label="verified"
                                                    className="absolute top-1/2 -translate-y-1/2 right-0 inline-block rounded-full">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true"
                                                        className="w-3 h-3 ml-1 text-cyan-400"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={2}
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path
                                                            d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                            strokeWidth={0}
                                                            fill="currentColor"/>
                                                    </svg>
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <p className="font-normal text-sm leading-tight text-gray-300 truncate">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div aria-label="navigation" className="py-2">
                            <nav className="grid gap-1">
                                <a
                                    href="/"
                                    className="flex items-center leading-6 space-x-3 py-1 px-4 w-full text-md text-slate-200 focus:outline-none hover:bg-slate-700 rounded-md">

                                    <Icones.userSolar className="w-5"/>
                                    <span>Account Settings</span>
                                </a>
                            </nav>
                        </div>
                        <div aria-label="account-upgrade" className="px-4 py-2">
                            <div className="flex items-center space-x-3">
                                <div className="mr-auto space-y-2">
                                    <p className="font-medium text-lg text-gray-100 leading-none">
                                        Free Plan
                                    </p>
                                    <p className="font-normal text-sm text-gray-500 leading-none">
                                        12,000 views
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    className="inline-flex px-4 leading-6 py-2 rounded-md bg-indigo-50 hover:bg-indigo-50/80 transition-colors duration-200 text-indigo-500 font-medium text-md">
                                    Upgrade
                                </button>
                            </div>
                        </div>
                        <div aria-label="footer" className="pt-2">
                            <button
                                onClick={() => signOut()}
                                type="button"
                                className="flex items-center space-x-3 py-1 px-4 w-full leading-6 text-md text-slate-200 focus:outline-none hover:bg-slate-700 rounded-md">
                                <Icones.logout className='w-6'/>
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default DropDownProfile