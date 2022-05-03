import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Register = () => {
  const { regiterdUser } = useContext(UserContext)
  const [email, setEmail] = useState('josimar@gmail.com')
  const [password, setPassword] = useState('josimar123')
  const navigate = useNavigate()

  const handleRegister = async e => {
    e.preventDefault()
    try {
      await regiterdUser(email, password)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
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
        <input
          type='password'
          placeholder='confirm password'
          name='confirmPassword'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default Register
