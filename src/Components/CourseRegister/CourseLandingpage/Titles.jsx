import React, { useEffect, useReducer, useState } from 'react'
import CourseInput from '../../../Inputs/CourseInput'
import Button from '../../Button';
import SecureUpload from '../../../Uploads/SecureUpload';
import Tags from './Tags';

const Titles = () => {
    const [selectedFile, setSelectedFile] = useState(null);
const [selected,setSelected] = useState('')
const [allInfo,setAllInfo]=useState([])
   
const[tags,setTags] = useState([])
  console.log("selectedFile",selectedFile)
const levels =['Beginner','Intermediate','Expert','All']
    const titleReducer = (state,action)=>{
        switch(action.type){
            case 'UPDATE_FIELD':
return state?.map((field)=>field.name === action.name ? {...field,value:action.value}:field)
        }
    }

    const field=["Development","Business","Services","IT"]
    const price =['Free',19.99,24.99,29.99,34.99,39.99,44.99,49.99,54.99,60.99]
    const time =[1,2,3,4,5,6]

    const [titleFields,dispatch2] = useReducer(titleReducer,
        [{
            type:"text",name:"title",placeholder:"Enter title",value:'',isValid:false,label:'Course Title'
        },
        {
            type:"text",name:"subtitle",placeholder:"Enter Subtitle",value:'',isValid:false,label:'Course Subtitle'
        }
    ])

    const otherInfoReducer=(state,action)=>{
      switch(action.type){
        case 'LOAD_DATA':
          return action.data
        case 'UPDATE_INFO':
          return state?.map((field)=>field.name === action.name ? {...field,value:action.value}:field)
      }
     
    }
    const [otherInfo,dispatch3]= useReducer(otherInfoReducer,[
      {name:'desc1',value:''},
     {name:'option1',value:''},
     {name:'option2',value:''},
     {name:'option3',value:''},
     {name:'option4',value:''},
    ])
    console.log("Other indo",otherInfo)
const handleDescChange = (value,name)=>{
console.log("About desc",value,name)
dispatch3({type:'UPDATE_INFO',value,name})
}

console.log("title fields",titleFields)
    const handleTitleData =(name,value)=>{
        dispatch2({type:'UPDATE_FIELD',name,value})
    }
    useEffect(()=>{
      setAllInfo([otherInfo,titleFields,selectedFile?.name,tags])
    },[otherInfo,titleFields,selectedFile,tags])
   
    useEffect(()=>{
const allinfo =JSON.parse(localStorage.getItem('Allinfo'))

if(allInfo.length > 0){
  dispatch3({type:'LOAD_DATA',data:allinfo})
}
else{
  dispatch3({type:'UPDATE_INFO'})
}
    },[])
const handleSave = ()=>{
 localStorage.setItem('Allinfo',JSON.stringify( allInfo))
}
    console.log("This is all ifno",allInfo)
  return (
    <div className='bg-slate-100 shadow-lg w-full  md:w-3/4 pb-4'>
         <h1 className='text-3xl font-semibold px-5 sm:px-7  md:px-9  lg:px-11 py-7'>Course landing page</h1>
         <div className='w-full border-b-2 border-black'></div>
         <div className=' px-5 sm:px-7  md:px-9  lg:px-11 pt-7 flex flex-col'>
      {titleFields.map((field)=>(
        <CourseInput
        name={field.name}
      
        setFormData={handleTitleData}
        type={field.type}
        label={field.label}
        value={field.value}
        placeHolder={field.placeholder}

        />
      ))}
      <label htmlFor="" className='font-bold mb-1'>Course Description</label>
      <textarea name="desc1" onChange={(e)=>handleDescChange(e.target.value,"desc1")}  placeholder='Enter your desc here..' className='border-2 border-black description h-auto px-5 py-3 rounded-md ' minLength="200" ></textarea>
      <small className='text-gray-400'>Description should have minimum 200 words.</small>
      </div>
      <h1 className='text-xl font-bold px-11 py-2 sm:py-4 md:py-5 lg:py-7'>Basic Info</h1>
      <div className='flex-col flex items-center md:flex md:flex-wrap md:flex-row justify-center md:justify-around'>
        <select name="" id="" className='w-72 border-2 border-black justify-center p-3 flex items-center'onChange={(e)=>handleDescChange(e.target.value,"option1")}>
            <option value="" disabled hidden selected >--Select level--</option>
          {levels.map((level)=>(
            <option value={level} onClick={()=>setSelected(level)}>{level} Levels</option>
          ))}
        </select>
        <select name="" id="" className='w-72 border-2 border-black justify-center p-3 flex items-center' onChange={(e)=>handleDescChange(e.target.value,"option2")}>
            <option value="">--Development--</option>
          {field.map((item)=>(
            <option value={item}>{item}</option>
          ))}
        </select>
        <select name="" id="" className='w-72 border-2 border-black justify-center p-3 flex items-center' onChange={(e)=>handleDescChange(e.target.value,"option3")}>
            <option value="" disabled hidden selected>--Price Tier--</option>
          {price.map((item)=>(
            <option value={item}>$ {item}</option>
          ))}
        </select>
        <select name="" id="" className='w-72 border-2 border-black justify-center p-3 flex items-center mt-4'onChange={(e)=>handleDescChange(e.target.value,"option4")}>
            <option value="" disabled hidden selected >--Choose Video Length--</option>
          {time.map((hour)=>(
            <option value={hour} onClick={()=>setSelected(hour)}>{hour} hour</option>
          ))}
        </select>
      </div>
    
      <h1 className='text-xl font-bold px-11 py-2 sm:py-4 md:py-5 lg:py-7'>Course Image</h1>
      <div className='flex items-center justify-around'>
       <SecureUpload
      />
       
         
      </div>

      <Tags tags={tags} setTags={setTags}/>
    <span className='flex justify-center' onClick={handleSave}>  <Button title="Save" className="mt-2 bg-blue-600 hover:bg-blue-800 text-white"/></span>
    </div>
  )
}

export default Titles
