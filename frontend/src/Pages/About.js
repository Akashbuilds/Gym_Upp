import React from 'react'
export default function About() {
  return (
   <>
   <div className='bg-gradient-to-t from-[#3D0000] to-[#000000] h-3/4 text-3xl p-10 text-white font-[Roboto Condensed]' id='about'>
    <p className=' text-4xl text-center pt-6'>"The pain you feel today will be the strength you feel tomorrow."</p>
    <p className=' text-xl font-[Poppins] text-center pt-6 ml-4'>GymUpp provides with the best in class Gym guide to your dream physique. </p>
    <div className=' mt-16 lg:mt-28 lg:flex lg:justify-between  '>
      <div className=' bg-[#950101] h-52 w-full lg:w-52 mt-20 lg:mt-0 rounded-tr-3xl rounded-bl-3xl hover:-translate-x-4 '>
        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3ltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="..." className=' h-1/2 w-full object-cover rounded-tr-3xl'/>
        <p className=' text-xl text-center p-5 lg:p-2 font-[Poppins]'>You can get your workout routine here.</p>
      </div>
      <div className=' bg-[#950101] h-52 lg:w-52 w-full mt-20 lg:mt-0 rounded-tr-3xl rounded-bl-3xl hover:translate-x-4'>
      <img src="https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="..." className=' h-1/2 w-full object-cover rounded-tr-3xl'/>
      <p className=' text-xl text-center p-5 lg:p-2 font-[Poppins]'>You can get your diet plans here.</p>
      </div>
      <div className=' bg-[#950101] h-52 lg:w-52 w-full mt-20 lg:mt-0 rounded-tr-3xl rounded-bl-3xl hover:-translate-x-4'>
      <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="..." className=' h-1/2 w-full object-cover rounded-tr-3xl'/>
      <p className=' text-xl text-center p-5 lg:p-2 font-[Poppins]'>You can get your fitness blogs here.</p>
      </div>
      <div className=' bg-[#950101] h-52 lg:w-52 w-full mt-20 lg:mt-0 rounded-tr-3xl rounded-bl-3xl hover:translate-x-4'>
      <img src="https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="..." className=' h-1/2 w-full object-cover rounded-tr-3xl'/>
      <p className=' text-xl text-center p-5 lg:p-2 font-[Poppins]'>Get 1 to 1 fitness tips from experts.</p>
      </div>
    </div>
   </div>
   </>
  )
}
