import React from 'react'
import { ImCross } from "react-icons/im";
const FeatureReviewError = ({message,onClose,color}) => {
    console.log("fetured Review Renderes")
  return (
    <>
    <span className={`absolute top-24 left-52 flex  px-5 text-slate-200 py-3 rounded-md z-50 ${color} font-semibold`}>{message}
    <ImCross className='ml-4 cursor-pointer hover:fill-gray-400 ' onClick={onClose}/>
    </span>
    </>
  )
}

export default FeatureReviewError
