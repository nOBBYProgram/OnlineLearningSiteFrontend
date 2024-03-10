import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../hooks/SearchContext'

const CategoryItems = ({category}) => {
  const[selected,setSelected] = useState('')
  const {setSearch} = useContext(SearchContext)
  console.log("selected",selected)
const navigate = useNavigate()
  const handlecatSelect = (cat)=>{
    
    navigate(`/courses?category=${cat}`)
    setSearch('')
  }
  return (
    <div className='flex flex-col'>
    <h2 className='font-bold'>Popular Topics</h2>
  {category.map((cat)=>(
    <span className='border-b-2 border-gray-300  py-2 px-1 cursor-pointer hover:bg-slate-100 rounded-md' onClick={()=>handlecatSelect(cat)}>{cat}</span>
  ))}
  </div>
  )
}

export default CategoryItems
