import React from 'react'
//import gymvid from '../assets/gymvid.mp4'
import SideBar from '../Components/SideBar'
export default function Home() {
  return (
    <div className=' font-[Open sans] bg-gradient-to-t from-[#000000] to-[#3D0000]  '>
   <div className=' relative z-10'>
   <SideBar/>
   </div>
   <div className=' flex flex-col justify-center items-center pb-28 '>
   <div className=' text-xl text-center font-[Bebas Neue] pt-36 text-red-400 font-bold tracking-[0.9rem] outline-8 '>GymUpp</div>
    <div className="text-5xl lg:text-7xl text-center text-gray-500 pt-16">Get Your Best</div>
    <div className="text-7xl lg:text-9xl text-center text-white pt-3 pl-2">Body Shape.</div>
   <div className=' pt-10 flex justify-center'>
   <button className=' bg-[#da1010] px-16 py-2 text-white text-lg rounded-full hover:bg-[#3D0000] text-centre font-[Poppins]'> Gym? </button>
   </div>
    </div>
    </div>
  )
}
