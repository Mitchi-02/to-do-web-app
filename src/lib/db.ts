import mongoose from 'mongoose'

let isConnected = false

export default async (): Promise<void> => {  
  mongoose.set('strictQuery', true)

  if (isConnected) return

  try {
    await mongoose.connect(process.env.DB_URL || '', {
      dbName: 'taskify',
    })
    isConnected = true
  } catch (error) {
    console.log(error)
    throw error
  }
}
