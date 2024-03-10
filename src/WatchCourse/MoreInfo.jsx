import React from 'react'
import Lists from './Lists'

const MoreInfo = ({desc,level,length,whatYouWillLearn,requirements}) => {
  console.log("more infdo",desc,level)
  return (
    <div className='px-7 w-3/4'>
      <h2 className='text-2xl text-center mt-3 font-semibold'>About this course!!</h2>
<div className='flex items-center justify-around '>
  <b>By the numerbers:</b>
      <span className='flex flex-col'>
<h2>SkillLevel:{level}</h2>
<p>Language:English</p>


      </span>
      <span>Video Length:{length} Hours</span>
      </div>
      <h2 className='text-2xl text-center mt-3 font-semibold underline'>Description</h2>
      <p>
      Desc:  {desc?.substring(0,400)}...
      </p>
      <h2 className='text-xl text-center mt-3 font-semibold underline'>What you will learn</h2>
      <Lists lists={whatYouWillLearn}/>
      <h2 className='text-xl text-center mt-3 font-semibold underline'>Are there any Course Requirements?</h2>
      <Lists lists={requirements}/>
    </div>
  )
}

export default MoreInfo
