import React from 'react';
import { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider';

const CreateTasks = () => {

   const [userData,setuserData] = useContext(AuthContext);
    

  /* Creates a two way binding login system and set the state of login &
  admin to creates the tasks and push it into local storage*/ 
  const [title,setTaskTitle] = useState('')
  const [date,setDate] = useState('')
  const [description,setDescription] = useState('')
  const [assignTo,setassignTo] = useState('')
  const [category,setcategory] = useState('')

  const [task,setTask] = useState({})

  const submitHandler = (e) => {
      e.preventDefault()
      // console.log(title)
      // console.log(date)
      // console.log(description)
      // console.log(assignTo)
      // console.log(category)
     
      setTask({title,description,date,assignTo,category,active:false,newTask:true,failed:false,completed:true})
    

       const data = userData.employees
      //  console.log(data)
        

       data.forEach(function(elem) {
          if(assignTo == elem.firstName){
            elem.tasks.push(task) 
            elem.taskCount.new =  elem.taskCount.new+1      
          }
       });
       console.log(data)
      
     
  }
  return (
    <div>
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 mt-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-100">Admin Dashboard</h2>
        
        <form onSubmit={(e)=> {
          submitHandler(e)
        }} className="flex flex-wrap w-full items-start justify-between gap-6">
          {/* Left Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Task Title
              </label>
              <input
                type="text"
                placeholder="Make A UI Design"
                value={title}
                onChange={(e)=>{
                  setTaskTitle(e.target.value)
                }}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
              className="block text-sm font-medium text-gray-300 mb-2">
                Date
              </label>
              <input
                type="date"
                value={date}
              onChange={(e)=>{
                setDate(e.target.value)
              }}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Assign to
              </label>
              <input
                type="text"
                placeholder="Employee name"
                value={assignTo}
              onChange={(e)=>{
                setassignTo(e.target.value)
              }}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category
              </label>
              <input
                type="text"
                placeholder="design, dev, etc"
                value={category}
              onChange={(e)=>{
                setcategory(e.target.value)
              }}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              cols="30"
              rows="10"
              placeholder="Provide detailed task description..."
              value={description}
              onChange={(e)=>{
                setDescription(e.target.value)
              }}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="w-full mt-6">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTasks
