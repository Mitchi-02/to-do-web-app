"use client"

import { User } from "next-auth"
import Input from "../Input"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Button from "../Button"
import { updateInfosAction } from "@/actions"
import toast from "@/lib/toast"

const schema = yup.object({
  email: yup.string().email().required(),
  username: yup.string().required(),
})

type InformationForm = yup.InferType<typeof schema>

const InfosSection = ({ auth }: { auth: User}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<InformationForm>({ resolver: yupResolver(schema), defaultValues: { email: auth.email, username: auth.username } })

  const onSubmit: SubmitHandler<InformationForm> = async (data) => {
    if(!isDirty) return
    const res = await updateInfosAction(data)
    if (res?.error) {
      toast('error', res?.error)
    } else {
      toast('success', 'Info updated successfully')
    }
  }

  return (
    <div className='space-y-10'>
      <h2 className='text-2xl font-bold'>Information Section</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='grid'>
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
        <Button loading={isSubmitting} className='py-4'>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default InfosSection