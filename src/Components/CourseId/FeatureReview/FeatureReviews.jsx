import React, { useEffect, useState } from 'react'
import useApiHook from '../../../customHooks/useApiHook'
import { BASE_URL } from '../../../helper'
const FeatureReviews = ({courseId}) => {
    const [featured,setFeatured] = useState(null)
 const {data,error,loading} = useApiHook(`${BASE_URL}/featured/featuredReview/${courseId}`)
 console.log("This is featured Review",data)
 useEffect(()=>{
if(data){
    setFeatured(data?.review)
}
 },[data])
 console.log("statetaet",featured)
 console.log("image",featured?.reviewId?.userId?.image)
 console.log("length",featured?.length)
  return (
    <> 
    {
    featured && featured.length >=1  && featured.map((item)=>(
    
    <div className='w-1/2 border-2 border-black p-7 mt-4'>
<h2 className='font-bold text-3xl underline mb-4'>Featured Review</h2>
<span className='flex gap-3 '>
    <img src={item?.reviewId?.userId?.image} alt="" className='w-14 h-14 rounded-full object-cover' />
    <span className='font-semibold flex flex-col leading-4'>{item.reviewId.userId?.FirstName? item.reviewId.userId.FirstName + " " + item.reviewId.userId.LastName : item?.reviewId?.userId?.username}
        <small>{new Date(item?.reviewId?.createdAt).toLocaleDateString()}
</small>
    </span>

   
    </span>      
    <p className='mt-2 ml-7'>{item.reviewId.review}</p>
    </div>
  ))
  }
    </>
  )
}
  

  


export default FeatureReviews
