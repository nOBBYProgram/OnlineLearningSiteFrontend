import React from 'react'

const Inputs = ({
    placeholder,
    disabled,
    setFormData,
    formData,
    name,
    type
}) => {

  const handleInput = (e)=>{
    setFormData((prev)=>(
      {
        ...prev,
        [name]:e.target.value
      }
    ))
  }
  return (
<input type={type} placeholder={placeholder}
className={`w-full
px-3 py-1 
border-2
rounded-md 
outline-none
text-gray-600
${disabled}`}

value={formData[name]}
onChange={(e)=>handleInput(e)}/>
  )
}

export default Inputs
