import { ButtonHTMLAttributes } from "react"

const Button = ({ children, className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...rest}
      className={
        className +
        ' text-white bg-primaryOrange py-3 px-4 rounded-xl text-sm font-semibold hover:bg-white hover:text-primaryOrange hover:outline-primaryOrange outline duration-300 hover:outline-2 transition-all'
      }
    >
      {children}
    </button>
  )
}

export default Button