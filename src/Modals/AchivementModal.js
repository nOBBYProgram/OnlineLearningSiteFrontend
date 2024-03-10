import React from 'react'

const AchivementModal = ({achievements}) => {
  return (
    <div className='flex gap-4'>
      {achievements.map((achivement)=>(
        <div className='flex flex-col'>
            <span>{achivement.desc}</span>
            <h2 className='flex items-center'>
                 <img src={achivement.img ? achivement.img : "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?bg=fff&crop=faces&dpr=1&h=32&w=32&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"} alt="" />
                 {achivement.name}
                 </h2>
           
            <span>{achivement.title}</span>
        </div>
      ))}
    </div>
  )
}

export default AchivementModal
