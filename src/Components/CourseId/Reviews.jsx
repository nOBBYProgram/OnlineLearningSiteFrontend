import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineSend } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import useApiHook from '../../customHooks/useApiHook';

import Button from '../Button';
import { useSelector } from 'react-redux';
import { IoStarSharp } from "react-icons/io5";

import ReviewModal from '../../Modals/ReviewModal';
import { BASE_URL } from '../../helper';
import FeatureReviewError from './FeatureReview/FeatureReviewError';
  const Reviews = (  {createrId}) => {
  const _id = useSelector((state)=>state.auth.user?._id ?? "6597adac3ced8d07a6d9355f")

console.log("This is cerater id",createrId)
    const [value,setValue] = useState('')
    const[stars,setStars] = useState('')
    const[err,setError] = useState('')
    const[success,setSuccess] = useState('')
    const [reviews,setReviews] = useState([])
    const[reviewModal,setReviewModal] = useState(false)
    const [startIndex,setstartIndex] = useState(0)
const {id} = useParams()
    const handleReview =async()=>{
      const review ={
        userId:_id || "6597adac3ced8d07a6d9355f",
        courseId:id,
        review:value,
        
      }

      const response =await axios.post(`${BASE_URL}/review/create`,review)

      if(response.data.success){
        console.log("Review added Successfully!!")
        console.log(response.data)
   setReviews((prev)=>[...prev,response.data.newReview ])
      }
      else{
        console.log("Internal Server Error!!")
      }
      setValue('')
    }

    const userId= _id;
    const courseId = id

    const {data:reviewsData,error,loading} = useApiHook(`${BASE_URL}/review/getReview/${id}`)
    const {data:ratingsData,error1,loading1} = useApiHook(`${BASE_URL}/course/userRating/${userId}/${courseId}`)
 

useEffect(()=>{
if(reviewsData?.reviews){
  setReviews(reviewsData?.reviews)
  console.log("reveiws",reviewsData)
}
if(ratingsData?.userRating?.value){
  setStars(ratingsData?.userRating?.value)
}
},[reviewsData,ratingsData?.userRating?.value])

const onCloseModal = ()=>{
  setReviewModal(false)
}

const handleFeature = async (reviewId)=>{
  console.log("Tis is review",reviewId)
  const content = {
    userId:_id,
    reviewId:reviewId,
    courseId:courseId
  }
  try{
  const response = await axios.post (`${BASE_URL}/featured/createFeatured?userId=${createrId}`,content,{
    headers:{
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    }
  })
  if(response.data.success){
    console.log("Review Feaured Sucessfully")
    setSuccess("Review have been Featured Successfully!")
  }
  else {
    // Check if the error response indicates unauthorized access (401)
    if (response.status === 401) {
      setError('Only the creater of this course can perform this action!!');
      console.log(err)
    } else {
      setError(response.data.message); // Set other error messages if available
    }
  }

}
catch(err){
  console.log(err)
  if (err.response && err.response.status === 401) {
    console.log('Unauthorized access');
    setError('Only the creater of this course can perform this action!!');
  } else {
    setError('An error occurred while processing your request.');
  }
}
}
const closeFeatureError = ()=>{
  setError(null)
  setSuccess(null)
}
  return (
    <>
  
    <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>{reviews?.length} Reviews</h1>
    <div className='flex flex-wrap justify-between relative w-4/5 md:w-3/4 gap-1  border-2 border-gray-500 py-5 px-3 mt-4 mb-7'>
 {err && <FeatureReviewError message={err} color='bg-red-500' onClose={closeFeatureError}/>}
 {success && <FeatureReviewError message={success} color='bg-green-500' onClose={closeFeatureError}/>}
   {reviews.length > 0? ( reviews && reviews.slice(startIndex,startIndex + 4).map((item)=>(
        <div className='flex flex-col w-full  md:w-2/5 border-t-2 border-black p-0'>
<div className='flex items-center '>
<img src={item?.img? item?.img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-27cu4ctE5ig-JOt6_8Rw-NdlcGKEXvJSA&usqp=CAU"} alt="" className='w-11 h-11 md:h-16  md:w-16 lg:w-20 lg:h-20 object-cover rounded-full'/>

<span className='flex flex-col items-center ml-2'>
<small>{item?.userId.username}</small>
{stars !==undefined && 
<div className='flex '>
{[1,2,3,4,5].map((star)=>(

<IoStarSharp 
  className={`${star < stars + 1 ? 'fill-yellow-500':'fill-slate-300'}`} />
  
))}
</div>
}
<small>{new Date (item?.createdAt).toDateString() }</small>
</span>

<span className='ml-14 cursor-pointer relative leading-3 flex flex-col items-center hover:text-blue-600' onClick={()=>handleFeature(item._id)}><IoStarSharp size={20} className='fill-slate-400 hover:fill-blue-400'/><small className='font-semibold' >Add  Featured</small>

</span>
</div>

<p className='text-sm md:text-base' >{item?.review}</p>

        </div>
      ))):(
        <span>No reviews yet...</span>
      )}  
    {reviewModal && <ReviewModal reviews={reviews} onCloseModal={onCloseModal}/>}
    </div>
    <span onClick={()=>setReviewModal(true)}><Button title="See more Reviews..." /></span>

  
    <div className='border-b-2 w-4/5 md:w-3/4 mt-4  border-gray-400 relative'>
<input type='text' value={value} onChange={(e)=>setValue(e.target.value)} className='outline-none w-full p-2 text-gray-500' placeholder='Write a review..'/>
<AiOutlineSend className='absolute right-1 bottom-1 cursor-pointer' size={25} onClick={()=>handleReview()} />

    </div>
    </>
  )
}

export default Reviews
