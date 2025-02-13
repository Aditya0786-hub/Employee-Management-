import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div>
       <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
        <div className=' bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</div>
        <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>{data.title}</h2>
         <p>{data.description}</p>
        
        <div  className='mt-2'>
        <button className='bg-green-500 w-full px-2 py-1 text-sm'>Completed Task</button>
   
        </div>
      </div>
    </div>
  )
}

export default CompleteTask
