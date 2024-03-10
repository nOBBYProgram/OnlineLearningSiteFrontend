import React from 'react'
import Category from './Category'
import Input from '../Input'
import Auth from './Auth'
import Cart from './Cart'

const Navbar = () => {
  return (
    <div className='bg-white shadow-2xl px-2 lg:px-5 h-20 items-center gap-5 flex justify-start md:justify-around sticky top-0 z-20 '>
      <Category/>
      <Input/>
      <Cart/>
      <Auth/>
    </div>
  )
}

export default Navbar
