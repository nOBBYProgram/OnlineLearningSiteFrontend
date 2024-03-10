import React, { useState } from 'react'
import Curriculum from './Curriculum'
import Navbar from '../Navbar/Navbar'
import Outcomes from './IntendedLearners/Outcomes'
import Titles from './CourseLandingpage/Titles'
import Modal from './Modal'
import SubmitModal from '../../Modals/SubmitModal'
import Button from '../Button'


const CourseRegister = () => {
  const steps = ['Intended Learners','Landing Page','Curriculum']
const [selectedStep,setSelectedStep] = useState(null)
const [submitModal,setSubmitModal] = useState(false)
const [selectedStepComponent, setSelectedStepComponent] = useState(null);

  const handleStepSelected = (step) => {
    setSelectedStep(step);

    switch (step) {
      case 'Intended Learners':
        setSelectedStepComponent(<Outcomes />);
        break;
      case 'Landing Page':
        setSelectedStepComponent(<Titles />);
        break;
      case 'Curriculum':
        setSelectedStepComponent(<Curriculum />);
        break;
      default:
        setSelectedStepComponent(null);
    }
  };

  const handleClose = ()=>{
    setSubmitModal(false)
  }
  return (
    <>
    <Navbar/>
    <h2 className=' font-bold text-2xl mb-2 text-center'>Plan your course</h2>
    <ol className='list-square flex font-normal text-gray-500 mx-5 lg:mx-8 md:hidden px-1 justify-between flex-wrap'>
    {steps.map((step)=>(
            <li className={`cursor-pointer text-xl lg:text-2xl ${selectedStep === step ? 'font-semibold text-black' : ''}`} onClick={()=>handleStepSelected(step)}>{step}</li>
          ))}
          </ol>
        <div className='flex justify-around mt-7  sm:mt-11 md:mt-14 lg:mt-16'>
          <div className=' hidden   md:flex flex-col justify-start'>
        <h2 className=' font-bold text-3xl mb-7'>Plan your course</h2>
        <ol className='list-square font-normal text-gray-500 mx-5 lg:mx-8'>
          {steps.map((step)=>(
            <li className={`mb-24 cursor-pointer text-xl lg:text-2xl ${selectedStep === step ? 'font-semibold text-black' : ''}`} onClick={()=>handleStepSelected(step)}>{step}</li>
          ))}
        </ol>
     <span className='-mt-8' onClick={()=>setSubmitModal(true)}>   <Button title="Review " className="bg-blue-400 text-white hover:bg-blue-600" /></span>
        </div>
    {/* <Curriculum/> */}
  {/* <Outcomes/> */}

  {selectedStepComponent}</div>
{submitModal && <SubmitModal onClose={handleClose}/>}
    </>

  )
}

export default CourseRegister
