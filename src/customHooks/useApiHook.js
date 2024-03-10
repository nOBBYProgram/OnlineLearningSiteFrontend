import { useEffect, useState } from 'react'
import axios from 'axios'
const useApiHook = (url,method,body) => {
const [error,setError] = useState(null)
const [data,setData] = useState(null)
const [loading,setLoading] = useState(true)
    useEffect(()=>{
const fetchData = async()=>{
    try{
const response =await axios({url:url,method:method,body:body})
setData(response.data)
    }
catch(err){
    setError(err)
}
finally{
    setLoading(false)
}

}
fetchData()

    },[url,method,body])
    return {data,error,loading}
}

export default useApiHook
