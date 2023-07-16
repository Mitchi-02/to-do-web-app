'use client'

import Image from 'next/image'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import Navbar from './Navbar'
import DarkModeToggle from '../DarkModeToggle'

const Header = () => {
  const { data: session } = useSession()
  return (
    <header className=' py-5 border-b text-mainBlack relative z-[1000]'>
      <div className='flex md:justify-between gap-6 items-center PageContainer'>
        <Link href='/' className='flex gap-2 items-center font-bold text-lg'>
          <Image src='/images/logo.svg' alt='Taskify' width={30} height={30} />
          <span className='hidden sm:inline'>Taskify</span>
        </Link>
        <Navbar className='order-3 md:order-2' />
        <div className='flex items-center gap-6 order-2 md:order-3 ml-auto md:ml-0'>
          <DarkModeToggle />
          {session ? (
            <button
              className='hidden md:inline text-primaryColor font-semibold hover:text-secondaryColor transition-all duration-300'
              onClick={() => signOut()}
            >
              Sign out
            </button>
          ) : (
            <div className='gap-2 text-primaryColor hidden md:flex'>
              <Link
                href='/sign-in'
                className='font-semibold hover:text-secondaryColor transition-all duration-300'
              >
                Sign In
              </Link>
              |
              <Link
                href='/sign-up'
                className='font-semibold hover:text-secondaryColor transition-all duration-300'
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
