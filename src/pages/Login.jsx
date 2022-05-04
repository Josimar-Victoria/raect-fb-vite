import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import FormError from '../components/FormError'
import FormInputText from '../components/FormInputText'
import { UserContext } from '../context/UserProvider'
import { errorsFirebase } from '../util/errorsFirebase'
import { formValidate } from '../util/formValidate'

const Login = () => {
  const { loginUser, user } = useContext(UserContext)

  const navigate = useNavigate()

  const { required, patternEmail, minLength, validateTrim } = formValidate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: 'josimar@gmail.com',
      password: 'josimar123'
    }
  })

  const onSubmit = async ({ email, password }) => {
    try {
      await loginUser(email, password)
      console.log('User login', email, password)
      navigate('/')
    } catch (error) {
      console.log(error.code)
      const { code, message } = errorsFirebase(error.code)
      setError(code, { message: message })
    }
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInputText
          type='email'
          placeholder='Ingrese su email'
          {...register('email', {
            required,
            pattern: patternEmail
          })}
        >
          <FormError errors={errors.email} />
        </FormInputText>
        <FormInputText
          type='password'
          placeholder='Ingrese su contraseña'
          {...register('password', {
            minLength,
            validate: validateTrim
          })}
        >
          <FormError errors={errors.password} />
        </FormInputText>

        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default Login
