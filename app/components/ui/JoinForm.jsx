'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import Icones from './Icones';

function JoinForm() {

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const input = form.querySelector('input');
        const username = input.value
        if(username.length > 0) {
            await signIn('google')
        }
    }

    return (
        <form className='flex flex-col w-full space-y-5' onSubmit={handleSubmit}>
            <div className='w-full relative'>
                <label className='absolute left-4 top-[14px] font-semibold'>linkhub.to/</label>
                <input
                type="text"
                placeholder="Username"
                className="flex pr-3 pl-24 py-2 w-full  md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                />
            </div>
            <div className='w-full relative'>
                <label className='absolute left-4 top-[14px] font-semibold'>
                    <Icones.email className="w-6" />
                </label>
                <input
                type="email"
                placeholder="Email"
                className="flex pr-3 pl-11 py-2 w-full  md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                />
            </div>
            <div className='w-full relative'>
                <label className='absolute left-4 top-[14px] font-semibold'>
                    <Icones.lockTabler className="w-6" />
                </label>
                <input
                type="password"
                placeholder="Password"
                className="flex pr-3 pl-11 py-2 w-full  md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                />
            </div>
            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                Join
            </button>
        </form>
    )
}

export default JoinForm