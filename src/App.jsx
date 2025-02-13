
import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Auth/Login'
import AdminDash from './Components/Dashboard/AdminDash'
import EmployeeDash from './Components/Dashboard/EmployeeDash'
import { getlocalstorage, setlocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

function App() {
   
   const[user,setUser] = useState(null)
   const [userData,setuserData] = useContext(AuthContext);

   const [loggedInUser,setloggedinuser]  = useState(null)
    
  //  localStorage.clear()
   useEffect(() => {//if logged in user is there sets the employee the name
     
    const loggedInUser = localStorage.getItem("loggedInUser")
     if(loggedInUser){
      const userdata = JSON.parse(loggedInUser)
      setUser(userdata.role)
      setloggedinuser(userdata.data)
      
     }
     
   },[])
   
   

   const handlelogin = (email,password) => {  //Checks the user email and password mactches the local storage
      if(email == 'admin@me.com' && password == '123') {
        setUser("admin")
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',}))
      }

      else if(userData) {
        const employee = userData.employees.find((e)=> email == e.email && password == e.password )
        if(employee){//Employee and Admin log out system . sets the logged in user as admin or employee
          
          setUser('employee')
          setloggedinuser(employee)
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))

        }
      }
      else {
        alert("Invalid Credential")
      }

   }

   

  return (
    <>
    {!user ? <Login handlelogin={handlelogin}/> : ''}
    {user == "admin" ? <AdminDash  changeUser={setUser}  data={loggedInUser}/> : null}
    {user == 'employee' ? <EmployeeDash changeUser={setUser} data={loggedInUser}/> : null}

    
   
    </>
  )
}

export default App
