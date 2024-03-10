import React, { useContext, useEffect, useState } from 'react'

import { FaStar } from 'react-icons/fa'
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { SearchContext } from '../hooks/SearchContext'
import { useDispatch } from 'react-redux'
import {  removeItem } from '../reducer/cartReducer'
import { Link } from 'react-router-dom'
import { addToLoveList } from '../reducer/loveReducer'
import NoCourseUI from '../UI/NoCourseUI';
const FilterCourses = ({
Courses,
 moreOptions,
 cart
}) => {
// console.log("Filter courses",Courses)
const[startIndex,setStartIndex] = useState(0)
  const {search} = useContext(SearchContext) || {}
  const dispatch = useDispatch()
  const screenSize = window.innerWidth
  const handleRemove = (id)=>{
dispatch(removeItem(id))
  }
const addToWishList = (course)=>{
  dispatch(addToLoveList({
    id:course.id,
    price:course.price,
    author:course.author,
    rating:course.averageRating,
    title:course.title,
    level:course.level,
    img:course.img,
    time:course.time
  }))
}

useEffect(()=>{
window.scrollTo(0,0)
},[])

const handleIndex = (item)=>{
item === "next"? setStartIndex(startIndex + 3) : setStartIndex(startIndex - 3)
}
// console.log("startIndx"+startIndex)
//   console.log("Filter courses",Courses)
  return (
    <div >
       {!moreOptions && search && <h2 className='my-12 text-center font-bold text-2xl md:text-3xl lg:text-4xl'>{Courses?.length} results for "{search}"</h2>}
  {Courses && Courses.length > 0 ? ( Courses.slice(startIndex,5+startIndex).map((course)=>(
    <div className='w-full flex justify-around my-0 md:my-4 border-b-2 border-black pb-3'>
    
    <div className=' flex w-full  md:w-3/4 gap-5 items-center'>
      {cart ?  (<img src={course.img} alt="" className='w-28 h-20 object-cover'/> ):  (<img src={course.img} alt="" className='w-24 sm:w-32 md:w-56 md:h-56 lg:w-72 h-24 object-cover'/>)} 
     <Link to={`/course/${course._id}`}>   <div className='flex flex-col'>
        <h2 className='font-bold text-base  md:text-xl'>{course.title}</h2>
        {course?.desc && <p className=' leading-5 text-sm md:text-base md:leading-6'>{course?.desc?.substring(0,100)}...</p>}
        <small>{course.author}</small>
        <span>
        <label className='text-sm md:text-base flex'>AverageRating :
      {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={24}
            color={star <= course.averageRating ? '#ffc107' : '#e4e5e9'}//sets the color to yellow if the value of stai is less or equal to userrating
            style={{ marginRight: '5px', cursor: 'pointer' }}
            />
       ))} {course.averageRating}</label>
        </span>
        <span><b className='bg-slate-300 px-2  rounded-full'>{course.time}</b> Total hours<small className='mx-2'>{course.level}</small></span>
        </div></Link>
      
    </div>
 {screenSize > 600 ? 
 (
  <div className='flex md:flex-col cursor-pointer'>
   {!cart &&  <span className='font-bold text-xl '> {course.price === 'free' ? 'Free':"$" + course.price}  </span>}
     {moreOptions &&
     <>
     <span className='text-blue-500 font-semibold text-center' onClick={()=>handleRemove(course.id)}>Remove</span>
     <span className='text-blue-500 font-semibold mt-1' onClick={()=>addToWishList(course)}>Move to wishlist</span>
     </>}
     </div>
 )
 :
 (
  ''
 )
}
    </div>
  ))):(
<NoCourseUI/>
  )}
  <div className='flex justify-center gap-3 mt-1'>
  <span className={`bg-gray-300 p-3 rounded-full ${startIndex<=0? 'hidden' : ''} cursor-pointer hover:bg-gray-500`} onClick={()=>handleIndex("prev")}><TbPlayerTrackPrevFilled /></span>
  <span className={`bg-gray-300 p-3 rounded-full cursor-pointer hover:bg-gray-500 ${startIndex+3 >= Courses?.length? 'hidden':''}`}  onClick={()=>handleIndex("next")}><TbPlayerTrackNextFilled /></span>
  
  </div>
    </div>
  )
}

export default FilterCourses
