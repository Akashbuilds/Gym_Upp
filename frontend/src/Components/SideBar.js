import React, { useState } from 'react'
import {RxCross1} from 'react-icons/rx'
import {TbLayoutNavbarExpand} from 'react-icons/tb'
import {AiOutlineHome,AiOutlineInfoCircle,AiOutlineContacts} from 'react-icons/ai'
import {CgGym} from 'react-icons/cg'
//import {GrArticle} from 'react-icons/gr'
import {HiOutlineNewspaper} from 'react-icons/hi'
export default function SideBar() {
    const [cross,Setcross] = useState(false)
  return (
    <>   
    { !cross && ( <div className='bg-[#950101] font-[Poppins] text-white text-xl font-bold fixed  left-0 w-16 h-72
    block lg:hidden rounded-full m-3'>
        <RxCross1 className=' absolute right-3 top-3 cursor-pointer' onClick={(e)=>{Setcross(true)}}/>
        <div className=' absolute top-14 left-5 flex flex-col gap-5'>
            <AiOutlineHome className=' cursor-pointer'/>
            <AiOutlineInfoCircle className=' cursor-pointer'/>
            <CgGym className=' cursor-pointer'/>
            <HiOutlineNewspaper className=' cursor-pointer'/>
            <AiOutlineContacts className=' cursor-pointer'/>
        </div>
    </div> )}
    {/* <div className='bg-[#950101] font-[Poppins] text-white text-xl font-bold fixed  left-0 w-16 h-72
    block lg:hidden rounded-full m-3'>
        <p className=' absolute right-3 top-3' onClick={(e)=>{Setcross(true)}}>X</p>
    </div>    */}
    { cross && (
        <div className='bg-[#950101] font-[Poppins] text-white text-xl font-bold fixed  left-0 w-8 h-16
        block lg:hidden rounded-full m-3'>
            <TbLayoutNavbarExpand className=' absolute top-5 left-[0.35rem] cursor-pointer ' onClick={(e)=>{Setcross(false)}}/>
        </div> )
    }
    </>
  )
}
