import registerSvc from '@/services/register'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Register () {
  const { handleSubmit, register, formState: { errors } } = useForm()
  const [registered, setRegistered] = useState(false)

  const onSubmit = (values) => {
    return registerSvc(values)
      .then(() => setRegistered(true))
  }

  if (registered) {
    return (
      <h3>
        You are officially registered (not really). Thank you.
      </h3>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="username" name="username" {...register('username', { required: true })} />
      <input placeholder="password" type='password' name="password" {...register('password', { required: true, minLength: 7 })} />
      <button className="btn main" >Register</button>
    </form>
  )
}
