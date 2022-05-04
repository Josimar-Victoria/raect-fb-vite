import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Login = () => {
  const { loginUser, user } = useContext(UserContext)
  const [email, setEmail] = useState('josimar@gmail.com')
  const [password, setPassword] = useState('josimar123')
  const navigate = useNavigate()

  const handleLogin = async e => {
    e.preventDefault()
    try {
      await loginUser(email, password)
      console.log('User login', email, password)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type='email'
          placeholder='email'
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default Login
