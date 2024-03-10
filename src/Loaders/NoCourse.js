import React from 'react'

const NoCourse = ({note,title}) => {
  return (
    <div
    class=" w-[400px] lg:w-[700px] bg-gray-950 rounded-xl overflow-hidden drop-shadow-xl my-2 lg:mx-11 mx-5 sm:mx-7"
  >
    <div class="bg-[#333] flex items-center p-[5px] text-whitec relative">
      <div class="flex absolute left-3">
        <span class="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
        <span class="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
        <span class="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
      </div>
      <div class="flex-1 text-center text-white">{note}!!</div>
    </div>
    <div class="px-3 py-1 text-sm  md:text-xl text-[#0f0]">
      <div>
        <span class="mr-2 py-2">{title}</span>
        <span class="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">.</span>
        <span class="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">.</span>
        <span class="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">.</span>
      </div>
    </div>
  </div>
  
  )
}

export default NoCourse