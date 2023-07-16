import InfosSection from '@/components/Profile/InfosSection'
import PasswordSection from '@/components/Profile/PasswordSection'
import { getSession } from '@/lib'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Taskify Profile Page.',
}

const Profile = async () => {
  const session = await getSession()
  return (
    <section className='grid md:grid-cols-[1fr_auto_1fr] gap-10'>
      <InfosSection auth={session?.user!} />
      <hr className='h-full bg-thirdColor opacity-40 w-1 rounded-xl' />
      <PasswordSection />
    </section>
  )
}

export default Profile
