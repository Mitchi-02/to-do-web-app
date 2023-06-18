'use client'

import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Button, Navbar } from '@components'
import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)
  const { data:session } = useSession()
  return (
    <header className='flex justify-between items-center py-5 px-8 border-b text-mainBlack'>
      <Link href='/' className='flex gap-2 items-center font-bold text-lg'>
        <Image src='/images/logo.svg' alt='Taskify' width={30} height={30} />
        <span className='hidden sm:inline'>Taskify</span>
      </Link>
      <Navbar />
      {session?.user ? (
        <Button className='hidden md:inline' onClick={() => signOut()}>
          Sign out
        </Button>
      ) : (
        <Button className='hidden md:inline' onClick={() => signIn()}>
          Sign In
        </Button>
      )}
    </header>
  )
}



export default Header
