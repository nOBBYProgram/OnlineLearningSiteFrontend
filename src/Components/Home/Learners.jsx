import React from 'react'
import Courses from '../Courses'
import useApiHook from '../../customHooks/useApiHook'
import { BASE_URL } from '../../helper'
const Learners = () => {

  const {data,loading,error} = useApiHook(`${BASE_URL}/course/latest`)

  return (
    <>
{

  loading ?( <p>loading...</p>):
  error ? (<p>{error.message}</p>):
 <Courses
 header="Leaners are Viewing"
 img="/python1.jpg"
 courseInfo={data?.courses}
 showButton={false}
loading={loading}
 />

}
</>
  )
  
}

export default Learners
