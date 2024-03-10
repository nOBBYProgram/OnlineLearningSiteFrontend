import React from 'react'

const Button = ({title,className,icon}) => {
  return (
    
      <span className={`px-9
  
        cursor-pointer
         border-2
         flex
         justify-around 
         items-center
         py-2
         w-fit
         rounded-md
          ${className}
           font-bold
           ml-2
            text-center
            `}>
        {title}
 {icon}
        </span>
 
  )
}

export default Button
