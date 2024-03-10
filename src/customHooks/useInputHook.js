import { useEffect, useReducer, useState } from "react"


const useInputHook = (inputFields) => {

    const[err,setErr] = useState('')
    const [showSavedModal,setShowSavedModal] = useState('false')
    const[showForm,setShowForm]= useState(false)
    const inputReducer = (state,action)=>{
        switch(action.type){
            case 'LOAD_DATA':
                return action.data
            case 'ADD_FIELD':
                return [...state,{name:`${action.name}${state.length + 1}`,value:'',isValid:false,lessons:[]}]
    case 'Update_Field':
        return state.map((field)=>
            field.name === action.name ? {...field,
                 value:action.value,
                 isValid:validateField(action.value)}: field
        )
        case 'ADD_LESSON':
            return state.map((field)=>(
              field.name === action.sectionName ? {...field,lessons:[...field.lessons,{name:`lesson${field.lessons.length + 1},content:'`}]}: field
            ))
case 'HANDLE_DELETE':
    return state.filter((field)=>field.name !== action.name)
            case 'UPDATE_LESSON':
return state.map((field)=>
field.name === action.sectionName?
{...field,lessons:field.lessons.map((lesson)=>(
  lesson.name === action.name? {...lesson,content:action.value,isValid:validateField(action.value)}: lesson
))}:field
)

  
        default:
            return state
        }
    }
    const validateField =(value)=>{
        return value.trim() !== ''
    }
        const handleFormData = (name,value)=>{
            console.log("fromdatasnfkdsnf",name,value)
            dispatch({type:'Update_Field',name,value})
        }
    
        const handleAddInput = (name)=>{
            dispatch({type:'ADD_FIELD',name})
        }

        const handleLoadData = (data)=>{
            dispatch({type:'LOAD_DATA',data})
        }
        const handleCloseModal =()=>{
            setShowForm(false)
        }
        const[inputs,dispatch] = useReducer(inputReducer,inputFields)

        const handleSave = (name)=>{
                    const validForm = inputs.every((field)=>field.isValid )
             
                    if(validForm){
               
               setShowForm(true)
       
            localStorage.setItem(name,JSON.stringify(inputs))
            setErr('')
                    }
                    else{
            setErr('Please Enter all fields!!')
                    }
                }
                const handleLessonField = (name,value,sectionName)=>{
                    dispatch({type:'UPDATE_LESSON',name,value,sectionName})
                    console.log(name,value,sectionName)
                  }
                  const addlesson = (sectionName)=>{
                dispatch({type:'ADD_LESSON',sectionName})
                  }

                  const handleDelete= (name)=>{
                   dispatch({type:'HANDLE_DELETE',name})
                  }
  return{
    handleAddInput,
    handleFormData,
    handleCloseModal,
    inputs,
    showForm,
    handleSave,
    handleDelete,
    handleLoadData,
    handleLessonField,
    addlesson,
    err,
    showSavedModal
  }
}

export default useInputHook
