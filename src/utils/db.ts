import mongoose from 'mongoose'

let isConnected = false

export default async (): Promise<void> => {
  console.log('connecting to db ....');
  
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('MongoDB is already connected')
    return
  }

  try {
    await mongoose.connect(process.env.DB_URL || '', {
      dbName: 'taskify',
    })
    isConnected = true
    console.log('MongoDB connected for the first time')
  } catch (error) {
    console.log(error)
    throw error
  }
}
