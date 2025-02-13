import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTasks = () => {
  const [userData,setuserData] = useContext(AuthContext);
 

  return (
    <div className="bg-[#1c1c1c] p-10 mt-5 rounded h-80 overflow-auto ">
 <div className="bg-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
              <h2 className="w-1/2 bg-red-600">Employee Name</h2>
              <h3 className="w-1/2 bg-red-600">New Task</h3>
              <h5 className="w-1/2 bg-red-600">Active Task</h5>
              <h5 className="w-1/2 bg-red-600">Complete</h5>
              <h5 className="w-1/2 bg-red-600">Failed</h5>
            </div>

      <div className="h-[80%]">
        {userData.employees.map((elem,idx) => {
          return (
            <div key={idx} className="border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
              <h2  className="w-1/2 text-emerald-600">{elem.firstName}</h2>
              <h3  className="w-1/2 text-emerald-600">{elem.taskCount.new}</h3>
              <h5  className="w-1/2 text-emerald-600">{elem.taskCount.active}</h5>
              <h5  className="w-1/2 text-emerald-600">{elem.taskCount.failed}</h5>
              <h5  className="w-1/2 text-emerald-600">{elem.taskCount.completed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
