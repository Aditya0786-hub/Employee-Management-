import React from 'react'

const Header = (props) => {

  const logoutUser = ()=> {
    localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeUser();
  }
  
  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-xl font-medium text-white'>Hello <br /> <span className='text-3xl font-semibold text-white'>Welcome</span></h1>
      <button onClick={logoutUser} className='bg-red-500 text-white text-lg rounded p-2 '>Log out</button>
    </div>
  )
}

export default Header
