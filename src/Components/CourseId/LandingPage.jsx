import React from 'react'
import { TiTick } from "react-icons/ti";
import '../../Styles/LandingPage.css'
const LandingPage = ({lessons}) => {
    
  return (
    <div className=' border-2  py-3 learnings  border-black my-1  lg:my-12'
    >
      <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-center'>What you'll learn</h2>

      <div className='flex flex-wrap justify-between px-2'>
{lessons && lessons.map((item)=>(
    <span className='w-2/5 text-sm mt-4 flex items-center font-semibold'>
      <TiTick size={25} />{item}</span>
))}
      </div>
    </div>
  )
}

export default LandingPage
