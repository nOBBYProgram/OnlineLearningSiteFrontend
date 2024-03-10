import React, { useState } from 'react'
import Inputs from '../Components/Inputs'
import Button from '../Components/Button'
import { RxCross1 } from "react-icons/rx";

const CurriculumModal = ({title,placeholder,btnTitle,formData,setFormData,name,handleCloseSection}) => {
    const [details,setDetails] = useState([])

    const handleDetails = ()=>{
        setDetails(formData)
      
    }
    console.log("details",details)
  return (
    <div className='h-auto border-2 border-black p-5 flex flex-col gap-3 relative'>
        <span className='cursor-pointer' onClick={handleCloseSection}><RxCross1 />   </span>
     <div className='flex justify-around items-center '>
      <span>{title}</span>
      <Inputs formData={formData}
      setFormData={setFormData}
      name={name}
      placeholder={placeholder}
      />
    </div>
   <span onClick={handleDetails}> <Button title={btnTitle} className='w-fit flex justify-end'/></span>
    </div>

  )
}

export default CurriculumModal
