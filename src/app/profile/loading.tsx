import Skeleton from "@/components/Skeleton"

const loading = () => {
  return (
    <section className='grid md:grid-cols-[1fr_auto_1fr] gap-10'>
      <div className='space-y-10'>
        <Skeleton />
        <form className="space-y-5">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </form>
      </div>
      <hr className='h-full bg-thirdColor opacity-40 w-1 rounded-xl' />
      <div className='space-y-10'>
        <Skeleton />
        <form className="space-y-5">
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