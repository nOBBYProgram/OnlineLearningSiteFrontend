import React, { useEffect } from 'react'
import { GiCrossedBones } from "react-icons/gi";
const UploadedVideos = ({videos,closeVideoModal}) => {

  return (
    <div className='absolute flex  justify-around bg-slate-400 rounded-md flex-wrap p-2  w-1/2'>
        <span className='bg-white p-2 w-fit rounded-full absolute h-fit cursor-pointer hover:bg-slate-100' onClick={closeVideoModal}><GiCrossedBones size={20}/></span>
      {videos.map((video,index)=>(
        <div>      <span>Video:<b>{index}</b>   </span>
      <video controls  style={{ width: "300px", height: "150px" }}>
        <source src={video} />
        </video>
        </div>

      ))}
    </div>
  )
}

export default UploadedVideos
