import React, { useEffect, useReducer } from 'react'
import CourseInput from '../../Inputs/CourseInput'
import Button from '../Button'
import useInputHook from '../../customHooks/useInputHook'

const Curriculum = () => {

  useEffect(()=>{
const savedCurriculum = JSON.parse(localStorage.getItem('curriculum')) || []

if(savedCurriculum.length > 0){
  handleLoadData(savedCurriculum)
}
  },[])
  const [inputFields,dispatch] = useReducer(useInputHook,[
    {name:'section1',type:'text',value:'',isValid:false,placeholder:'Enter the title',lessons:[
      {name:'lesson1',type:'text',content:'',isValid:false,placeholder:'Enter the lesson'}
    ]}
  ]
  )

const {addlesson,handleAddInput,handleFormData,handleSave,err,inputs,handleLoadData,handleLessonField} = useInputHook(inputFields)

console.log("section fields",inputs)
  return (
    <div className='bg-slate-100 shadow-lg w-full md:w-3/4 pb-4'>
    <h1 className='text-3xl font-semibold  px-5 sm:px-7 md:px-9 lg:px-11 py-2 sm:py-4  md:py-7'>Curriculum</h1>
    <div className='w-full border-b-2 border-black'></div>
  <div className=' px-5 sm:px-7 md:px-9 lg:px-11 pt-5  lg:pt-7 flex flex-col'>
  <span >Start putting together your course by creating sections, lectures and practice activities (quizzes, coding exercises and assignments). Use your course outline to structure your content and label your sections and lectures clearly. If you’re intending to offer your course for free, the total length of video content must be less than 2 hours.</span>
    </div>
{inputs?.map((field)=>(
  <div className='border-2 border-black p-4 mb-11 mx-5'>
  <CourseInput
  name={field.name}
value={field.value}
  setFormData={handleFormData}
type={field.type}
placeHolder={field.placeholder}
  />
  {field?.lessons?.map((lesson)=>(
    <CourseInput
    name={lesson.name}
    sectionName={field.name}
   value={lesson.content}
    placeHolder={lesson.placeholder}
  setFormData ={handleLessonField}
    />
  ))}
   <span onClick={()=>addlesson(field.name)}>
    <Button title="Add_Lesson" className="bg-gray-600 text-white hover:bg-gray-800"/>
   </span>
   
  </div>
))}
<span onClick={()=>handleAddInput('section')}>
  <Button title="Add Section" className="bg-gray-600 text-white hover:bg-gray-800"/>

</span>
<span onClick={()=>handleSave("curriculum")}><Button title="Save" className="bg-blue-600 text-white hover:bg-blue-800"/>
{err && <p className='mx-6 mt-4 text-red-500 font-semibold'>Please fill all fields!!</p>}</span>

  </div>

  )
}

export default Curriculum
