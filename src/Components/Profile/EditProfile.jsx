import React, { useEffect, useState } from 'react'
import ProfileInput from '../../Inputs/ProfileInput'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import Button from '../Button'
import { useSelector } from 'react-redux'
import { BASE_URL } from '../../helper'
const EditProfile = () => {
    const [formData,setFormData] = useState({
        FirstName:'FirstName',
        LastName:'LastName',
        Twitter:'Twitter Url',
        Facebook:'Facebook Url',
        Website:'WebSite Url'
    })

    const _id = useSelector((state)=>state.auth.user?._id ?? "6597adac3ced8d07a6d9355f")
    const uploadfile =async(type,timestamp,signature) =>{
        console.log("this is img",img)
         
    const folder = type === 'image'? 'images':'videos'
        const data = new FormData()
        data.append('file',type ==='image'? img : '')
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
    const[imgUrls,setImgUrl] = useState(null)
    const [biography,setBiography] = useState('')
const[img,setImg] = useState(null)
    const handleImgChange = async(e) => {
        const file = e.target.files[0];
    
         setImg(file)
         
      };
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
      useEffect(() => {
        if (img !== null ) {
            const getSignatureAndUpload = async () => {
                const { timestamp: imgTimeStamp, signature: imgSignature } = await getSignatureForUpload('images');
                
                const imgUrl = await uploadfile('image', imgTimeStamp, imgSignature);
                console.log(imgUrl);
                console.log("Image upload successful!!");
                setImgUrl(imgUrl);
          
                
            };
       
            getSignatureAndUpload();
        }
    }, [img]);
    
    console.log(formData)

    const handleSaveUser = async()=>{
        console.log("Form is being submitted")
        const content={
            formData,
            imgUrls,
            biography
        }
     
        // console.log("This is contebt",content)
        const res = await axios.put(`${BASE_URL}/user/update/${_id}`,content)
        if(res.data.success){
            console.log("User have been updated Sucessfully!")
        }
        console.log("error updating user")
    }
  return (
    <>
    <Navbar/>
    <div className='flex flex-col items-center mt-3 border-2 border-black p-7 w-full'>
        <h2 className='text-4xl underline font-bold mb-3'>Profile Settings / Customizaton</h2>
    <div className='flex flex-wrap w-3/4 justify-around'>
    {Object.keys(formData).map((data)=>(
        <ProfileInput
        label={data}
        placeholder={`Enter your ${formData[data]}`}
        name={data}
        setFormData={setFormData}
        />
    ))}
   
   <label className='flex flex-col text-blue-600 font-semibold'>Biography 
   <textarea className='border-2  border-gray-200 w-96 h-52 px-2 py-1 outline-none text-gray-600' onChange={(e)=>setBiography(e.target.value)}
   placeholder='About me....'></textarea></label>
    </div>
    <div className='flex items-center justify-around mt-6'>
         <img  src={imgUrls? imgUrls : 'https://s.udemycdn.com/course/750x422/placeholder.jpg'} className='border-2 h-80 border-gray-300 image object-cover'  alt="" />
            <label htmlFor="fileInput" className='w-36 ml-5 h-fit md:w-52 lg:w-96 border-2 border-gray-300 px-2 py-4 bg-slate-200 rounded-md text-blue-600 font-semibold cursor-pointer'>
         'No file selected'

        <input type="file" accept='image/*' onChange={handleImgChange}  id="fileInput" className='hidden'   placeholder='jdsbkf'/>
        </label>
       
   
    </div>
    <span className='mt-3' onClick={()=>handleSaveUser()}><Button title='Save' className='bg-blue-400 hover:bg-blue-600 text-white'/></span>
    </div>
    </>
  )
}

export default EditProfile
