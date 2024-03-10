import React, { useEffect, useReducer } from 'react'
import CourseInput from '../../../Inputs/CourseInput'
import Button from '../../Button'
import useInputHook from '../../../customHooks/useInputHook'
import { MdDelete } from 'react-icons/md'
import FormModal from '../../../Modals/FormModal'

const Requirement = () => {

   const[inputFields,dispatch1] = useReducer(useInputHook,[
        {name:'requirement',value:'No need experience.You will learn everything you need to know!',type:'text',isValid:false,placeHolder:"No need experience.You will learn everything you need to know!"}
    ])

    const {handleAddInput,handleCloseModal,showForm,handleFormData,handleSave,err,inputs,handleLoadData,handleDelete} = useInputHook(inputFields)
    console.log("Reuirement indputs",inputs)
    useEffect(()=>{
        const savedFields = JSON.parse(localStorage.getItem('requirementField')) || []
        
        if(savedFields.length > 0){
            handleLoadData(savedFields)
        }
                        },[])
  return (
    <div className=' px-5 sm:px-7 md:px-9 lg:px-11  flex flex-col'>
      {showForm && <FormModal handleCloseModal={handleCloseModal}/>}
        <h2 className='font-bold mt-4'>What are the requirements or prerequisites for taking your course?</h2>
<span className=' w-full text-sm  md:text-base md:w-3/4'>List the required skills, experience, tools or equipment learners should have prior to taking your course.
If there are no requirements, use this space as an opportunity to lower the barrier for beginners.</span>
        {inputs.map((field)=>(
  <div className='flex items-center' key={field.name}>
            <CourseInput
            name={field.name}
            setFormData={handleFormData}
           
            type={field.type}
            placeHolder={field.placeHolder}
            value={field.value}
            />
            <span onClick={()=>handleDelete(field.name)} >
  <MdDelete size={35}  className={`  ml-1 cursor-pointer hover:fill-red-500`}/>
  </span>
  </div>
        ))}
   <span className='font-bold text-blue-700 my-4' onClick={()=>handleAddInput('requirement')}>Add more to your respone</span>
   {err && <span className='text-red-500 font-semibold ml-5'>{err}</span>}
  <span onClick={()=>handleSave('requirementField')}> <Button title="save" className="w-fit bg-blue-600 hover:bg-blue-800 text-white"/></span>
    </div>
   
  )
}
export default Requirement
