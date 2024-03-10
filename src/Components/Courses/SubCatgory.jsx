import React from 'react'
import { FaChevronRight } from "react-icons/fa";
const SubCatgory = () => {
    const subCategories = ["Web Development","Mobile Development","Game Development","Programming Language"]
  return (
    <div className='w-full hidden  h-16 md:flex items-center border-y-2 border-black justify-around bg-white shadow-2xl'>
      <h2 className='flex items-center font-bold  text-xl'>Development <FaChevronRight size={70} /></h2>
      {subCategories.map((category)=>(
        <span className='hover:text-blue-500 cursor-pointer border-r-2 px-2 border-black'>{category}</span>
      ))}
    </div>
  )
}

export default SubCatgory
