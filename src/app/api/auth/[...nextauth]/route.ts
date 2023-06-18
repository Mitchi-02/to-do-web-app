import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import { User } from '@models'

import { dbConnect } from '@utils'
import { IUser } from '@types'
import { AuthOptions } from 'next-auth'

export const authOptions: AuthOptions = {
  providers: [
    /* GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }), */
    CredentialsProvider({
      name: 'Email and Password',
      async authorize(credentials, req) {
        await dbConnect()
        const { email, password } = credentials as {
          email: string
          password: string
        }
        const user = await User.findOne({
          email: email,
        })
        if (!user) {
          console.log('no user with email')
          throw new Error('Invalid credentials')
        }

        const isPassword = await bcrypt.compare(password, user.password)
        if (!isPassword) {
          console.log('wrong password')
          throw new Error('Invalid credentials')
        }

        return user
      },
      //@ts-ignore
      credentials: undefined,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/sign-in',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      console.log('jwt callback')

      return token
    },
    session: async ({ session, token }) => {
      const user = token.user as IUser
      console.log('session callback')

      session.user = user

      return session
    },
  },
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
