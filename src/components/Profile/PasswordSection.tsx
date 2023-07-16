'use client'

import Input from '@/components/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from '../Button'
import toast from '@/lib/toast'
import changePassword from '@/actions/changePassword'

const schema = yup.object({
  old_password: yup.string().required(),
  new_password: yup.string().required(),
  confirm_new_password: yup
    .string()
    .oneOf([yup.ref('new_password')], "passwords don't match"),
})

type PasswordForm = yup.InferType<typeof schema>

const PasswordSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    //@ts-ignore
  } = useForm<PasswordForm>({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<PasswordForm> = async (data) => {
    const { confirm_new_password, ...rest } = data
    const res = await changePassword(rest)
    if (res?.error) {
      toast('error', res?.error)
    } else {
      toast('success', 'Password updated successfully')
    }
  }

  return (
    <div className='space-y-10'>
      <h2 className='text-2xl font-bold'>Change Password</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='grid gap-5'>
        <Input
          label='Old Password'
          error={errors.old_password?.message}
          inputProps={{
            type: 'password',
            placeholder: '*******',
            ...register('old_password'),
          }}
        />
        <Input
          label='New Password'
          error={errors.new_password?.message}
          inputProps={{
            type: 'password',
            placeholder: '*******',
            ...register('new_password'),
          }}
        />
        <Input
          label='Confirm New Password'
          error={errors.confirm_new_password?.message}
          inputProps={{
            type: 'password',
            placeholder: '*******',
            ...register('confirm_new_password'),
          }}
        />
        <Button loading={isSubmitting} className='py-4'>
          Change Password
        </Button>
      </form>
    </div>
  )
}

export default PasswordSection
