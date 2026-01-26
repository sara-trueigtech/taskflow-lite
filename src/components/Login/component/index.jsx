import React from 'react'
import { useForm } from 'react-hook-form';
import useLogin from '../Hooks/useLogin';

const Login = () => {
  const {register, handleSubmit, formState} = useForm();
  const {handleLogin} = useLogin();

  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input type='email' {...register("email", {required:"email is required"})} placeholder='email'/>
        {formState.errors.email && <p>{formState.errors.email.message}</p>}
        <input type='password' {...register("password", {required:"password is required"})} placeholder='password'/>
        {formState.errors.password && <p>{formState.errors.password.message}</p>}

        <button type='submit'>login</button>
      </form>
    </>
  )
}

export default Login