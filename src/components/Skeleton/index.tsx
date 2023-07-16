import { DetailedHTMLProps, HTMLAttributes } from "react"

const Skeleton = (
  { className, ...rest }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => {
  return <div className={'skeleton min-h-[50px] mx-auto '+className || ''} {...rest} />
}

export default Skeleton