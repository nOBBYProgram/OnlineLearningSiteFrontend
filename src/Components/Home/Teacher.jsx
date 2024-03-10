import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Teacher = () => {
  return (
  <div className='flex justify-center items-center'>
  <span className='hidden md:block'>  <img src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt=""  /></span>
    <div className='flex flex-col w-full md:w-1/3 gap-2 md:gap-5 ml-5'>
      <h2 className='text-3xl font-bold'>Become an Instructor</h2>
      <span className='leading-5 md:leading-7 text-gray-500'>Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</span>
      <Link to='/courseRegister'><Button title="Start Teaching Today" /></Link>
    </div>
  </div>
  );
};

export default Teacher;
