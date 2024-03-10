import React, { useContext, useEffect, useState } from 'react'
import Courses from '../Courses'
import useApiHook from '../../customHooks/useApiHook'
import { SearchContext, SearchProvider } from '../../hooks/SearchContext'
import Loader from '../../Loaders/Loader'
import { BASE_URL } from '../../helper'

const Selection = () => {
    const select = ["Python",'Web Development',"App Development","Javascript"]
    
    const [cat,setCat] = useState("")
    const[renderCourses,setRenderCourses] = useState(false)
 const{search,setSearch,name} = useContext(SearchContext)

 const screenSize = window.innerWidth
 console.log("This is home sarch",name)
 
    const {data,loading,error} = useApiHook(`${BASE_URL}/course/category?cat=${cat}`,'GET',null)

    useEffect(()=>{
let timeout = setTimeout(() => {
  setRenderCourses(true)
}, 1000);

return () => clearTimeout(timeout); 
    },[loading])


    const handleCategorySelect = (item)=>{
      if(cat === item){
        setCat('')
      }
      else{
setCat(item)
      }
    }
    const desc ="Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to"
  return (
    <div className='flex flex-col gap-1 md:gap-3 lg:gap-4 lg:my-7 my-3 md:my-5 '>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-900'>A Board Selection Of Courses</h2>
      <span className='text-sm md:text-base lg:text-xl text-gray-700'>Choose from over 210,000 online video courses with new additions published every month</span>
<div className='flex gap-4 md:gap-9 lg:gap-14 my-2'>
      {select.map((item)=>(
       
           <span className={`font-semibold text-base lg:text-xl cursor-pointer hover:text-black ${cat === item? "text-black" : "text-gray-400"}`} key={item} onClick={()=>handleCategorySelect(item)}> {screenSize > 480 ? item : item.substring(0,11)}</span>
        
      ))}
      </div>
      {
        !renderCourses ?( <Loader/>)
        :
        error? (error.message)
        :

    ( renderCourses &&  <Courses
      header={!cat?"Expand your Carrrer Opportunities" : `Expand your Carrer Opportunities with ${cat}` }
      desc={desc}
      showButton={true}
      cat={cat}
      loading={loading}
  courseInfo={data?.matchedCategory}
      />
    )
}
    </div>
  )
}

export default Selection
