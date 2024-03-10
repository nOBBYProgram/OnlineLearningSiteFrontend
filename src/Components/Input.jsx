import React, { useContext } from 'react'
import { IoSearch } from "react-icons/io5";
import {useState} from 'react'
import {  SearchContext} from '../hooks/SearchContext';
import '../Styles/LandingPage.css'
import { useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
const Input = () => {
  const suggestions = ['Web Development','React'
  ,'Mern','Full Stack Web Developer','Python','Machine Learning Python','Django Python','Javascript','App Development']
const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
  const [value,setValue] = useState('')
  const {search,setSearch} = useContext(SearchContext) || {}
const navigate = useNavigate()

const handleSearch = (suggestion)=>{
  setSearch(suggestion)

  navigate('/courses')
  setValue('')
}
  const filterSuggestion = suggestions.filter((suggestion)=>suggestion.toLowerCase().includes(value.toLowerCase()))
  return (
    <div className={`flex  border-2  border-gray-400 rounded-2xl px-3 py-2 gap-2 sm:gap-3 md:gap-4 lg:gap-5 relative ${isAuthenticated ? 'authenticatedInput':'inputs'}`} >
<IoSearch size={30}/>
  <input type="text" placeholder='Search for anything' className='outline-none w-3/4  lg:w-full' value={value} onChange={(e)=>setValue(e.target.value)} />

  {value && filterSuggestion.length > 0 &&
  <div className="flex flex-col absolute top-12 bg-white  w-full">
    {filterSuggestion.map((suggestion)=>(
      <div key={suggestion}>
       <span className='flex gap-2 p-1 cursor-pointer hover:bg-slate-100 m-2 rounded-xl items-center' onClick={()=>handleSearch(suggestion)} ><IoSearch/> {suggestion}</span>
        </div>
    ))}
    </div>}
  </div>
  )
}

export default Input
