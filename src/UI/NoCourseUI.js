import React from 'react'

const NoCourseUI = () => {
  return (
    <span className='p-11 rounded-md bg-slate-100 shadow-lg  font-bold ml-24 flex items-center h-1/2 text-3xl text-red-500 w-3/4 text-justify'><div
    class="service-card w-[800px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127] rounded-md"
  >
    <svg
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2"
      stroke="#000000"
      fill="none"
      viewBox="0 0 24 24"
      class="text-5xl h-12 w-12 stroke-gray-800 group-hover:stroke-gray-400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
      <line y2="21" x2="16" y1="21" x1="8"></line>
      <line y2="21" x2="12" y1="17" x1="12"></line>
    </svg>
  
    <p class="font-bold text-3xl group-hover:text-white text-black/80">
     OOPS SORRY!!
    </p>
    <p class="text-gray-400 text-base">
  No courses available for the filter you have applied.
    </p>
  
  </div>
  </span>
  )
}

export default NoCourseUI
