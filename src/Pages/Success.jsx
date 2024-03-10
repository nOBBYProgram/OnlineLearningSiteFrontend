import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdDoneOutline } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";
import axios from 'axios';
import { useSelector } from 'react-redux';
import Button from '../Components/Button';
import { BASE_URL } from '../helper';
const Success = () => {

  const cartItems = useSelector((state)=>state.cart.cartItems)
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const courseId = query.get('courseId')
  const userId = query.get('userId')
console.log(cartItems)
 
const courseArray = courseId.split(',')



const content = {
  userId,
courseArray
}
useEffect(()=>{
  const fetchData = async()=>{
const res = await axios.post(`${BASE_URL}/payment/save-courses`,content)
  }
  if(courseId){
  fetchData()
  }
},[])

  console.log("This is courseID",courseId)
  return (
    <div className='bg-sky-100 h-screen  overflow-y-scroll justify-center items-center flex w-full'>
<div className=' justify-center items-center flex flex-col w-1/2 bg-slate-100  p-7 rounded-md h-4/5 '>
  <span className='bg-white rounded-full p-4'>
<MdDoneOutline className='fill-purple-500 ' size={50}/>
</span>
<span className='text-xl text-gray-400 '>Amazing</span>
<span className='text-2xl text-gray-400  font-semibold'>Congratulation.Payment is Successfull !!</span>

<span className=' text-xl font-bold'>Courses Unlocked:</span>
<div className='flex flex-col w-3/4 '>
{cartItems.map((item)=>(
  <Link to={`/course/${item.id}`}>
  <div className='flex justify-between mt-3 my-1 bg-blue-200 shadow-lg hover:shadow-xl hover:bg-blue-300 px-4 py-2 rounded-md cursor-pointer'>
    <span className='flex items-center '>
      <img src={item.img} alt="" className='w-16 h-16 object-cover rounded-md' />
      <span className='flex flex-col leading-4 ml-2'>
      <h2 className='text-xl font-bold'>{item.author}</h2>
    <p>{item.title}</p>
      </span>
    </span>
    <div className='flex flex-col items-center'>
<b>${item.price}</b>
<FaHandPointRight className='hover:fill-pink-300' size={35}/>
</div>
  </div>
  </Link>
))}
</div>
<Link to='/'><Button title="Go to home" className='hover:bg-slate-300'/></Link>
</div>

</div>
  )
}

export default Success
