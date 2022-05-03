import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Login = () => {
  const { setUser, user } = useContext(UserContext)

  const navigate = useNavigate()
  const handleClickLogin = () => {
    setUser(true)
    navigate('/')
  }

  return (
    <div>
      <button onClick={handleClickLogin}> login</button>

      <h1>{user ? 'logged in' : 'not logged in'}</h1>
    </div>
  )
}

export default Login
