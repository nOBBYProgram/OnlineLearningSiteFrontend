import React from 'react'

const CourseInput = ({placeHolder,name,setFormData,formData,type,label,sectionName,value}) => {
  return (
    <>
   {label && <label htmlFor="" className='font-bold mb-1'>{label}</label> }
<input type={type}
className='border-2 border-black outline-none px-2 sm:px-3 md:px-5 py-2 md:py-3 rounded-md text-sm md:text-base text-gray-500 mb-3 w-4/5 lg:w-3/4'
placeholder={placeHolder}
name={name}
value={value}
onChange={(e)=>setFormData(name,e.target.value,sectionName)}
 />
 </>
  )
}

export default CourseInput
