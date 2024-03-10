import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdOutlineLink } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import useApiHook from '../../customHooks/useApiHook'
import Navbar from '../Navbar/Navbar'
import MyCourses from './MyCourses';
import { BASE_URL } from '../../helper';
const UserProfile = () => {
  const {id} = useParams()
const [userData,setUserData] = useState(null)
  const {data,error,loading} = useApiHook(`${BASE_URL}/user/getuser/${id}`)
  const {data:courseData,error:courseError,loading:courseLoading} = useApiHook(`${BASE_URL}/course/createrCourse/${id}`)

  console.log("Thses rae user cousrs",courseData)
const LinkStyles = 'flex border-2 rounded-md items-center p-2 justify-around cursor-pointer font-semibold mt-3'
  useEffect(()=>{
if(data){
  setUserData(data.user)
}
  },[data])
  console.log(userData)
  return (
<>
<Navbar/>
<div className='flex  w-full justify-around mt-7'>
<div className='flex flex-col gap-2 w-1/2 '>
<small>@{userData?.username}</small>
<span className='text-5xl font-semibold'>{userData?.FirstName} {userData?.LastName}</span>
<b>Developer</b>
<div className='flex gap-7'>
  <span className='flex flex-col '>
    <b>Total Students</b>
<span>0</span>
  </span>
  <span className='flex flex-col'>
    <b>Reviews</b>
<span>0</span>
  </span>


</div>
<span className='text-xl font-semibold underline'>
  About me
</span>
{userData?.biography}

<MyCourses
courseDetails={courseData?.getCourses}/>

</div>

<div className='flex flex-col'>
  <img src={userData?.image} alt="" className='w-48 h-48 rounded-full object-cover' />
<span className={`${LinkStyles}`}>Website<MdOutlineLink size={30} /></span>
 <Link to={`/${userData?.Facebook}`}> <span className={`${LinkStyles}`}>Facebook<FaFacebook size={20} /></span></Link>
<span className={`${LinkStyles}`}>LinkedIn<BsLinkedin size={20} /></span>
</div>
</div>
</>
  )
}

export default UserProfile
