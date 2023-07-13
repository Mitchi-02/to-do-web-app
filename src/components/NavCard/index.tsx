import Image from 'next/image'
import Link from 'next/link'

const NavCard = ({
  link,
  text,
  image,
}: {
  link: string
  text: string
  image: string
}) => {
  return (
    <Link
      href={link}
      className='flex flex-col gap-2 text-[#212121] font-semibold capitalize rounded-lg transition-transform duration-300 hover:scale-105 justify-center items-center text-center bg-white aspect-square w-48 shadow-[0_0_2_0_rgba(134,134,134,.25)]'
    >
      <Image src={image} alt={text} width={100} height={100} />
      <span>{text}</span>
    </Link>
  )
}

export default NavCard
