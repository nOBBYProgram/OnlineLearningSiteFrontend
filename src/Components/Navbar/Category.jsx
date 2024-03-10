import React, {  useState } from 'react'
import CategoryModal from '../../Modals/CategoryModal'
import { Link, useNavigate } from 'react-router-dom';



const Category = () => {
  const[isModalVisible,setIsModalVisible] = useState(false)
const [authModal, setLoginModal] = useState(false)
const [registerModal,setRegisterModal] = useState(false)
const navigate = useNavigate()
const closeRegisterModal = ()=>{
  setRegisterModal(false)
  setLoginModal(false)
}
let timeOut;
  const handleMouseLeave = ()=>{
   timeOut= setTimeout(() => {
      setIsModalVisible(false)
    }, 300);
  }
  const handleMouseEnter = ()=>{
clearTimeout(timeOut)
setIsModalVisible(true)

  }

  const handleAuthModal = ()=>{
navigate('/login1')
  }


  return (
    <div className='flex flex-col'>
  <div className=' flex 
  w-fit
gap-3
  lg:justify-between'>
 <Link to='/'> <img src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZ298ZW58MHx8MHx8fDA%3D" alt="" className='
 h-9
 lg:h-11
   rounded-lg
   w-24
   hidden
   md:block
   md:w-28
    lg:w-36
     object-cover' /></Link>
         <div className='bg-sky-500 w-10 rounded-lg justify-around cursor-pointer flex flex-col h-10 px-1 py-2 md:hidden'
         onClick={handleAuthModal}>
<div className='border-b-4 border-slate-300'></div>
<div className='border-b-4  border-slate-300'></div>
<div className='border-b-4  border-slate-300'></div>
    </div>
  <span className='text-gray-400 cursor-pointer
   text-base'
    onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}>
    Categories
    </span>
  </div>
 { isModalVisible &&
  <CategoryModal onMouseEnter={handleMouseEnter}
   onMouseLeave={handleMouseLeave}/>}
 
  </div>
  )
}

export default Category
