import { HTMLAttributes, InputHTMLAttributes } from 'react'

type InputType = {
  label?: string
  error?: string
  inputProps: InputHTMLAttributes<HTMLInputElement>
} & HTMLAttributes<HTMLDivElement>

const Input = ({ className, label, error, inputProps, ...rest }: InputType) => {
  return (
    <div {...rest} className={`group ` + className}>
      <label
        className={` group-focus-within:text-primaryColor ${
          error ? 'text-mainRed' : 'text-secondaryColor'
        }`}
      >
        {label}
      </label>
      <div
        className={`bg-bgColor mb-2
                p-3 rounded-lg flex items-center gap-3 group outline-2 outline
                focus-within:outline-primaryColor ${label && 'mt-1'} 
                ${error ? 'outline-mainRed' : 'outline-thirdColor'} `}
      >
        <input
          {...inputProps}
          className={`disabled:text-thirdColor placeholder:text-thirdColor grow bg-bgColor 
            w-full group-focus-within:text-secondaryColor 
                ${
                  error
                    ? 'text-mainRed caret-mainRed'
                    : 'text-secondaryColor caret-thirdColor'
                }`}
        />
      </div>
      {error ? (
        <p className='capitalize text-mainRed text-sm font-medium'>{error}</p>
      ) : (
        <p>&nbsp;</p>
      )}
    </div>
  )
}

export default Input
