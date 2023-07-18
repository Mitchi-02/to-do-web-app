'use client'

import Input from '@/components/Input'
import Button from '@/components/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { registerAction } from '@/actions'
import toast from '@/lib/toast'

const schema = yup.object({
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], "passwords don't match"),
})

type RegisterForm = yup.InferType<typeof schema>

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    //@ts-ignore
  } = useForm<RegisterForm>({ resolver: yupResolver(schema) })

  const router = useRouter()
  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    let res: any = await registerAction(data)
    if (!res?.error) {
      res = await signIn('credentials', {
        ...data,
        redirect: false,
      })
    }
    if (res?.error) {
      toast('error', res?.error)
    } else {
      toast('success', 'Account created successfully')
      router.push('/profile')
    }
  }

  return (
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
            placeholder: '*******',
            ...register('password'),
          }}
        />
        <Input
          label='Confirm Password'
          error={errors.confirm_password?.message}
          inputProps={{
            type: 'password',
            placeholder: '*******',
            ...register('confirm_password'),
          }}
        />
      </div>
      <Button loading={isSubmitting} className='w-full py-4'>
        Sign Up
      </Button>
    </form>
  )
}

export default SignUp
