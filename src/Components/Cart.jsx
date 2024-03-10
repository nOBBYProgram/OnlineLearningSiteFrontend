import React from 'react'
import Navbar from './Navbar/Navbar'
import Button from './Button'
import FilterCourses from './FilterCourses'
import { useSelector } from 'react-redux'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import usePaymentHook from '../customHooks/usePaymentHook'

const Cart = () => {
    const {handlePayment} = usePaymentHook()
    const totalItems = useSelector((state)=>state.cart.totalItems)
    const cartItems = useSelector((state)=>state.cart.cartItems)
    const totalAmount = useSelector((state)=>state.cart.totalAmount)
  return (
    <>
    <Navbar/>
        <div className='w-full flex  h-1/2 overflow-y-scroll justify-center'>
      <div className='w-1/2 mt-14  flex flex-col'>

<h2 className='font-bold text-5xl'>Shopping cart</h2>
<span className='mt-12'>{totalItems} courses in cart</span>
{totalItems && totalItems > 0 ?(
  <>
  <div className='border-2 border-black flex flex-col justify-around h-auto px-5 bg-slate-100'>

<FilterCourses
Courses={cartItems}
moreOptions={true}
cart={true}
/>

</div>
<div className='flex flex-col mt-5 gap-3'>
    <div className='flex justify-between font-bold text-4xl'>
<h2 className='text-gray-400 '>Total:</h2>
<span >${totalAmount}</span>
</div>
<span onClick={handlePayment}><Button
title="Checkout"
className="bg-purple-400"/>
</span>
</div>

</>
):
(
  <div className='border-2 border-black py-7 px-2 flex flex-col gap-5 items-center'>
<img src="https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg" 
className='w-56 h-56'
alt="" />
<p>Your cart is empty. Keep shopping to find a course!</p>
<Link to='/'><Button
title="Keep Shopping"
className="bg-blue-500 text-white hover:bg-blue-700 cursor-pointer"
/></Link>
</div>
)}


      </div>

    </div>
    <Footer/>
    </>

  )
}

export default Cart
