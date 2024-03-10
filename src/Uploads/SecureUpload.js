import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../helper';
import { FaPlus } from "react-icons/fa6";
import { FaFileUpload } from "react-icons/fa";
import UploadedVideos from '../Modals/UploadedVideos';
const SecureUpload = () => {
    const [img,setImg] = useState(null)
    const[showUplaodedVideos,setShowUploadedVideos] = useState(false)
    const[imgUrls,setImgUrl] = useState(null)
    const [videoUrl, setVideoUrl] = useState(() => {
        const storedVideos = localStorage.getItem('videoUrl');
        return storedVideos ? JSON.parse(storedVideos) : [];
    });
    
    const[video,setVideo] = useState(null)

    
   useEffect(() => {
    localStorage.setItem('videoUrl', JSON.stringify(videoUrl));
}, [videoUrl]);
const uploadfile =async(type,timestamp,signature) =>{
    console.log("this is img",img)
     console.log("this is video",video)
const folder = type === 'image'? 'images':'videos'
    const data = new FormData()
    data.append('file',type ==='image'? img : video)
    console.log("these is timedsfj",type,timestamp,signature)
    data.append('timestamp',timestamp)
    data.append('signature',signature)
    data.append('api_key',"368214223155351")
    data.append('folder',folder)
    console.log("tehse rrea adat",data)
    try{
        let cloudName = "drepphu9x"
        let resourceType = type === 'image'?'image' : 'video'
        
        let api=`https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`
        const res = await axios.post(api,data)
        const {secure_url} = res.data
        console.log(secure_url)
        return secure_url
            }
catch(err){
    console.log(err)
}
}

const getSignatureForUpload = async(folder)=>{
    try{
const res = await axios.post(`${BASE_URL}/api/sign-upload`,{folder})
console.log(res.data)
return res.data
    }
    catch(err){
        console.log(err)
    }
  }
    const handleImgChange = async(e) => {
        const file = e.target.files[0];
    
         setImg(file)
         
      };

      const handleVideoChange = async(e)=>{
const file = e.target.files[0]

setVideo(file)
      }

      useEffect(() => {
        if (img !== null ) {
            const getSignatureAndUpload = async () => {
                const { timestamp: imgTimeStamp, signature: imgSignature } = await getSignatureForUpload('images');
                
                const imgUrl = await uploadfile('image', imgTimeStamp, imgSignature);
                console.log(imgUrl);
                console.log("Image upload successful!!");
                setImgUrl(imgUrl);
                localStorage.setItem('imgUrl',imgUrl)
                
            };
       
            getSignatureAndUpload();
        }
    }, [img]);
    
    useEffect(()=>{
        if(video !== null){
        const getVideoSignatureAndUpload = async () => {
            const { timestamp: videoTimeStamp, signature: videoSignature } = await getSignatureForUpload('videos');
            
            const videoUrl = await uploadfile('video', videoTimeStamp, videoSignature);
            console.log(videoUrl);
      setVideoUrl((prev)=>[...prev,videoUrl])
            console.log("Video upload successful!!");
          
        };
    
        getVideoSignatureAndUpload();
        setVideo(null)
    }
    
    },[video,uploadfile])

    const openVideoModal = ()=>{
        setShowUploadedVideos(true)
    }
    const closeVideoModal = ()=>{
        setShowUploadedVideos(false)
    }
      
    console.log("video urls",videoUrl)
  return (
    <div className='flex flex-col'>
    <div className='flex items-center justify-around'>
         <img  src={imgUrls? imgUrls : 'https://s.udemycdn.com/course/750x422/placeholder.jpg'} className='border-2 h-80 border-gray-300 image object-cover'  alt="" />
            <label htmlFor="fileInput" className='w-36 h-fit md:w-52 lg:w-96 border-2 border-gray-300 px-2 py-4 bg-slate-200 rounded-md font-semibold cursor-pointer'>
         'No file selected'

        <input type="file" accept='image/*' onChange={handleImgChange}  id="fileInput" className='hidden'   placeholder='jdsbkf'/>
        </label>
       
   
    </div>
     <label htmlFor="videoInput" className='w-36 h-fit mt-4 md:w-44 lg:w-64 border-2 items-center flex justify-around border-gray-300 px-2 py-4 bg-slate-200 rounded-md font-semibold cursor-pointer'>
     Create the videos
    
<span className=' bg-blue-400 px-3 leading-3 py-3 hover:bg-blue-600 text-white rounded-full'><FaPlus size={25}/></span>
    <input type="file" accept='video/*' onChange={handleVideoChange}  id="videoInput" className='hidden'   placeholder='jdsbkf'/>
    </label>
   <span className='bg-slate-400 w-fit cursor-pointer px-3 py-1 rounded-md font-semibold flex items-center gap-2 mt-1' onClick={openVideoModal}><FaFileUpload /> {videoUrl.length} uploaded </span>
   {showUplaodedVideos && <UploadedVideos videos={videoUrl}
   closeVideoModal={closeVideoModal}/>}
    </div>
  )
}

export default SecureUpload
