import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Navbar = () => {
  const { user, signOtUser } = useContext(UserContext)

  const handleLogout = async () => {
    try {
      await signOtUser()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {user ? (
        <>
          <NavLink to='/'>Home |</NavLink>
          <NavLink onClick={handleLogout} to='/login'>
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to='/login'>Login |</NavLink>
          <NavLink to='/register'>Register |</NavLink>
        </>
      )}
    </>
  )
}

export default Navbar
