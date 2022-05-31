import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'wouter'
import useUser from '@/hooks/useUser'

export default function Login () {
  const { login, isLogged } = useUser()
  const { handleSubmit, register, formState: { errors } } = useForm()
  const [, pushLocation] = useLocation()

  const onSubmit = (values) => {
    const { username, password } = values
    login({ username, password })
  }

  useEffect(() => {
    if (isLogged) {
      pushLocation('/')
    }
  })

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input name="username" placeholder="username" {...register('username', { required: true })} />
        <input name="password" placeholder="password" type='password' {...register('password', { required: true, minLength: 7 })} />
        <button className='btn main'>
          Login
        </button>
      </form>
    </>
  )
}
