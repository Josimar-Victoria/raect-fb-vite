import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import FormError from '../components/FormError'
import FormInputText from '../components/FormInputText'
import { UserContext } from '../context/UserProvider'
import { errorsFirebase } from '../util/errorsFirebase'
import { formValidate } from '../util/formValidate'

const Register = () => {
  const { regiterdUser } = useContext(UserContext)
  const {
    required,
    patternEmail,
    minLength,
    validateTrim,
    validateEquals
  } = formValidate()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: 'josimar@gmail.com',
      password: 'josimar123',
      confirmPassword: 'josimar123'
    }
  })

  const onSubmit = async ({ email, password }) => {
    try {
      await regiterdUser(email, password)
      navigate('/')
    } catch (error) {
      console.log(error.code)
      const { code, message } = errorsFirebase(error.code)
      setError(code, { message: message })
    }
  }

  return (
    <>
      <h1>Register</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInputText
          type='email'
          placeholder='Email'
          {...register('email', {
            required,
            pattern: patternEmail
          })}
        >
          <FormError errors={errors.email} />
        </FormInputText>
        <FormInputText
          type='password'
          placeholder='password'
          {...register('password', {
            minLength,
            validate: validateTrim
          })}
        >
          <FormError errors={errors.password} />
        </FormInputText>
        <FormInputText
          type='password'
          placeholder='confirm password'
          {...register('confirmPassword', {
            validate: validateEquals(getValues("password"))
          })}
        >
          <FormError errors={errors.confirmPassword} />
        </FormInputText>

        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default Register
