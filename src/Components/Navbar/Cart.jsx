import React from 'react'
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Cart = () => {
  const totalItems = useSelector((state)=>state.cart.totalItems)
const totalLoveItems = useSelector((state)=>state.love.totalLoveItems)
  return (
    <div className=' gap-5 relative cursor-pointer hidden lg:flex'>
      <Link to='/courseRegister'><b>Teach on Slack</b></Link>
   <Link to='/cart'> 
    <BsCart2 size={40}className='hover:fill-purple-800'/>
   <small className='bg-blue-500 rounded-full absolute py-1 px-2 font-bold  -top-2 right-14 '>{totalItems}</small>
   </Link>
   <Link to='/wishList'> <FaRegHeart size={40} className='hover:fill-purple-800' />
   <small className='bg-blue-500 rounded-full absolute py-1 px-2 font-bold  -top-3 -right-3'>{totalLoveItems}</small></Link>
    </div>
  )
}

export default Cart
