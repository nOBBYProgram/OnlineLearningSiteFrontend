import React, { useEffect, useState } from 'react'
import { MdOutlineOndemandVideo } from "react-icons/md";
import useApiHook from '../customHooks/useApiHook';
import MoreInfo from './MoreInfo';
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer'
import { BASE_URL } from '../helper';
import { useParams } from 'react-router-dom';
const StartCourse = () => {

    const {id} = useParams()
    const [videoUrl, setVideoUrl] = useState(() => {
        const storedVideos = localStorage.getItem('videoUrl');
        return storedVideos ? JSON.parse(storedVideos) : [];
    });

    const[selectedVideo,setSelectedVideo] = useState(null)
    const[courseData,setCourseData] = useState([])
  
    console.log("This is selected video",selectedVideo)
    const handleSelectedVideo = (video)=>{
           selectedVideo === video ? setSelectedVideo(null) : setSelectedVideo(video)
    }
    const {data,loading,error} = useApiHook(`${BASE_URL}/course/getByid/${id}`,'GET',null)
    console.log("this is data",data)
    useEffect(()=>{
if(data && data?.course){
    setCourseData(data?.course)
}
    },[data])
    console.log("datas are",courseData)
    console.log("selected",selectedVideo)

  return (
    <>
    <Navbar/>
    <div className='w-full flex mt-5 '>
    <div className=' w-4/5'>
    {selectedVideo ? (
                    <video key={selectedVideo} controls style={{width:"900px",
                    height:"300px"}}>
                        <source src={selectedVideo} />
                    </video>
                ):(
                    <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVmYXVsdCUyMHZpZGVvfGVufDB8fDB8fHww" alt="" style={{width:"900px",
                height:"300px"}} className='object-cover' />
                )}
    </div>
    <div className='bg-green-200 w-2/4'>
    {videoUrl.map((video,index)=>(
        <div onClick={()=>handleSelectedVideo(video)} className='cursor-pointer flex items-center p-4'>  <MdOutlineOndemandVideo size={30} />    <span className={`text-2xl ml-3 hover:text-blue-800 hover:font-semibold ${selectedVideo === video ? 'text-purple-600 font-bold bg-slate-100 px-7 py-2 rounded-md': ''}`}>Video:<b>{index}</b>   </span>
   
        </div>

      ))}
</div>
    </div>
    <MoreInfo
    desc={courseData?.desc}
    level={courseData?.level}
    length={courseData?.videos?.length}
    whatYouWillLearn={courseData?.whatYouWillLearn}
    requirements={courseData?.requirements}
    />
    <Footer/>
    </>
  )
}

export default StartCourse
