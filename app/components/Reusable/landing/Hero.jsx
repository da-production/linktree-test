import Image from 'next/image'
import React from 'react'
import Icones from '../../ui/Icones'
import MockupProfile from './MockupProfile'
function Hero() {
  return (
    <div className='flex flex-col items-center justify-center gap-3 h-full max-w-xl mx-auto w-full text-white relative z-10'>
        <h1 className='text-5xl font-bold '>LinkHub</h1>
        <p className='text-center'>simplifies your online presence by consolidating all your social media links into one easy-to-access platform. Stay connected effortlessly with our streamlined solution.</p>
        
        <form className='text-xs'>
            <label
                htmlFor="default-search"
                className="mb-2  font-medium text-gray-900 sr-only dark:text-gray-300"
            >
                Search
            </label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <Icones.at className="w-4 h-4 text-blue-500" />
                </div>
                <input
                type="search"
                id="default-search"
                className="block p-2 pl-10 w-full outline-none  text-gray-900 bg-gray-50 rounded-lg  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="username"
                required=""
                />
                <button
                type="submit"
                className="text-white absolute  right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-1 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                <svg
                    className="w-3 h-3 text-white dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                </button>
            </div>
        </form>
        <MockupProfile />
    </div>
  )
}

export default Hero