import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { User } from '@/models'
import { dbConnect } from '@/lib'
import { AuthOptions, User as UserType } from 'next-auth'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Email and Password',
      //@ts-ignore
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

        return {
          name: user.username,
          _id: user._id,
          email: user.email,
          username: user.username
        }
      },
      //@ts-ignore
      credentials: undefined,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      return token
    },
    session: async ({ session, token }) => {
      const user = token.user as UserType
      session.user = user
      return session
    },
  },
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
