import Skeleton from '@/components/Skeleton'

const loading = () => {
  return (
    <section className='grid md:grid-cols-2 gap-8'>
      <div className='space-y-10'>
        <Skeleton />
        <form className='space-y-5'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </form>
      </div>
      <div className='space-y-10'>
        <Skeleton />
        <form className='space-y-5'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </form>
      </div>
    </section>
  )
}

export default loading
