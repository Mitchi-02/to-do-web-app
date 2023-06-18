import { User } from '@models'
import bcrypt from 'bcrypt'
import { dbConnect } from '@utils'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest): Promise<NextResponse<{ message:string }>>{
  console.log("end point");
  await dbConnect()
  const { email, username, password } = await req.json()
  let user = await User.findOne({
    email,
  })
  if (user)
    return NextResponse.json({
      message: 'User with same email already exists',
    })

  const hashedPassword = await bcrypt.hash(password, 10)
  user = await User.create({
    username,
    email,
    password: hashedPassword,
  })
  const { password:_, ...userWithoutPassword } = user

  return NextResponse.json({
    message: 'Registration success',
    user: userWithoutPassword,
  })
}
