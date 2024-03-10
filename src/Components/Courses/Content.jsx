import React, { useContext, useEffect, useState } from 'react'
import Courses from '../Courses'
import FilterPanel from './FilterPanel'
import { SearchContext } from '../../hooks/SearchContext'
import { useLocation } from 'react-router-dom'
import useApiHook from '../../customHooks/useApiHook'
import { BASE_URL } from '../../helper'

const Content = () => {
const[carouselSelected,setCarouselSelected] = useState(false)
const [filterUrl,setFilterUrl] = useState(null)
const[Selected,setSelected]= useState('')
    const carousel = ["Popular","New"]
    const {search} = useContext(SearchContext)
    const location = useLocation()

    const query = new URLSearchParams(location.search)

    const category = query.get('category')
    console.log("This is category",category)
  
    console.log("search",search)
    let url = `${BASE_URL}/course/filterCourses`
    if(category){
      url += `?category=${category}`
    }
    useEffect(() => {
      setFilterUrl(url);
  }, [url]);

    const carouselSelect = (selected)=>{
      console.log("clicked",selected)
      setCarouselSelected(!carousel)

      if(carouselSelect){
        if(selected === 'Popular' ?
        (
          Selected === 'Popular'? setSelected('') : setSelected('Popular')
        )
   :    (
    Selected === 'New'? setSelected('') : setSelected('New')
  ))
console.log("it si here")
const newFilterUrl = selected === 'Popular'? 
(

 `${BASE_URL}/course/popular?category=${category}`
):

`${BASE_URL}/course/latest?category=${category}`

setFilterUrl(newFilterUrl)
      }
      else{
       
setFilterUrl(url)
      }

    }
    useEffect(() => {
      console.log("filter url", filterUrl);
  }, [filterUrl]);

    const{data:carouselData,error:carouselEror,loading:carouselLoading} = useApiHook(filterUrl,'GET',null)
    console.log("csiur",carouselData)
  
    const courseInfo = carouselData?.courses
    console.log("These are course info",courseInfo)
  return (
    <div className='mx-3 sm:mx-7 md:mx-14 lg:mx-16 '>
  {!search && 
  <>  <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold my-8 sm:my-11'>{category} Courses</h1>

      <h2 className='text-3xl my-4 md:my-7 font-bold'>Courses to get you started</h2>
      <div className='flex border-b-2 border-gray-400 pb-3'>
{carousel.map((item)=>(
    <span className={`ml-8 text-xl font-bold  cursor-pointer ${Selected === item ? 'border-b-2 border-black text-black ' : 'text-gray-400'}`} onClick={()=>carouselSelect(item)}>{item}</span>
))}
      </div>

      <Courses
      courseInfo={courseInfo}
      loading={carouselLoading}
      />
            </> 
}

      <FilterPanel/>
    </div>
  )
}

export default Content
