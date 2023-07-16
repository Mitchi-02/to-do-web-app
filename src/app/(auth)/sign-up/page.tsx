import SignUpForm from '@/components/SignUpForm'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'


export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Taskify Sign Up Page.',
}

const SignUpPage = () => {
  return (
      <div className='space-y-6 py-6 px-4 sm:px-6 max-w-[700px] mx-auto border-2 rounded-xl'>
        <h1 className='text-center font-bold sm:text-4xl text-3xl text-primaryColor'>
          Sign Up
        </h1>
        <SignUpForm />
        <div className='justify-center flex flex-wrap'>
          Already have an account ?
          <Link
            href='/sign-in'
            className='font-bold text-primaryColor underline underline-offset-2 ml-2 hover:opacity-80'
          >
            Sign in
          </Link>
        </div>
      </div>
  )
}

export default SignUpPage