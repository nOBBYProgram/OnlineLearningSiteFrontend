import React from 'react'

const Lists = ({lists}) => {
  return (
    <ul className='list-square flex flex-col items-center'>
      {lists && lists?.map((list)=>(
        <li>{list}</li>
      ))}
    </ul>
  )
}

export default Lists
