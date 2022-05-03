import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Navbar = () => {
  const { user, logout } = useContext(UserContext)

  return (
    <>
      {user ? (
        <div>
          <NavLink to='/'>Home</NavLink>
          <NavLink onClick={logout} to='/login'>Logout</NavLink>
        </div>
      ) : (
        <div>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/register'>Register</NavLink>
        </div>
      )}
    </>
  )
}

export default Navbar
