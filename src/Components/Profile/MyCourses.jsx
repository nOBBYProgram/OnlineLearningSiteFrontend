import React from 'react'
import { Link } from 'react-router-dom'

const MyCourses = ({courseDetails}) => {
    console.log("my courses",courseDetails)
  return (
    <><span className='font-bold'>My Courses  ( {courseDetails?.length} )</span>
   <div className='flex  justify-between flex-wrap'>
      {courseDetails && courseDetails.map((course)=>(
      <Link to={`/course/${course._id}`}>  <div className='flex flex-col leading-5' key={course._id}>
            <img src={course.img} className='w-72 h-40 object-cover' alt="" />
            <span className='font-semibold'>{course.title}</span>
            <small>{course.author}</small>
            <div className='flex'>
                <span>{course.time} Total hours</span>
                <b>{course.level}</b>

            </div>
            <span className='font-bold'>$ {course.price}</span>
        </div>
        </Link>
      ))}
    
    </div>

    </>
  )
}

export default MyCourses
