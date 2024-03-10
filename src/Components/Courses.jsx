import React, { useContext, useEffect, useState } from 'react'
import Button from './Button'
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import PopOverModal from '../Modals/PopOverModal';
import { FaStar } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import NoCourse from '../Loaders/NoCourse'
import { SearchContext } from '../hooks/SearchContext';
import Loader from '../Loaders/Loader';
const Courses = ({
    header,
    desc,
    courseInfo,
      showButton,
      cat,
      loading,
      search
  
}) => {
  const[openModal,setOpenModal] = useState(false)
const[modalInfo,setModalInfo] = useState(null)
const[startIndex,setStartIndex] = useState(0)
const[index,setIndex] = useState(0)
const {setSearch} = useContext(SearchContext)
const[modalPosition,setModalPosition] = useState({left:0,top:0})

const location = useLocation()
const pathname = location.pathname
const query = new URLSearchParams(location.search)
const navigate = useNavigate()
const category = query.get('category')

let timeout;
useEffect(()=>{
window.scrollTo(0,0)

},[category])
useEffect(()=>{

  setStartIndex(0)
},[cat])
  const handleModal = (index,event,course)=>{
    const {left,top,height} = event.target.getBoundingClientRect();
    setIndex(index)

{index >= 3 ? setModalPosition({left:left - 490}):setModalPosition({left:left + 175})}
   

setModalInfo(course)
setOpenModal(true)

clearTimeout(timeout)
  }

  const handleMouseLeave=()=>{
    timeout=setTimeout(() => {
      setOpenModal(false)
    }, 300);
  }

  const handleSlider = (item)=>{
{item === 'right' ? setStartIndex((prev)=>prev + 2) : setStartIndex((prev)=>prev - 2)}
  }

  const handleCourseNavigation = ()=>{
    navigate(`/courses?category=${cat? cat : ''} `)
    setSearch('')
  }
 
  return (
    <div className='  flex 
    flex-col
    relative
    gap-3
    md:gap-5
    lg:gap-7
    py-5
   
  
 px-3
 md:px-5
    lg:px-7'>
      <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>{header}</h1>
     {desc && <p className='w-full lg:w-3/4 text-sm lg:text-base leading-6'>{desc}</p>}
{showButton && 
cat?
 <Button title={cat} className="text-gray-700 w-fit"/ >:
 pathname === '/courses' ? '':
  <div onClick={handleCourseNavigation}><Button title="Explore Courses" className="text-gray-700 w-fit"/ >
    </div>}
<div className='flex  gap-1 overflow-hidden relative'>
{ loading ?(<Loader/>):

courseInfo && courseInfo?.length > 0 ? courseInfo.slice(startIndex,startIndex + 5).map((course,index)=>(
   <Link to={`/course/${course._id}`}> <div className='flex flex-col w-40 md:w-52 lg:w-72 flex-shrink-0 relative' key={course._id} onMouseEnter={(event)=>handleModal(index,event,course)}
   
   onMouseLeave={()=>handleMouseLeave()}
   >
<img src={course.img} alt="" className='w-36  md:w-44 lg:w-64 h-20 md:h-32 lg:h-40 object-cover'/>

<h2 className='text-base leading-4 lg:text-xl font-bold'>{course.title.length > 40? course.title.substring(0,40)+ "..." : course.title }</h2>
<div className='flex items-center'>
  <span className='font-bold mr-1'>{course.averageRating ? course.averageRating - 1 :''}</span>
{[1,2,3,4,5].map((star)=>(
  <FaStar
  key={star}
  color={star < course.averageRating? "#ffc107": "#e4e5e9"}/>
))}
</div>
<span className='text-sm lg:text-base'>{course.author}</span>
<span className='text-base lg:text-xl font-bold'>$ {course.price}</span>

    </div>
    </Link>
))
:<>

<NoCourse
note='Sorry'
title={`OOps!!Sorry right now "${category? category : search}" courses are not availabe`}/> 
</>}
 {courseInfo && courseInfo.length >=4 ?< FaChevronCircleRight className={`absolute top-7 sm:top-10 md:top-12 lg:top-16  cursor-pointer right-2 ${startIndex + 5 > courseInfo.length ? 'hidden' : ''}`} color='yellow' size={50} onClick={()=>handleSlider('right')}/>:''}
{startIndex >= 2 && <FaChevronCircleLeft className='absolute top-7 sm:top-10 md:top-12 lg:top-16 cursor-pointer left-2' color='yellow' size={50} onClick={()=>handleSlider('left')} />}
{openModal && 
<PopOverModal
index={index}
modalInfo={modalInfo}
modalPosition={modalPosition}
handleMouseLeave={handleMouseLeave}
onMouseEnterModal={() => clearTimeout(timeout)}
/>}</div>

    </div>
  )
}

export default Courses
