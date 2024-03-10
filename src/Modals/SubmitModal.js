import React, { useEffect, useState } from 'react'
import { IoArrowRedoSharp } from "react-icons/io5";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import Button from '../Components/Button';
import axios from 'axios';
import { BASE_URL } from '../helper';
import { useSelector } from 'react-redux';
import FormModal from './FormModal';
import { useNavigate } from 'react-router-dom';
const SubmitModal = ({onClose}) => {
    const [curriculumLists,setCurriculumLists] = useState([])
    const [curriculum,setCurriculum] = useState([])
    const[videos,setVideos] = useState([])
    const[tags,setTags] = useState([])
    const [requirements,setRequiments] = useState([])
    const [additionalInfo,setAdditionalInfo] = useState([])
    const[basicInfo,setBasicInfo] = useState([])
const[saveModal,setSaveModal] = useState(false)
    const username = useSelector((state) => state.auth.user?.username ?? 'DefaultName');
    const _id = useSelector((state)=>state.auth.user?._id ?? "6597adac3ced8d07a6d9355f")
const [courseImg,setCourseImg] = useState('')
const navigate = useNavigate()
    useEffect(()=>{
          const curriculumItems = JSON.parse(localStorage.getItem('InputFields')) || []

          if(curriculumItems.length > 0){
setCurriculumLists(curriculumItems)
          }

          const requirement = JSON.parse(localStorage.getItem('requirementField')) || []

          if(requirement.length > 0){
            setRequiments(requirement)
          }
          const storedVideos = JSON.parse(localStorage.getItem('videoUrl'));
 if(storedVideos.length > 0){
setVideos(storedVideos)
 }
          const basic = JSON.parse(localStorage.getItem('Allinfo')) || []
          if(basic.length >0){
            setAdditionalInfo(basic[0])
            setBasicInfo(basic[1])
            setTags(basic[3])
          }
          const courseImage = localStorage.getItem('imgUrl')|| []

          if(courseImage){
            setCourseImg(courseImage)
          }
          const curriculumValues = JSON.parse(localStorage.getItem('curriculum')) || []

          if(curriculumValues.length > 0){
            setCurriculum(curriculumValues)
          }
    },[])

    console.log("These are curriculum lists",curriculum)
    
    console.log("These are Baisic Info",basicInfo)
    const requirementValues = requirements && requirements.map((requirement)=>requirement.value)
const learningValues = curriculumLists && curriculumLists.map((curriculum)=>curriculum.value)
const curriculumValues = curriculum.map((section) => ({
 
  title: section.value,
  lessons: section.lessons ? section.lessons.map((lesson) => lesson.content) : [],
}));
    const courseDesc ={
      author:username, 
      videos:videos,
      desc:additionalInfo[0]?.value,
      title:basicInfo[0]?.value,
      subtitle:basicInfo[1]?.value ,
      img:courseImg,
      whatYouWillLearn:learningValues,
      requirements:requirementValues,
      includes:learningValues,
   
      userId:_id,
      level:additionalInfo[1]?.value,
    time:additionalInfo[4]?.value,
      price:additionalInfo[3]?.value ,
      category:additionalInfo[2]?.value ,
      tags:tags,
curriculum:curriculumValues
    }

   
    console.log(courseDesc)
    const handleCourseSubmit = async()=>{
const response = await axios.post(`${BASE_URL}/course/create`,courseDesc)

try{
if(response.data.success){
  console.log("COurse created Successfully!")
  setSaveModal(true)

}
else{
  return console.log("Unable to create a course!")
}
}
catch(err){
  return console.log("Some internal error!!")
}
    }

    const closeModal = ()=>{
setSaveModal(false)
navigate('/')
    }
  return (
    <div className={`w-1/2 bg-white py-2 px-7 rounded-lg fixed top-2 overflow-y-scroll  ${curriculum.length > 0? 'h-screen': 'h-fit'} left-96 z-20 font-bold`}>
      <AiTwotoneCloseCircle className='absolute right-4 top-2 cursor-pointer ' onClick={onClose} size={30}/>
      <h2 className='text-center text-2xl font-bold'>Submit for Review?</h2>
<div className='border-b-2 border-black'></div>
      <span className='font-semibold text-xl'>Intended Leaners</span>
      <h2>What will students learn in your course?</h2>
<ol className='border-b-2 border-black font-semibold'>
    {curriculumLists && curriculumLists.length > 0 ? curriculumLists.map((list)=>(
        <li className='flex items-center space-x-2'><IoArrowRedoSharp className='fill-gray-500'/>{list.value}</li>
    )):(
      <p className='font-semibold text-blue-700 '>Please Include atleast 4 points!....</p>
    )}
</ol>
<h2>Requirements?</h2>
<ol className='border-b-2 border-black font-semibold'>
    {requirements && requirements.length > 0  ? ( requirements.map((requirement)=>(
        <li className='flex items-center space-x-2'><IoArrowRedoSharp className='fill-gray-500' />{requirement.value}</li>
    ))): (
    <p className='font-semibold text-blue-700 '>Your course requirements appear here!....</p>
    )}
</ol>
<div className='flex my-3 items-center border-b-2 border-black'>
    <div className='flex flex-col'>
<span className='font-bold'>Course Title:{basicInfo[0]?.value || '...?'}</span>

<span className='font-bold'>Course Subtitle:{basicInfo[1]?.value || '...?'}</span>
</div>
<img src={courseImg} alt="" className='w-32 h-32 object-cover ml-4'/>
</div>
<span>Desc:{additionalInfo[0]?.value || '...?'}</span>
<div className='flex justify-around border-b-2 border-black'>
<span>Level:{additionalInfo[1]?.value || '...?'}</span>
<span>Catgegory:{additionalInfo[2]?.value || '...?'}</span>
<span>Price:${additionalInfo[3]?.value || '...?'}</span>
</div>

{curriculum && curriculum.length > 0 ? curriculum.map((item,index)=>(
    <span className='relative' >
<h2>Section- {index}</h2>
<span>Title:{item.value}</span>
<ol className='font-semibold border-b-2 border-black'>
    <h2 >Lessons:</h2>
{item.lessons.map((lesson)=>(
    <li className='flex items-center space-x-2'><IoArrowRedoSharp className='fill-gray-500' />{lesson.content}</li>
))}
</ol>
    </span>
)):(
  <p className='font-semibold text-blue-700 mt-5 text-center'>Your Sections will be shown here!....</p>
)}
<span className='absolute right-4 top-14 ' onClick={()=>handleCourseSubmit()}>
  <Button title="submit" className='bg-blue-600 hover:bg-blue-800 text-white' />
  </span>
{saveModal && <FormModal handleCloseModal={closeModal}/>}
    </div>
  )
}

export default SubmitModal
