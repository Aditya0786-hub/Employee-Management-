import React from 'react'

const EmployeeTask = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-bold'>Active</h3>
        </div>

        <div className='rounded-xl w-[45%] py-6 px-9 bg-orange-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.new}</h2>
            <h3 className='text-xl font-bold'>New task</h3>
        </div>

        <div className='rounded-xl w-[45%] py-6 px-9 bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-bold'>Completed</h3>
        </div>

        <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-bold'>Failed Task</h3>
        </div>
    </div>
  )
}

export default EmployeeTask
