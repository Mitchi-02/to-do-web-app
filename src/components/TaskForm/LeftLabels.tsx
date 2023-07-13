import { Label } from '@/types'

const LeftLabels = ({
  labels,
  addLabel,
  isOpen,
}: {
  labels: Label[]
  addLabel: (label: Label) => void
  isOpen: boolean
}) => {
  return (
    <div
      className={`absolute shadow bg-bgColor z-40 w-full rounded-lg mx-[1px] max-h-[150px] overflow-y-auto ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <ul>
        {labels.map((label) => (
          <li
            key={label}
            onClick={() => addLabel(label)}
            className='cursor-pointer p-3 border-gray-100 border-b hover:text-primaryColor'
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LeftLabels
