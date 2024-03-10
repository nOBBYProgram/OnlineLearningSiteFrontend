import React from 'react'
import Body from '../Body'
import Selection from '../Components/Home/Selection'
import Achievements from '../Components/Home/Achievements'
import Learners from '../Components/Home/Learners'
import LatestSearch from '../Components/Home/LatestSearch'
import Choose from '../Components/Home/Choose'
import Testimonial from '../Components/Home/Testimonial'
import Teacher from '../Components/Home/Teacher'
import Navbar from '../Components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import MusicCourses from '../Components/Home/MusicCourses'
import BusinessCourses from '../Components/Home/BusinessCourses'
import DesignCourses from '../Components/Home/DesignCourses'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className=' px-1 lg:px-16'>
      <Body/>
      <Selection/>
      <Achievements/>
      <Learners/>
      <LatestSearch/>
      <Choose/>
      <MusicCourses/>
      <BusinessCourses/>
      <DesignCourses/>
      <Testimonial/>
      <Teacher/>
    
    </div>
    <Footer/>
    </>
  )
}

export default Home
