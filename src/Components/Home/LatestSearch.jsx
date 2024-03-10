import React, { useContext } from 'react'
import Courses from '../Courses'
import useApiHook from '../../customHooks/useApiHook'
import { SearchContext } from '../../hooks/SearchContext'
import { BASE_URL } from '../../helper'
import NoCourse from '../../Loaders/NoCourse' 
const LatestSearch = () => {
 const {search} = useContext(SearchContext)
  const {data,loading,error} = useApiHook(`${BASE_URL}/course/category?cat=${search}`)
  return (
    <>
    {search && search.length> 0?
        <Courses
    header={`Because you searched "${search}"`}
    img="/python1.jpg"
    courseInfo={data?.matchedCategory}
    search={search}
    showButton={false}
   loading={loading}
    />
    :

<NoCourse
note="Note"
title="Latest Searched Courses will be shown here!!"/>
}
    </>


  )
}

export default LatestSearch
