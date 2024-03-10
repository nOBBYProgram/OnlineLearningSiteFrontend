import React, { useEffect, useState } from 'react'

import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import useApiHook from '../../customHooks/useApiHook'
import { BASE_URL } from '../../helper';
import { Link } from 'react-router-dom'
const Achievements = () => {
  const [featured,setFeatured] = useState([])
  const[startIndex,setStartIndex]= useState(1)
  const{data,error,loading} = useApiHook(`${BASE_URL}/featured/all`)

  useEffect(()=>{
if(data){
  setFeatured(data.featureReviews)
}
  },[data])
  const handleSlider = (step)=>{
{step === 'prev' ? setStartIndex(startIndex - 1) :setStartIndex(startIndex + 1)}
  }
  console.log("These are feature reviews",featured)
  return (
    <div className=' bg-slate-100 pl-5 md:p-7 relative  lg:p-11'>
        <h2 className='text-xl lg:text-2xl font-bold mb-4 lg:mb-6'>How learners like you are achieving their goals</h2>
        <span className={`absolute top-52 left-7 cursor-pointer ${startIndex === 0?  'hidden' : ''}`}  onClick={()=>handleSlider('prev')}><FaChevronCircleLeft size={40}/></span>
     <span  className={`absolute top-52 right-7 cursor-pointer ${featured.length < startIndex + 4 ? 'hidden' : ''}`} onClick={()=>handleSlider('next')}>  <FaChevronCircleRight size={40}/> </span>
    <div className='flex gap-2 lg:gap-4 overflow-hidden'>
  
    {featured && featured.length > 0 && featured.slice(startIndex,startIndex + 4).map((achivement)=>(
      <div className='flex flex-col w-60 md:w-72 lg:w-96 bg-white border-black border-2 gap-2 lg:gap-4 p-2 md:p-3 lg:p-6  flex-shrink-0 flex-wrap '>
          <span className='text-sm lg:text-base text-gray-700'>{achivement.reviewId.review}</span>
          <h2 className='flex  items-center font-bold gap-1 '>
               <img src={achivement.reviewId.userId.image  ? achivement.reviewId.userId.image : 
                "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"} alt="" className='bg-gray-600 py-1 rounded-full px-1 w-14 h-14 object-cover' />
               {achivement.reviewId.userId.FirstName?
               achivement.reviewId.userId?.FirstName?.charAt(0).toUpperCase() 
                     +    achivement.reviewId.userId.FirstName.slice(1) + " " +
                     achivement.reviewId.userId?.LastName?.charAt(0).toUpperCase() 
                     +    achivement.reviewId.userId.LastName.slice(1)
               :
                achivement.reviewId.userId.username }
               </h2>
               

      <div className='border-2 border-b-gray-500'></div>
      <Link to={`/course/${achivement?.courseId?._id}`}>    <span className='text-sm lg:text-base font-bold text-blue-500 cursor-pointer'>{achivement?.courseId?.title}</span></Link>
      </div>
    
    ))}
  </div>
  </div>
  )
}

export default Achievements
