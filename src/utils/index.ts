import axios from 'axios'

export { default as dbConnect } from './db'
export { default as API } from './api-client'
export const signUp = async (data: {
  email: string
  password: string
  username: string
}) => axios.post('http://localhost:3000/api/auth/sign-up', data)
