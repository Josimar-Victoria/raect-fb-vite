import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
  const classButtonBlue =
    'text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
  const classButtonRed =
    'text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'

  return (
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <Link to='/' className='flex items-center'>
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            URLShort APP
          </span>
        </Link>
        <div className='flex md:order-2 m-4'>
          {user ? (
            <>
              <NavLink to='/' className={classButtonBlue}>
                Home
              </NavLink>
              <NavLink
                className={classButtonRed}
                onClick={handleLogout}
                to='/login'
              >
                Logout
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to='/login' className={classButtonBlue}>
                Login
              </NavLink>
              <NavLink to='/register' className={classButtonBlue}>
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
