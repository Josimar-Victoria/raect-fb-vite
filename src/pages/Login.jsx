import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Buttom from '../components/Buttom'
import ButtonLoading from '../components/ButtonLoading'
import FormError from '../components/FormError'
import FormInputText from '../components/FormInputText'
import Title from '../components/Title'
import { UserContext } from '../context/UserProvider'
import { errorsFirebase } from '../util/errorsFirebase'
import { formValidate } from '../util/formValidate'

const Login = () => {
  const { loginUser, user } = useContext(UserContext)
  const [loading, setLoading] = useState(false)
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
      setLoading(true)
      await loginUser(email, password)
      navigate('/')
    } catch (error) {
      console.log(error.code)
      const { code, message } = errorsFirebase(error.code)
      setError(code, { message: message })
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <Title text='Login' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInputText
          type='email'
          placeholder='Ingrese su email'
          label='Ingresa tu email'
          error={errors.email}
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
          label='Ingresa tu contraseña'
          error={errors.password}
          {...register('password', {
            minLength,
            validate: validateTrim
          })}
        >
          <FormError errors={errors.password} />
        </FormInputText>
        <Buttom text='Ingresar' type='submit' loading={loading} />
      </form>
    </>
  )
}

export default Login
