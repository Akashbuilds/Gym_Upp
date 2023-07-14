import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className=' bg-[#950101] font-[Poppins] text-white text-xl font-bold h-20 sticky top-0 border-b-2 border-black p-3 flex justify-between items-center '>
        <div>
        <img src={process.env.PUBLIC_URL+'/logo.png'} alt="..." className=' w-14' />
        </div>
        <div className=' p-3 '>
            <ul className=' lg:flex items-center gap-[4vw] sm:hidden'>
                <li className=' cursor-pointer hover:text-gray-400 hidden lg:block'><a href="/">Home</a></li>
                <li className=' cursor-pointer hover:text-gray-400 hidden lg:block'><a href="/">About</a></li>
                <li className=' cursor-pointer hover:text-gray-400 hidden lg:block'><a href="/">Gym</a></li>
                <li className=' cursor-pointer hover:text-gray-400 hidden lg:block'><a href="/">Blog</a></li>
                <li className=' cursor-pointer hover:text-gray-400 hidden lg:block'><a href="/">Contact</a></li>
            </ul>
        </div>
        <div className="">
            <button className=' bg-[#3D0000] px-5 py-2 text-white text-lg rounded-full hover:bg-[#da1010] '> Sign in </button>
        </div>
    </div>
    </>
  )
}
