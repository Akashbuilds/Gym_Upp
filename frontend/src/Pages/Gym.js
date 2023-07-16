import React from 'react'
export default function Gym() {
  // const [data,Setdata] = useState('')
  // const [muscle,Setmuscle] = useState('biceps')
  // const submit = ()=>{
  //   try {
  //     axios.get('https://api.api-ninjas.com/v1/exercises?muscle=biceps',{
  //       headers:{
  //         'X-Api-Key': '5LO7i8g0vKvGUWBmZxFfxQ==gEOHsUsFDsMy1qJf'
  //       }
  //     }).then((res)=>{
  //       console.log(res.data);
  //       Setdata(res.data)
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  return (
    <>
    <div className='bg-gradient-to-t from-[#000000] to-[#3D0000] text-white h-3/4 p-10 pt-24' id='gym'>
    <p className=' text-4xl text-center pt-6'>"Your body can stand almost anything. It's your mind you have to convince."</p>
    <p className=' text-xl font-[Poppins] text-center pt-6 ml-4'>Set your gym goals and start now!</p>
    <div className='lg:flex lg:justify-between mt-16 lg:mt-20 gap-5'>
      <div className=' '>
          <h1 className=' text-4xl text-center lg:text-left font-mono'>The Gym Plan</h1>
          <p className='text-xl font-[Poppins] text-center lg:text-left pt-8'>A well-rounded workout routine typically includes a combination of different exercises targeting various muscle groups, cardiovascular fitness, and flexibility. This can include activities like running, weightlifting, yoga, cycling, swimming, HIIT (high-intensity interval training), Pilates, and more. Get a hands-on finely crafted gym routine for you.</p>
          <a href='/workouts'><button className=' bg-[#3D0000] px-5 py-2 text-white text-lg rounded-full hover:bg-[#da1010] ml-[105px] lg:ml-0 my-6 m'>Workouts</button></a>
      </div>
      <img src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="..." className=' rounded-3xl' />
    </div>
    <div className='lg:flex lg:justify-between mt-16 lg:mt-20 gap-10'>
      <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=60" alt="..." className=' lg:h-[60vh] lg:w-[75vw] rounded-full'/>
      <div className=' '>
          <h1 className=' text-4xl text-center lg:text-right font-mono pt-8'>The Food Plan</h1>
          <p className='text-xl font-[Poppins] text-center lg:text-right pt-8'>Nutrition is the science and practice of consuming and utilizing nutrients from food for growth, maintenance, and overall health. It plays a crucial role in providing the body with the necessary energy, macronutrients (carbohydrates, proteins, and fats), micronutrients (vitamins and minerals), and other essential compounds needed for optimal functioning.</p>
          <a href="/diet"><button className=' bg-[#3D0000] px-5 py-2 text-white text-lg rounded-full hover:bg-[#da1010] ml-[105px] lg:ml-[570px] my-6 m'> Get Diet </button></a>
      </div>
    </div>
    </div>
  
  </>
  )
}
