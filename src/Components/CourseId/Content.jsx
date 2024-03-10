import React, { useState } from 'react'
import { BsSticky } from "react-icons/bs";
import { IoIosArrowRoundDown } from "react-icons/io";
import { BiUpArrowAlt } from "react-icons/bi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import '../../Styles/LandingPage.css'
const Content = ({curriculum,requirements,courseDesc}) => {
 const [allContent,setAllContent] = useState(false)
const [showOptions,setShowOptions] = useState(false)
const[showAllOptions,setShowAllOptions] = useState(false)
 const handleSeeContent = ()=>{
  setAllContent(!allContent)
 }

 const handleShowOptions = (index)=>{
  setShowOptions(prev =>prev === index ? -1 : index)
 }

   return (
    <div  className='learnings'>
        <div className='flex justify-between my-3 items-center '>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>Course Content</h2>
          <span className='cursor-pointer text-blue-500 font-bold' onClick={()=>setShowAllOptions(!showAllOptions)}>
         {showAllOptions ? "Collapse all sections":"Expand all sections"}</span>
          </div>
      
    <div className='flex flex-col my-3'>
          { curriculum && curriculum.map((item,index)=>(
         <> {!showAllOptions ?  
         (
          <>
            <h2 onClick={()=>handleShowOptions(index)} className='border-2 border-black p-2 font-bold flex justify-between items-center'>{item.title} 
            {showOptions === index ?<FaAngleUp/>:<FaAngleDown />}</h2>
      
            {/* <h2 value="" hidden selected disabled>{item.title}</h2> */}
           
      {showOptions === index  && item.lessons && item.lessons.map((lesson)=>(
          <span className='flex mt-1 items-center' disabled ><BsSticky />{lesson}</span>
          
            ))}
           </>
         )
  
      :
      <>
      <h2  className='border-2 border-black p-2 font-bold flex justify-between items-center'>{item.title} 
      <FaAngleUp/></h2>

      {/* <h2 value="" hidden selected disabled>{item.title}</h2> */}
     
{item.lessons && item.lessons.map((lesson)=>(
    <span className='flex mt-1 items-center' disabled ><BsSticky />{lesson}</span>
    
      ))}
     </>
      
          }
          </>
          ))}
 
    </div>
    <h1 className='text-xl md:text-2xl lg:text-3xl font-bold '>Requirements</h1>
    <ol className='mt-2 mb-5 list-square'>
      {requirements && requirements.map((requirement)=>(
        <li>{requirement}</li>
      ))}
    </ol>
    <h2 className='text-xl md:text-2xl lg:text-3xl text-justify font-bold '>Description</h2>
    {courseDesc && !allContent ? (
      <p className='text-sm md:text-base w-96 md:w-full text-justify'>{courseDesc.substring(0,300)}...</p>
    ):
    (
<p>{courseDesc}</p>
    ) }

   
{!allContent ? (<span className='bg-blue-200 mt-2 px-5 py-1 rounded-lg cursor-pointer flex w-fit items-center' onClick={()=>handleSeeContent()}>See More... <IoIosArrowRoundDown size={25}/></span>):
(
  <span className='bg-blue-200 mt-2 px-5 py-1 rounded-lg cursor-pointer flex w-fit items-center' onClick={()=>handleSeeContent()}>See Less... <BiUpArrowAlt size={25}/></span>
)}


    </div>
  )
}

export default Content
