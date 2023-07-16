import React from 'react'

export default function DietApi() {
  return (
    <>
     <div className='bg-gradient-to-t from-[#3D0000] to-[#000000]  text-xl p-10 text-white font-[Roboto Condensed] pt-16 pb-16'>
    <p className=' text-4xl text-center pt-6'>"Fitness is not about being better than someone else; it's about being better than you used to be."</p>
     <p className=' text-xl font-[Poppins] text-center pt-6 ml-4'>Fill in this form and we make a custom list of workouts! </p>
    <div className=' lg:flex lg:justify-center lg:gap-72 border-black pt-16'>
    <div className=' flex flex-col justify-center gap-10 lg:gap-16 lg:pl-24 '>
        <input type="text" placeholder='Name' className=' p-3 outline-none bg-gray-500 text-xl font-[Poppins] rounded-3xl lg:w-full'/>
        <input type="number" placeholder='Age' className=' p-3 outline-none bg-gray-500 text-xl font-[Poppins] rounded-3xl'/>
        <input type="text" placeholder='Gender' className=' p-3 outline-none bg-gray-500 text-xl font-[Poppins] rounded-3xl'/>
        <input type="number" placeholder='Height(Cms)' className=' p-3 outline-none bg-gray-500 text-xl font-[Poppins] rounded-3xl'/>
        <input type="number" placeholder='Weight(kgs)' className=' p-3 outline-none bg-gray-500 text-xl font-[Poppins] rounded-3xl'/>
        <input type="text" placeholder='Muscle you wanna hit ' className=' p-3 outline-none bg-gray-500 text-xl font-[Poppins] rounded-3xl'/>
        <button className=' bg-[#da1010] px-5 py-2 w-full text-white text-lg rounded-full hover:bg-[#3D0000]  my-6 m'> Get Workouts </button>
    </div>
    <img src="https://images.unsplash.com/photo-1613685044678-0a9ae422cf5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="..." className=' rounded-[3.5rem] pt-16 lg:pt-0' />
   </div>
   </div>
  </>
  )
}
