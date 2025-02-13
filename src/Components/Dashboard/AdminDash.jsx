import React from "react";
import Header from "../EmployeeComponents/Header";
import CreateTasks from "../EmployeeComponents/CreateTasks";
import AllTasks from "../EmployeeComponents/AllTasks";

const AdminDash = (props) => {
  return (
    <div className="h-screen w-full p-10 bg-gray-900 text-gray-100">
      <Header changeUser={props.changeUser} />
      <CreateTasks/>
      <AllTasks/>
    </div>
  );
};

export default AdminDash;
