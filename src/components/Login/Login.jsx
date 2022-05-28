import { useForm } from 'react-hook-form'
import { useState } from 'react'
import loginSvc from '@/services/login'

export default function Login () {
  const { handleSubmit, register, formState: { errors } } = useForm()
  const [isLogged, setIsLogged] = useState(false)

  const onSubmit = (values) => {
    const { username, password } = values
    console.log(username, password)
    return loginSvc(values)
      .then(() => setIsLogged(true))
  }

  if (isLogged) {
    return <h3>
      Login succesfull!!
    </h3>
  }
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
