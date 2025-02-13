import React from 'react'
import Header from '../EmployeeComponents/Header'
import EmployeeTask from '../EmployeeComponents/EmployeeTask'
import TaskList from '../Taskslists/TaskList'

const EmployeeDash = (props) => {

  return (
    <div>
      <div className='p-10 bg-[#1C1C1C] h-screen'>
      
        <Header changeUser={props.changeUser} data={props.data}/>
        <EmployeeTask data={props.data}/>
        <TaskList data={props.data}/>
      </div>
    </div>
  )
}

export default EmployeeDash
