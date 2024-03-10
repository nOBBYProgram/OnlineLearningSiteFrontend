import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { removeLoveItem } from '../../reducer/loveReducer'
import Footer from '../Footer'
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Wishlist = () => {
    const loveItems = useSelector((state)=>state.love.loveItems)
    const totalLoveItems = useSelector((state)=>state.love.totalLoveItems)
    console.log("Love items",loveItems)
const dispatch = useDispatch()
    const handleRemove = (id)=>{
        dispatch(removeLoveItem(id))
    }
  return (
    <>  <Navbar/>
  <div className=' mx-32'>

  <div className='bg-gray-800 h-44 w-full  items-center flex justify-around'>
<span className='text-white text-7xl font-bold italic underline'>My Wishlist</span>
  </div>
  { totalLoveItems && totalLoveItems> 0 ?<div className='flex gap-4 mt-5 flex-wrap'>
{loveItems && loveItems.map((item)=>(
  <>
  
     <div className='flex flex-col'>
     <Link to={`/course/${item.id}`} className='flex flex-col'>
        <img src={item.img} alt="" className='w-48 lg:w-72 h-44 object-cover' />
         <span>{item.title?.substring(0,38)}...</span>
    <span>Author:{item.author}</span>
    <span>Time: <b>{item.time}</b> hour</span>
    <label className='text-sm md:text-base flex'>Average Rating :
      {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={24}
            color={star <= item.averageRating ? '#ffc107' : '#e4e5e9'}//sets the color to yellow if the value of stai is less or equal to userrating
            style={{ marginRight: '5px', cursor: 'pointer' }}
            />
       ))} {item.averageRating}</label>
    <span>Price: {item.price === 'free' ? 'Free': '$' +item.price}</span>
    </Link>
    <span className='bg-red-400 px-4 py-1 cursor-pointer rounded-lg w-fit' onClick={()=>handleRemove(item.id)}>Remove</span>
    </div>
   

    </>
))}
  </div>:(
    <h2 className='text-2xl text-center my-5 font-semibold'>No wishlist Items yet...</h2>
  )}
  </div>
  <Footer/>
  </>
  )
}

export default Wishlist
