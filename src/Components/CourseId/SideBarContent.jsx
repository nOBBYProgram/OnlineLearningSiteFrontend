import React, { useEffect, useState } from 'react'
import Button from '../Button'
import axios from 'axios'
import { FaPlayCircle } from "react-icons/fa";
import { BsSticky } from "react-icons/bs";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import usePaymentHook from '../../customHooks/usePaymentHook';
import { addItem } from '../../reducer/cartReducer';
import { BASE_URL } from '../../helper';
const SideBarContent = ({image,price,includes,courses}) => {

  const {handlePayment} = usePaymentHook()
  const {id} = useParams()
  const _id = useSelector((state)=>state.auth.user?._id ?? "6597adac3ced8d07a6d9355f")
const[hasUserPurchased,setHasUserPurchased] = useState(false)
const dispatch = useDispatch()
  useEffect(()=>{
const fetchData = async ()=>{
const res = await axios.get(`${BASE_URL}/payment/check-payment?userId=${_id}&courseId=${id}`)
console.log(res.data)
setHasUserPurchased(res.data.hasUserPurchased)
}
fetchData()
  },[])
  const handleCart = ()=>{
    dispatch(addItem(
      {id:courses._id,
      price:courses.price,
      author:courses.author,
      rating:courses.averageRating,
      title:courses.title,
      level:courses.level,
      img:courses.img,
      time:courses.time
    }
    ))
        }
  console.log("side bar contetns",courses)
  console.log("user has purchased",hasUserPurchased)
  return(
    <div className='hidden md:w-64 lg:w-80 md:block bg-slate-100 h-fit scale-105 shadow-2xl ml-5 fixed right-16 z-30 top-24'>
      <img src={image} className='h-52 w-full bg-orange-400 py-1  object-cover' alt="" />
      <div className='flex flex-col gap-3 px-3'>
   <h1 className='text-2xl font-bold'>{price === 'free' ? "FREE" : "$"+ price} 
   {hasUserPurchased ? 
   (
   <small className='bg-purple-200 px-6 ml-3 text-green-600 text-base rounded-lg'>Paid</small>
   )
   :
   (
    ''
    )
  }
    </h1>
  <span onClick={handleCart}> <Button title="Add to cart" className="bg-blue-400"/></span>
   {hasUserPurchased ? (
  <Link to={`/watchVideo/${id}`}>
    <span className='flex items-center'> 
    <Button title="Start Watching Video"icon={<FaPlayCircle size={30}/>} className='outline-none'/>
    </span>
    </Link>
   ) :
   (<span onClick={handlePayment}><Button title="Buy now"/></span>)
   }

   <h2 className='font-bold'>This course includes</h2>
   {includes && includes.map((item)=>(
<span className='flex items-center gap-2'><BsSticky />{item}</span>
   ))}
    </div>
    </div>
  )
}

export default SideBarContent
