import { Header, SessionProvider } from '@components'
import '@styles/globals.css'
import { Metadata } from 'next'
import { Session } from 'next-auth'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ['400', '700', '900', '800', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Taskify',
  description: 'The to do list app for the modern age.',
}

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode
  session: Session
}) {
  return (
    <html lang='en'>
      <body className={poppins.className + ' text-primaryBlack'}>
        <SessionProvider session={session}>
          <Header />
          <div className='main'>
            <div className='gradient' />
          </div>
          <main className='app'>{children}</main>
        </SessionProvider>
      </body>
    </html>
  )
}
