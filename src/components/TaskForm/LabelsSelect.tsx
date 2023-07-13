import { Label } from '@/types'
import { SetStateAction, useState } from 'react'
import SelectedLabels from './SelectedLabels'
import LeftLabels from './LeftLabels'

const LabelsSelect = ({
  error,
  labels,
  selectedLabels,
  setSelectedLabels,
  setValue,
}: {
  error?: string
  labels: readonly Label[]
  selectedLabels: Label[]
  setSelectedLabels: React.Dispatch<SetStateAction<Label[]>>
  setValue: (labels: Label[]) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const addLabel = (label: Label) => {
    setSelectedLabels([...selectedLabels, label])
    setValue([...selectedLabels, label])
  }
  const removeLabel = (label: Label) => {
    setSelectedLabels(selectedLabels.filter((l) => l !== label))
    setValue(selectedLabels.filter((l) => l !== label))
  }
  const toggle = () => setIsOpen((prev) => !prev)
  return (
    <div className='relative'>
      <label className={`${error ? 'text-mainRed' : 'text-secondaryColor'}`}>
        Labels
      </label>
      <SelectedLabels
        isOpen={isOpen}
        toggle={toggle}
        labels={selectedLabels}
        removeLabel={removeLabel}
      />
      <LeftLabels
        isOpen={isOpen}
        labels={labels.filter((l) => !selectedLabels.includes(l))}
        addLabel={addLabel}
      />
      {error ? (
        <p className='capitalize text-mainRed text-sm font-medium mt-1'>
          {error}
        </p>
      ) : (
        <p>&nbsp;</p>
      )}
    </div>
  )
}

export default LabelsSelect
