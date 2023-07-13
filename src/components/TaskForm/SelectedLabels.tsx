import { Label } from '@/types'

const SelectedLabels = ({
  labels,
  removeLabel,
  toggle,
  isOpen,
}: {
  labels: Label[]
  removeLabel: (label: Label) => void
  toggle: () => void
  isOpen: boolean
}) => {
  return (
    <div className='flex border-thirdColor border-2 bg-bgColor rounded-lg'>
      <ul className='flex gap-2 grow flex-wrap p-3 min-h-[54px]'>
        {labels.map((label) => (
          <li
            key={label}
            className='flex justify-center items-center py-1 px-2 rounded-full text-bgColor bg-primaryColor border border-primaryColor'
          >
            <span className='text-sm font-normal'>{label}</span>
            <svg
              onClick={() => removeLabel(label)}
              xmlns='http://www.w3.org/2000/svg'
              width='100%'
              height='100%'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-x cursor-pointer hover:text-primaryColor rounded-full w-4 h-4 ml-2'
            >
              <line x1='18' y1='6' x2='6' y2='18'></line>
              <line x1='6' y1='6' x2='18' y2='18'></line>
            </svg>
          </li>
        ))}
      </ul>
      <button
        type='button'
        className='cursor-pointer px-2 shrink-0 border-l flex items-center border-gray-200 text-thirdColor outline-none focus:outline-none'
      >
        <svg
          onClick={toggle}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className={`w-6 h-6 transition-all ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points='18 15 12 9 6 15'></polyline>
        </svg>
      </button>
    </div>
  )
}

export default SelectedLabels
