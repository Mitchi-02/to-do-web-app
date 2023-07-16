import SignInForm from '@/components/SignInForm'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Taskify Sign In Page.',
}

const SignInPage = () => {
  return (
    <div className='space-y-6 py-6 px-4 sm:px-6 max-w-[700px] mx-auto border-2 rounded-xl'>
      <h1 className='text-center font-bold sm:text-4xl text-3xl text-primaryColor'>
        Sign In
      </h1>
      <SignInForm />
      <div className='justify-center flex flex-wrap'>
        You don't have an account ?
        <Link
          href='/sign-in'
          className='font-bold text-primaryColor underline underline-offset-2 ml-2 hover:opacity-80'
        >
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default SignInPage