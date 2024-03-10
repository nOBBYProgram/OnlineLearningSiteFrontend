import React, {  createContext, useContext, useState } from 'react'
import Button from '../Button'
import { FaChevronDown } from "react-icons/fa";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import FilterCourses from '../FilterCourses'
import useApiHook from '../../customHooks/useApiHook';
import { SearchContext } from '../../hooks/SearchContext';
import { useLocation, useParams } from 'react-router-dom';
import { BASE_URL } from '../../helper';
const FilterPanel = (
  {header,
  }
) => {

  const {search} = useContext(SearchContext) || {}

  const [selectedRow, setSelectedRow] = useState(null);
  const [timeIndex,setTimeIndex] = useState(null)
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
// console.log(timeIndex,selectedLevel,selectedPrice,selectedRow)
const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const category = searchParams.get('category');
// console.log("category", category);
const filterListStyle = 'font-bold text-2xl flex justify-between items-center cursor-pointer border-y-2 border-black py-2 '

  let url = `${BASE_URL}/course/filterCourses`
if(search){
url += `?cat=${search}`
}
if(category){
  url += url.includes('?') ? `&cat=${category}`:`?cat=${category}` 
}
if(selectedRow){
  url += url.includes('?') ? `&rating=${selectedRow}`:`?rating=${selectedRow}`
}
if(selectedLevel){
  url += url.includes('?') ? `&level=${selectedLevel}`: `?level=${selectedLevel}`
}
if(selectedPrice){
  url += url.includes('?')  ? `&price=${selectedPrice}` : `?price=${selectedPrice}` 
}
if(timeIndex){
  url += url.includes('?')  ? `&time=${timeIndex}` : `?time=${timeIndex}` 
}
const {data,error,laoading}=useApiHook(url,'GET',null)
  // console.log(data)

  const courses = data?.courses
  // console.log(typeof selectedRow)
  const handleRowClick = (index) => {
    // console.log("row click re-renderd")
    if(index === selectedRow){
      setSelectedRow(null)
    }
    else{
    setSelectedRow(index);
    }
  };


  const generateRatings = () => {
    const ratings = [];

    for (let index = 1; index <= 5; index++) {
      const icons = [];

      for (let subIndex = 0; subIndex < index; subIndex++) {
        const isFilled = selectedRow !== null && selectedRow === index;
        const StarIcon = isFilled ? IoMdStar : IoMdStarOutline;

        icons.push(<StarIcon key={subIndex} size={30} />);
      }

      ratings.push(
        <li
          key={index}
          className={`flex cursor-pointer ${selectedRow === index ? 'selected' : ''}`}
          onClick={() => handleRowClick(index)}
        >
          {icons}
        </li>
      );
    }

    return <ol>{ratings}</ol>;
  };
const handleTimeClick = (length)=>{
if(length === timeIndex){
  setTimeIndex(null)
}
else{
  setTimeIndex(length)
}
}
const handleLevelClick = (level)=>{
  if(level === selectedLevel){
    setSelectedLevel(null)
  }
  else{
    setSelectedLevel(level)
  }
}

const handlePriceClick = (price)=>{
if(price === selectedPrice){
  setSelectedPrice(null)
}
else{
  setSelectedPrice(price)
}
}
  const videoLength = ["0-1","1-3","4-6"]
  const expense = ["Paid","free"]
  const level = ["All levels","BeginNer","InterMEdiate","Expert"]
  // console.log("tehse are courses",courses)
  return (

    <>


   <div className='flex mt-0 md:mt-7  gap-11'>
    <div className='hidden md:flex flex-col gap-4  lg:w-72 md:w-60 '>
      <div className='flex'>
<Button title="Filter"/>
<Button title="MostPopular"/>
      </div>
<span  className={`${filterListStyle}`}>Rating <FaChevronDown /></span>
{generateRatings()}
<span  className={`${filterListStyle}`}> VideoLength <FaChevronDown /></span>
<ol className='list-square'>
  {videoLength.map((length)=>(
    <li onClick={()=>handleTimeClick(length)} className={`cursor-pointer ${length === timeIndex? 'text-blue-600 font-bold':''} `}>{length} Hours</li>
  ))}
</ol>
<span className={`${filterListStyle}`}> Levels <FaChevronDown /></span>
<ol className='list-square'>
  {level.map((item)=>(
    <li onClick={()=>handleLevelClick(item)}  className={`cursor-pointer ${item === selectedLevel? 'text-blue-600 font-bold':''} `}>{item} </li>
  ))}
</ol>
<span className={`${filterListStyle}`}> Price <FaChevronDown /></span>
<ol className='list-square'>
  {expense.map((item)=>(
    <li onClick={()=>handlePriceClick(item)}  className={`cursor-pointer ${item === selectedPrice? 'text-blue-600 font-bold':''} `}>{item} </li>
  ))}
</ol>
      </div>
 <FilterCourses
Courses={courses}
 />

    </div>

   

    </>
  )
}

export default FilterPanel
