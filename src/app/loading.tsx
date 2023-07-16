import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <section className='py-4'>
      <h1>
        <Skeleton className='max-w-[500px] mb-8' />
      </h1>
      <h2>
        <Skeleton />
        <Skeleton className='mt-2 mb-10 max-w-[300px]' />
      </h2>
      <p>
        <Skeleton />
        <Skeleton className='mt-2 max-w-[500px]' />
      </p>
    </section>
  )
}
