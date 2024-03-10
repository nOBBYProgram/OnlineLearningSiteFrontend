import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";
import CategoryItems from '../Components/CategoryItems';
const CategoryModal = ({onMouseEnter,onMouseLeave}) => {
  const [secondModal,setSecondModal] = useState(false)
  const [category,setCategory] = useState("")
const cat = ["Development","Services","Business","IT"]
const development = ["Web Development","App Development"]
const services =["Internship","Job Placement","Alloance","Insurance"]
const business =['Enterpreneurship','Communication','Sales']
const IT =['IT certification','Network and security',"Hardware"]
  const handleSecondModal = (item)=>{
    setSecondModal(true)
    
  }
  const handleItem = (item)=>{
    switch(item){
      case "Development":
       return(
         <CategoryItems category={development}/>
       )
       case "Services":
        return(  
          <CategoryItems category={services}/>
        )
        case "Business":
          return(
            <CategoryItems category={business}/>
          )
          case "IT":
            return(
              <CategoryItems category={IT}/>            )
        default :
       <h2> 
       I am a default
       </h2>
    }
  }
  return (
    <div className='flex absolute -z-10 text-sm  left-48' style={{
      "top":"81px"
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>
    <div className='bg-white md:flex flex-col w-60 cursor-pointer p-4 border-r-2 border-gray-700 hidden  '
   >
      {cat.map((item)=>(
      <span className='flex items-center justify-between mb-4 hover:bg-slate-100 px-2 py-1  rounded-md' onMouseEnter={()=>{handleSecondModal()
      setCategory(item)}}>{item} <FaAngleRight /></span>))}
   
    </div>
    {secondModal &&<div className='bg-white  px-4 w-60 py-2'>
    { handleItem(category)}
    </div>}
    
    </div>
  )
}

export default CategoryModal
