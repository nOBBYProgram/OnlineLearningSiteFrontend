import React from 'react'
import { Link } from 'react-router-dom'

const FormModal = ({handleCloseModal,title,subtitle}) => {
  return (
    <div className="bg-sky-300 p-7 w-96 h-64 rounded-lg fixed top-1/3 right-1/3">
    <div className="flex p-2 gap-1">
      <div className="">
        <span className="bg-teal-500 inline-block center w-3 h-3 rounded-full"></span>
      </div>
      <div className="circle">
        <span className="bg-orange-500 inline-block center w-3 h-3 rounded-full"></span>
      </div>
      <div className="circle">
        <span className="bg-indigo-500 box inline-block center w-3 h-3 rounded-full"></span>
      </div>
    </div>
    <div className="card__content mt-5 text-center text-xl font-semibold">
    
  {title? title : " Form has been Saved very Successfully!"} 
    <br/>
  
    </div>
    {subtitle ?
      <Link to='/login1'> <span className='mt-11 bg-red-200 flex justify-center font-bold text-blue-800 cursor-pointer py-3 rounded-md' onClick={handleCloseModal}>
      Go to Login </span></Link>:
          <span className='mt-11 bg-red-200 flex justify-center font-bold text-blue-800 cursor-pointer py-3 rounded-md' onClick={handleCloseModal}>
          Okey</span>}
    
  </div>
  
  )
}

export default FormModal
