import React, { useState } from 'react'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../reducer/authReducer'
import RegisterPage from '../../Authentication/Register'
import { ImProfile } from "react-icons/im";

import { Link } from 'react-router-dom'

const Auth = () => {
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
  const user = useSelector((state)=>state.auth.user)
  const totalItems = useSelector((state)=>state.cart.totalItems)
  const[authtModal,setAuthModal] = useState(false)
const[registerModal,setRegisterModal] =useState(false)
const[loginModal,setLoginModal]=useState(false)

  let timeout;


  const handleProfileMouseEnter = ()=>{
    clearTimeout(timeout)
setAuthModal(true)
  }
  const handleProfileMouseLeave = ()=>{
 timeout=   setTimeout(() => {
      setAuthModal(false)
    }, 300);
  }
const closeRegisterModal = ()=>{
  setRegisterModal(false)
}
  console.log("auth",authtModal)
  return (
    <>
    <div className='lg:flex hidden relative'>
   
      {isAuthenticated ? (
        <>
        <img src={user?.image? user?.image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqaXuDU4G98seDRExTo45MyLODj-BoCBnKQ&usqp=CAU"} alt="" className='w-14 h-14 cursor-pointer object-cover rounded-full' onMouseEnter={handleProfileMouseEnter}
        onMouseLeave={handleProfileMouseLeave}/>
        {authtModal && <AuthenticatedModal user={user} handleProfileMouseEnter={handleProfileMouseEnter}
        handleProfileMouseLeave={handleProfileMouseLeave } 
        totalItems={totalItems}/>}
        </>
      ):(
     <>
 <Link to="/login1"> <Button title="Login" className="text-black"/></Link>
<Link to="/register1"> <Button title="Signup" className="bg-gray-700 ml-3"/></Link>
      </>
      )
    
}

    </div>

    </>
  )
}

const AuthenticatedModal = ({user,handleProfileMouseEnter,handleProfileMouseLeave,totalItems})=>{
  const totalLoveItems = useSelector((state)=>state.love.totalLoveItems)
  const dispatch = useDispatch()
  return(
  <div className='w-96 h-auto py-6 absolute  right-5 bg-slate-200 flex flex-col gap-5 px-4 'onMouseEnter={handleProfileMouseEnter}
  onMouseLeave={handleProfileMouseLeave} style={{top:'69px'}}>
    <div className='flex items-center px-4 '>
    <img src={user?.img? user?.img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqaXuDU4G98seDRExTo45MyLODj-BoCBnKQ&usqp=CAU"} alt="" className='w-20 h-20 cursor-pointer object-cover rounded-full' />
    <span className='flex flex-col ml-3 leading-5'>
<h2 className='text-2xl font-bold'>{user?.username?.charAt(0).toUpperCase() + user?.username?.slice(1)}</h2>
<small>{user?.email}</small>
    </span>

    </div>
<span className='border-b border-black '></span>
<Link to='/cart'><span className='flex justify-between items-center hover:bg-slate-100 px-2 py-1 rounded-md cursor-pointer'>My cart
<small className='bg-blue-500 text-white px-2 py-1 rounded-full'>{totalItems}</small></span></Link>
<Link to='/wishList'><span className='flex justify-between items-center hover:bg-slate-100 px-2 py-1 rounded-md cursor-pointer'>WishList
<small className='bg-blue-500 text-white px-2 py-1 rounded-full'>{totalLoveItems}</small></span></Link>
<Link to='/editProfile'><span className='flex justify-between items-center hover:bg-slate-100 px-2 py-1 rounded-md cursor-pointer'>Edit Profile
<ImProfile size={25} className='hover:fill-blue-400'/>
</span></Link>
<span className='border-b border-black '>

</span>
<span className='hover:bg-slate-100 p-2 rounded-md cursor-pointer' onClick={()=>dispatch(logout())}>Logout</span>


  </div>
  )
}

export default Auth
