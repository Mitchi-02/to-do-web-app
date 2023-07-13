import { ButtonHTMLAttributes } from 'react'
import LoadingAnimation from '../LoadingAnimation'

const Button = ({
  loading,
  children,
  className,
  ...rest
}: { loading?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return loading ? (
    <LoadingAnimation />
  ) : (
    <button
      {...rest}
      className={
        className +
        ` text-bgColor bg-primaryColor py-3 px-4 rounded-xl text-sm font-semibold hover:bg-bgColor 
        hover:text-primaryColor hover:outline-primaryColor outline outline-transparent duration-300 hover:outline-2 transition-all`
      }
    >
      {children}
    </button>
  )
}

export default Button
