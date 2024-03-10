import React from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Instructor = ({author,image,biography,id}) => {
  console.log("instriutor renders")
  return (
    <div className='flex flex-col w-3/4 my-3'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Instructor</h1>
      <h2 className='text-base md:text-xl lg:text-2xl text-sky-400 underline cursor-pointer font-semibold'>{author}</h2>
      <span>Mern Developer</span>

      <div className='flex items-center  '>
       <Link to={`/profile/${id}`}> <img src={`${image? image : "python1.jpg"}`} alt="" className='w-9 h-9 md:w-14 md:h-14 rounded-full object-cover' /></Link>
    <span className='flex flex-col items-center leading-3 md:leading-none ml-0 md:ml-2'>
        <small>0 students</small>
        <small>20 reviews</small>
    </span>
      </div>
     {biography ? <p className='text-sm md:text-base w-96 md:w-full text-justify'>{biography}</p> :(<span className='font-semibold'>Additional Information Unavailable</span>)}
      <span className='bg-blue-200 mt-2 px-5 py-1 rounded-lg cursor-pointer flex w-fit items-center' >See More... <IoIosArrowRoundDown size={25}/></span>
    </div>
  )
}

export default Instructor
