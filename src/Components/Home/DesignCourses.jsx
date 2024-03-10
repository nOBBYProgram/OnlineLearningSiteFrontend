import React from 'react'
import Courses from '../Courses'
import useApiHook from '../../customHooks/useApiHook'
import { BASE_URL } from '../../helper'

const DesignCourses = () => {
    const {data,error,loading} = useApiHook(`${BASE_URL}/course/filterCourses?cat=Design`)
    return (
        <>
    {
    
      loading ?( <p>loading...</p>):
      error ? (<p>error.message</p>):
     <Courses
     header={`Top Design Courses`}
     courseInfo={data?.courses}
     showButton={false}
    cat='Design'
    loading={loading}
     />
    
    }
    </>
      )
}

export default DesignCourses
