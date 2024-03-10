import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../hooks/SearchContext'

const Choose = () => {
  const {setSearch} = useContext(SearchContext)
  const navigate = useNavigate()
  const handlecatSelect = (cat)=>{
    
    navigate(`/courses?category=${cat}`)
    setSearch('')
  }
  const screenSize = window.innerWidth
  const images = [
    {
      title:"Design",
      img:"https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
    },
    {
      title:"Development",
      img:"https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"
    },
    {
      title:"Music",
      img:"https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"
    },
    {
      title:"Business",
      img:"https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg"
    }
  ]

  return (
    <>
    <h2 className='text-xl lg:text-2xl font-bold mb-2 md:mb-3  lg:mb-5'>Top Categories</h2>
    <div  className='flex gap-4 justify-around'>
     
      {images.map((item)=>(
        <div className='relative'  onClick={()=>handlecatSelect(item.title)}>
 <img src={item.img} alt="" className='bg-slate-300 cursor-pointer p-4 hover:bg-slate-600' />
 <span className='text-sm lg:text-base absolute bottom-0 lg:bottom-7 left-2 lg:left-8 font-bold '>{screenSize > 480 ? item.title : item.title.substring(0,8)}</span>
        </div>
      ))}
    
    </div>
    </>
  )
}

export default Choose
