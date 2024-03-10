import React, { useEffect, useReducer, useState } from 'react'

import CourseInput from '../../../Inputs/CourseInput'

import Requirement from './Requirement'
import useInputHook from '../../../customHooks/useInputHook'
import Button from '../../Button'
import { MdDelete } from "react-icons/md";
import FormModal from '../../../Modals/FormModal'

const Outcomes = () => {
  const [inputFields,dispatch] = useReducer(useInputHook,[
        {name:'input1',value:'',type:'text',isValid:false,placeHolder:'Define roles and responsiblities'},
        {name:'input2',value:'',type:'text',isValid:false,placeHolder:'Estimate project timelines & budget'},
        {name:'input3',value:'',type:'text',isValid:false,placeHolder:'Estimate project timelines & budget'},
        {name:'input4',value:'',type:'text',isValid:false,placeHolder:'Estimate project timelines & budget'},
    ],
    )
    console.log(inputFields)
    
            

    const {handleAddInput,handleFormData,inputs,handleSave,showForm,err,handleLoadData,handleDelete,handleCloseModal} = useInputHook(inputFields)
    useEffect(()=>{
        const savedFields = JSON.parse(localStorage.getItem('InputFields')) || []
        
        if(savedFields.length > 0){
            handleLoadData(savedFields)
        }
                        },[])

console.log("this si show form",showForm)
  return (
    <div className='bg-slate-100 shadow-lg w-full md:w-3/4 pb-4'>
      {showForm && <FormModal handleCloseModal={handleCloseModal}/>}
      <h1 className='text-3xl font-semibold px-5 sm:px-7 md:px-9 lg:px-11 py-2 sm:py-4  md:py-7'>Intended Learners</h1>
      <div className='w-full border-b-2 border-black'></div>
    <div className='px-3 sm:px-7 md:px-9 lg:px-11  pt-5  lg:pt-7 flex flex-col'>
<h2 className='font-bold'>What will students learn in your course?</h2>
<span className=' w-full text-sm  md:text-base md:w-3/4'>You must enter at least 4 learning objectives or outcomes that learners can expect to achieve after completing your course.</span>
{inputs?.map((field,index)=>(
  <div className='flex items-center' key={field.name}>
<CourseInput
value={field.value}
placeHolder={field.placeHolder}
formData={inputs}
setFormData={handleFormData}
name={field.name}
type={field.type}
/>
<span onClick={()=>handleDelete(field.name)} >
  <MdDelete size={35}  className={`  ml-1 ${inputs.length >= 4? 'cursor-not-allowed opacity-80' :'hover:fill-red-500'}`}/></span>
</div>
))}
 {err && <span className='text-red-500 font-semibold ml-5'>{err}</span>}
 <span className='font-bold text-blue-700 my-5' onClick={()=>handleAddInput('input')}>Add more to your respone</span>
 <span onClick={()=>handleSave("InputFields")}><Button title="save" className="w-fit"/></span>

 </div>
   <Requirement 
   />
    </div>
  )
}

export default Outcomes
