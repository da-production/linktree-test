import React from 'react'

function page() {
    return (
        <div
            className="flex flex-col ju sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items-center h-full container   ">
            <div
                className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-[#e3e6e9] z-30">
                <h1 className="text-gray-500 font-semibold text-xl ">Basic</h1>
                <div className="text-center py-4 px-7">
                    <h1 className="text-gray-700 text-4xl font-black">$199.00</h1>
                    <p className="text-gray-500  mt-2">Monthely</p>
                </div>
                <div className="h-px bg-gray-200"/>
                <div className="text-center mt-3">
                    <p className="text-sm text-gray-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
                <button
                    className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">
                    Buy Now
                </button>
            </div>
            <div
                className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-[#1e5af9] transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
                <h1 className="text-purple-200 font-semibold text-xl ">Pro</h1>
                <div className="text-center py-4 px-7">
                    <h1 className="text-white text-4xl font-black">$399.00</h1>
                    <p className="text-white text-opacity-50 mt-2">Monthely</p>
                </div>
                <div className="h-px bg-blue-500"/>
                <div className="text-center mt-3">
                    <p className="text-sm text-white text-opacity-80">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
                <button
                    className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-blue-500 hover:shadow-xl duration-200 hover:bg-blue-700">
                    Buy Now
                </button>
            </div>
            <div
                className="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-[#e3e6e9] z-30">
                <h1 className="text-gray-500 font-semibold text-xl ">Enterprise</h1>
                <div className="text-center py-4 px-7">
                    <h1 className="text-gray-700 text-4xl font-black">$899.00</h1>
                    <p className="text-gray-500  mt-2">Monthely</p>
                </div>
                <div className="h-px bg-gray-200"/>
                <div className="text-center mt-3">
                    <p className="text-sm text-gray-400">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
                <button
                    className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">
                    Buy Now
                </button>
            </div>
        </div>

    )
}

export default page