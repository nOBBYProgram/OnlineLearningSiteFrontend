import React from 'react'
import useApiHook from '../../customHooks/useApiHook'
import Courses from '../Courses'
import { BASE_URL } from '../../helper'
const MusicCourses = () => {
    const {data,error,loading} = useApiHook(`${BASE_URL}/course/filterCourses?cat=Music`)
    return (
        <>
    {
    
      loading ?( <p>loading...</p>):
      error ? (<p>error.message</p>):
     <Courses
     header={`Top Music Courses`}
     courseInfo={data?.courses}
     showButton={false}
    cat="Music"
    loading={loading}
     />
    
    }
    </>
      )
}

export default MusicCourses
