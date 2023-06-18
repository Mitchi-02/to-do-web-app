'use client'

import { Button, Input } from '@components'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { signIn, useSession } from 'next-auth/react'
import axios from 'axios'
//import { signUp } from '@utils'
import { useRouter } from 'next/navigation'
import { API } from '@utils'


const schema = yup
  .object({
    email: yup.string().email().required(),
    username: yup.string().required(),
    password: yup.string().required(),
  })

type RegisterForm = yup.InferType<typeof schema>

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<RegisterForm>({ resolver: yupResolver(schema)})
  
  const router = useRouter()
  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    try {
      console.log('loading')
      const res = await API.post('/auth/sign-up', data)
      console.log(res);
      const res2 = await signIn('credentials', {
        ...data,
        redirect: false,
        callbackUrl:"/profile"
      })
      console.log('end laoding')
      console.log(res2);
      router.push('/profile')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='py-6 px-6'>
      <div
        className='space-y-6 py-6 px-4 sm:px-6 max-w-[700px] mx-auto border-2 rounded-xl'
        onClick={() => clearErrors()}
      >
        <h1 className='text-center font-bold sm:text-4xl text-3xl text-primaryOrange'>
          Sign Up
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div className='space-y-3'>
            <Input
              label='Email'
              error={errors.email?.message}
              inputProps={{
                type: 'text',
                placeholder: 'Enter your email here',
                ...register('email'),
              }}
            />
            <Input
              label='Username'
              error={errors.username?.message}
              inputProps={{
                type: 'text',
                placeholder: 'Enter your username here',
                ...register('username'),
              }}
            />
            <Input
              label='Password'
              error={errors.password?.message}
              inputProps={{
                type: 'password',
                placeholder: 'Enter your password here',
                ...register('password'),
              }}
            />
          </div>
          <Button className='w-full py-4'>Sign Up</Button>
        </form>
        <div className='justify-center flex flex-wrap'>
          Already have an account ?
          <Link
            href='/auth/sign-in'
            className='font-bold text-primaryOrange underline underline-offset-2 ml-2 hover:opacity-80'
          >
            Sign in{' '}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
