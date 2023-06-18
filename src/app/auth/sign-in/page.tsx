'use client'

import { Button, Input, LoadingAnimation } from '@components'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })

type LoginForm = yup.InferType<typeof schema>

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<LoginForm>({ resolver: yupResolver(schema)})
  
  const router = useRouter()
  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
      try {
        console.log("loading");
        const res = await signIn('credentials', {
          ...data,
          redirect: false,
        })
        router.push('/profile')
      } catch (error:any) {
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
          Sign In
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
              label='Password'
              error={errors.password?.message}
              inputProps={{
                type: 'password',
                placeholder: 'Enter your password here',
                ...register('password'),
              }}
            />
          </div>
          <Button className='w-full py-4'>Sign In</Button>
        </form>
        <button className='button w-full'>Sign in with google</button>
        <div className='justify-center flex flex-wrap'>
          You don't have an account ?
          <Link
            href='/auth/sign-up'
            className='font-bold text-primaryOrange underline underline-offset-2 ml-2 hover:opacity-80'
          >
            Sign up{' '}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
