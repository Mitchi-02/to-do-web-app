import Header from '@/components/Header'
import SessionProvider from '@/components/SessionProvider'
import '@/styles/globals.css'
import { Session } from 'next-auth'
import { Poppins } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { getSession } from '@/lib'
import ThemeProvider from '@/ThemeProvider'
import { Metadata } from 'next'

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  weight: ['400', '700', '900', '800', '500', '600'],
})

export const metadata: Metadata = {
  keywords: ['taskify', 'to do list', 'todo list', 'productivity', 'app'],
  authors: [
    {
      name: 'Ilyas BENHAMMADI',
    },
  ],
  creator: 'Ilyas BENHAMMADI',
  publisher: 'Ilyas BENHAMMADI',
  openGraph: {
    title: 'Taskify',
    description: 'The to do list app for the modern age',
    siteName: 'Taskify',
    images: [
      {
        url: '/images/logo.svg',
        width: 600,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
