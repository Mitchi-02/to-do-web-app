import Header from '@/components/Header'
import SessionProvider from '@/components/SessionProvider'
import '@/styles/globals.css'
import { Metadata } from 'next'
import { Session } from 'next-auth'
import { Poppins } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { getSession } from '@/lib'
import ThemeProvider from '@/ThemeProvider'

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ['400', '700', '900', '800', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Taskify',
  description: 'The to do list app for the modern age.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = (await getSession()) as Session
  return (
    <html lang='en'>
      <body
        className={
          poppins.className + ' text-secondaryColor min-h-screen flex flex-col'
        }
      >
        <SessionProvider session={session}>
          <ThemeProvider>
            <Header />
            <div className='main'>
              <div className='gradient' />
            </div>
            <main className='app PageContainer grow'>{children}</main>
            <ToastContainer />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
