import React, { useState } from 'react'
import { FaCircleRight } from "react-icons/fa6";
import { FaCircleLeft } from "react-icons/fa6";
import { testimonials } from '../../testimonials';
const Testimonial = () => {
  const [index,setIndex] = useState(0)

  const handleSlider = (position)=>{
    position === 'right' ? setIndex((prev)=>{
      let newIndex = prev + 1

      if(newIndex >= testimonials.length ){
return 0
      }
      else{
        return newIndex
      }
    }) :
    setIndex((prev)=>{
      const newIndex =prev - 1

      if(newIndex < 0){
        return testimonials.length - 1
      }
      else{
        return newIndex
      }
    })
  }
  return (
    <div className='bg-slate-100 my-7 mx-1 md:mx-16 lg:mx-36 w-full md:w-3/4 p-2 md:p-4 lg:p-7 flex items-center justify-center relative'>
         <FaCircleRight className='absolute right-32 sm:right-9 sm:top-28 md:right-7 md:top-32 lg:right-11 bottom-3 z-40 lg:top-40 cursor-pointer  fill-slate-600 hover:fill-slate-800 ' onClick={()=>handleSlider("right")} size={40} />
         <FaCircleLeft  className='absolute left-64 bottom-3 z-40  sm:left-10 md:left-7 lg:left-11 sm:top-28 md:right-14 md:top-32  lg:top-40 cursor-pointer fill-slate-600 hover:fill-slate-800 'onClick={()=>handleSlider("left")} size={40} fill='gray'/>
        <div className='flex py-4 md:py-11  lg:py-16 rounded-lg scale-105 bg-white  w-full md:w-3/4 justify-around '>
       
<p className='text-sm lg:text-base w-1/2 lg:w-1/2 leading-4 lg:leading-8 px-1 text-justify'>
{testimonials && testimonials[index].desc}
</p>
<div className='flex flex-col w-1/3 gap-3 lg:gap-5 items-center'>

    <img src={testimonials[index].img}  alt="" className='w-16 h-16 lg:w-28 lg:h-28 rounded-full object-cover' />
    <div className='flex flex-col '>
<span className='font-bold text-base lg:text-xl'>{testimonials[index].author}</span>
<small className='text-center'>{testimonials[index].position}</small>
</div>
</div>
        </div>
      
    </div>
  )
}

export default Testimonial

