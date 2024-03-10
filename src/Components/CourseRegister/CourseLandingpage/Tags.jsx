import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
const Tags = ({tags,setTags}) => {
   

    const handleChange = (e)=>{
   console.log(e.target.value)
   if(e.key ==="Enter"){
    e.preventDefault()
    const value = e.target.value
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() +  word.slice(1)).join(' ') 
   

    setTags([...tags, value]);
    e.target.value =''
   }
    }

    const handleRemove =(index)=>{
              const updatedTags = [...tags]

              updatedTags.splice(index,1)
              setTags(updatedTags)
    }
    console.log(tags)
  return (
    <div className='text-center'>
    <span className='font-semibold'>Additonal Keywords: 
        <input type="text " className='border-2 ml-3 mb-3 px-3 py-1 border-black' placeholder='Tags...' onKeyDown={(e)=>handleChange(e)}/>
    </span>
    <div className='w-1/2 flex gap-3 flex-wrap mx-auto border-2 border-black px-7 py-3 rounded-md'>
        {tags && tags.map((tag,index)=>(
      <span className='bg-slate-200 pl-7 pr-3 py-2 rounded-md cursor-pointer font-semibold flex w-fit items-center gap-3 ' key={index}>{tag}
      <ImCross  size={20} className='cursor-pointer rounded-full hover:fill-red-500' onClick={()=>handleRemove(index)} />
      </span>
        ))}


    </div>
    </div>
  )
}

export default Tags
