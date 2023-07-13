'use client'

import Error from '@/components/Error'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  console.log(error)
  return (
    <div className='text-mainRed font-bold text-center'>
      <h2 className='text-4xl'>Something went wrong !</h2>
      <Error />
      <button className='text-3xl' onClick={() => reset()}>
        Click here to try again
      </button>
    </div>
  )
}
