import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Register = () => {
  const { regiterdUser } = useContext(UserContext)
  // const [email, setEmail] = useState('josimar@gmail.com')
  // const [password, setPassword] = useState('josimar123')
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: 'josimar@gmail.com'
    }
  })

  const onSubmit = async ({ email, password }) => {
    console.log('registrado' + email + password)
    try {
      await regiterdUser(email, password)
      navigate('/')
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError('email', {
            type: 'manual',
            message: 'Email Ya está em uso'
          })
          break

        case 'auth/invalid-email':
          setError('email', {
            type: 'manual',
            message: 'Email inválido'
          })
          break

        case 'auth/operation-not-allowed':
          setError('email', {
            type: 'manual',
            message: 'Operacion no permitida'
          })
          break

        case 'auth/weak-password':
          setError('email', {
            type: 'manual',
            message: 'Contraseña débil'
          })
          break

        default:
          console.log('Erro desconhecido')
          break
      }
    }
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='email'
          placeholder='email'
          name='email'
          {...register('email', {
            required: {
              value: true,
              message: 'Campo obrigatório'
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Email inválido'
            }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type='password'
          placeholder='password'
          name='password'
          {...register('password', {
            minLength: {
              value: 6,
              message: 'La contraseña debe tener al menos 6 caracteres'
            },
            validate: {
              trim: value => {
                if (!value.trim()) {
                  return 'Campo obligatorio'
                }
                return true
              }
            }
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type='password'
          placeholder='confirm password'
          name='confirmPassword'
          {...register('confirmPassword', {
            validate: {
              confirmPassword: value =>
                value === getValues('password') ||
                'Las contraseñas no coinciden'
            }
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default Register
