import {
  HTMLAttributes,
  InputHTMLAttributes,
  SelectHTMLAttributes,
} from 'react'

type SelectType = {
  label?: string
  error?: string
  options: readonly string[]
  selectProps: SelectHTMLAttributes<HTMLSelectElement>
} & HTMLAttributes<HTMLDivElement>

const Select = ({
  className,
  label,
  error,
  options,
  selectProps,
  ...rest
}: SelectType) => {
  return (
    <div {...rest} className={`group ` + className}>
      <label className={`${error ? 'text-mainRed' : 'text-secondaryColor'}`}>
        {label}
      </label>

      <select
        {...selectProps}
        className={`${
          label && 'mt-1'
        } disabled:text-thirdColor p-3 outline-2 outline focus-within:outline-primaryColor mb-2 rounded-lg 
        placeholder:text-thirdColor grow bg-bgColor w-full capitalize
                ${
                  error
                    ? 'text-mainRed caret-mainRed outline-mainRed'
                    : 'text-secondaryColor caret-thirdColor outline-thirdColor'
                }`}
      >
        {options.map((option) => (
          <option
            key={option}
            className='p-3 border-gray-100 border-b hover:text-primaryColor hover:bg-primaryColor hover:bg-opacity-20'
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p className='capitalize text-mainRed text-sm font-medium'>{error}</p>
      ) : (
        <p>&nbsp;</p>
      )}
    </div>
  )
}

export default Select
