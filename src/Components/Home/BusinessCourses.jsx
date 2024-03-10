import React from 'react'
import useApiHook from '../../customHooks/useApiHook'
import { BASE_URL } from '../../helper'
import Courses from '../Courses'

const BusinessCourses = () => {
    const {data,error,loading} = useApiHook(`${BASE_URL}/course/filterCourses?cat=Business`)
    return (
        <>
    {
    
      loading ?( <p>loading...</p>):
      error ? (<p>{error.message}</p>):
     <Courses
     header={`Top Business Courses`}
     courseInfo={data?.courses}
     showButton={false}
    cat='Business'
    loading={loading}
     />
    
    }
    </>
      )
}

export default BusinessCourses
