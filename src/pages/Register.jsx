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

const Register = () => {
  const { regiterdUser } = useContext(UserContext)
  const [loading, setLoading] = useState(false)
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
      setLoading(true)
      await regiterdUser(email, password)
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
      <Title text='Register' />

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInputText
          type='email'
          placeholder='Email'
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
          placeholder='password'
          error={errors.password}
          label='Ingresa tu password'
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
          error={errors.confirmPassword}
          label='Confirma tu password'
          {...register('confirmPassword', {
            validate: validateEquals(getValues('password'))
          })}
        >
          <FormError errors={errors.confirmPassword} />
        </FormInputText>
        <Buttom text='Registrar' type='submit' loading={loading} />
      </form>
    </>
  )
}

export default Register
