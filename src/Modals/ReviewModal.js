import React from 'react'
import '../Styles/LandingPage.css'
import { ImCross } from "react-icons/im";
const ReviewModal = ({reviews,onCloseModal}) => {
    console.log("review modal rendered",reviews)
    
  return (
    <div className='absolute flex flex-col -bottom-16  left-1 sm:left-3 bg-slate-100 z-40 p-3 sm:p-5 md:p-7 lg:p-9 gap-2 md:gap-4  lg:gap-5 rounded-lg reviews' >
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold bg-slate-200 w-fit px-1 md:px-3 lg:px-5 rounded-md py-2 md:py-4 lg:py-5'>Total Reviews : {reviews?.length}</h2>
      <span onClick={onCloseModal}>  <ImCross className='right-2   rounded-full tetx absolute top-2 cursor-pointer' size={25}  /></span>

          {reviews && reviews.map((review)=>(
            <div className='flex items-center border-b-2 border-gray-400 pb-1 lg:pb-3 '>
                <img src={review?.img? review?.img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-27cu4ctE5ig-JOt6_8Rw-NdlcGKEXvJSA&usqp=CAU"} alt="" className='w-7 h-7 object-cover rounded-full ' />
                <div className='flex flex-col leading-5 mx-4'>
<span className='font-semibold'>{review?.userId.username}</span>
<span>{review?.review}</span>
<span className='font-semibold'>On :- {new Date(review?.createdAt).toDateString()}</span>
</div>
</div>
          ))}
    </div>
  )
}

export default ReviewModal
