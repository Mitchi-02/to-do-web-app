import { HTMLAttributes, InputHTMLAttributes } from 'react';


type InputType = {
  label?: string;
  error?: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
} & HTMLAttributes<HTMLDivElement>

const Input = ({ className, label, error, inputProps, ...rest }: InputType ) => {
  return (
    <div {...rest} className={`group ` + className}>
      <label
        className={` group-focus-within:text-primaryOrange ${
          error ? 'text-mainRed' : 'text-primaryBlack'
        }`}
      >
        {label}
      </label>
      <div
        className={`bg-white mb-2
                py-[13px] rounded-[10px] px-[10px] flex items-center gap-[10px] group outline-2 outline
                focus-within:outline-primaryOrange ${label && 'mt-1'} 
                ${error ? 'outline-mainRed' : 'outline-mainGrey'} `}
      >
        <input
          {...inputProps}
          className={`disabled:text-mainGrey placeholder:text-mainGrey grow bg-white 
            w-full group-focus-within:text-primaryBlack 
                ${
                  error
                    ? 'text-mainRed caret-mainRed'
                    : 'text-primaryBlack caret-mainGrey'
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
