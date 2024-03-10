import axios from 'axios';
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { BASE_URL } from '../helper';
import { ImCross } from "react-icons/im";
import '../Styles/LandingPage.css'
const RateCourseModal = ({_id,id,setShowRateModal}) => {
    const [userRating, setUserRating] = useState(0);
    const handleStarClick = async(star)=>{
        setUserRating(star)
        
        const content = {
          rating:star,
        userId:_id,
        courseId:id
        }
        setTimeout(() => {
            setShowRateModal(false)
        }, 1000);

      
        try {
          const response = await axios.post(`${BASE_URL}/course/ratings`, content, {
            headers: {
              'Content-Type': 'application/json',
            },});
      
          if (response.data.success) {
            // Handle success, if needed
            console.log('Rating added successfully');
          } else {
            // Handle failure, if needed
            console.log('Failed to add rating');
          }
        } 
        catch(err){
          console.log(err)
        }
      }
  return (

         <label className='text-blue-500 z-50 w-96 flex flex-col bg-slate-100 fixed rateCourse h-36 text-center px-5 gap-2 shadow-xl rounded-xl items-center justify-center font-bold  italic'>
            <span className='bg-gray-200 px-2 py-2 absolute right-2 top-2 rounded-full cursor-pointer hover:bg-gray-400' onClick={()=>setShowRateModal(false)}><ImCross /></span>
      <p className='text-2xl font-bold'>  Rate this course:</p>
        <div className='flex'>
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={34}
            color={star <= userRating ? '#ffc107' : '#e4e5e9'}//sets the color to yellow if the value of stai is less or equal to userrating
            style={{ marginRight: '5px', cursor: 'pointer' }}
            onClick={() => handleStarClick(star)}
          />
    
        ))}
             </div>
      </label>
    

  )
}

export default RateCourseModal
