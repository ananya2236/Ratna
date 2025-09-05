import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-grey-400'>{text1} <span className='text-grey-700 font-medium'>{text2}</span> </p>
      <p className='w-12 md:w-15 h-[2px] bg-black'></p>
    </div>
  )
}

export default Title
