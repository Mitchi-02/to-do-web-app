import Skeleton from '@/components/Skeleton'

const loading = () => {  
  return (
    <div className='grid md:grid-cols-3 items-start gap-4 lg:gap-8'>
      {[...Array(3)].map((item) => (
        <div key={item} className='pt-5 pb-2 px-4 rounded-xl shadow'>
          <h2 className=' items-3 font-semibold text-primaryColor'>
            <Skeleton />
          </h2>
          <ul className='mt-4 space-y-4 relative overflow-auto'>
            {[...Array(5)].map((t) => (
              <li key={t} className='w-full'>
                <Skeleton />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default loading
