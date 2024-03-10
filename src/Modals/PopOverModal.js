import React from 'react'
import Button from '../Components/Button'
import { FaCaretRight, FaRegHeart } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaCaretLeft } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addItem } from '../reducer/cartReducer';
import { addToLoveList } from '../reducer/loveReducer';
const PopOverModal = ({modalInfo,modalPosition,handleMouseLeave,onMouseEnterModal,index}) => {

const dispatch = useDispatch()
    const handleCart = ()=>{
dispatch(addItem(
  {id:modalInfo._id,
  price:modalInfo.price,
  author:modalInfo.author,
  rating:modalInfo.averageRating,
  title:modalInfo.title,
  level:modalInfo.level,
  img:modalInfo.img,
  time:modalInfo.time
}
))
    }

    const handleWishList = ()=>{
      dispatch(addToLoveList(
        {id:modalInfo._id,
        price:modalInfo.price,
        author:modalInfo.author,
        rating:modalInfo.averageRating,
        title:modalInfo.title,
        time:modalInfo.time,
        img:modalInfo.img
      }
      ))
    }
  return (
    <div className='w-96  bg-slate-100 rounded-2xl absolute hidden  px-7 py-3  md:flex flex-col ' style={modalPosition} onMouseEnter={onMouseEnterModal}
    onMouseLeave={handleMouseLeave}>
      <header>{modalInfo.author}</header>
      <div className='flex items-center justify-center '>
<span>{modalInfo.time}Total Hours</span>
<span className='ml-3'>{modalInfo.level}</span>
<span></span>
      </div>
     {index >=3 ?( <span className='absolute -right-5 top-24'><FaCaretRight size={30} fill='gray' /></span>): (<span className='absolute -left-4 top-24'><FaCaretLeft size={30} fill='gray' /></span>)}
    {modalInfo?.whatYouWillLearn?.map((item)=>(
  <div>
    <span className='flex space-x-4'><TiTick size={25} />{item}</span>
  </div>
))}
      
      <div className='flex justify-between cursor-pointer w-full items-center'>
       <span onClick={handleCart}> <Button title="Add to cart" className='bg-blue-100 hover:bg-blue-300'/></span>
       <span onClick={handleWishList}> <FaRegHeart size={40}/></span>
      </div>
    
    </div>
  )
}

export default PopOverModal
