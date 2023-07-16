import Skeleton from '@/components/Skeleton'

const loading = () => {
  return (
    <div>
      <div className='space-y-6 py-6 px-4 sm:px-6 max-w-[700px] mx-auto border-2 rounded-xl'>
        <h1>
          <Skeleton className='max-w-[500px] mb-8' />
        </h1>
        <form className='space-y-10'>
          <div className='space-y-4'>
            <Skeleton />
            <Skeleton />
          </div>
          <Skeleton />
        </form>
      </div>
    </div>
  )
}

export default loading
