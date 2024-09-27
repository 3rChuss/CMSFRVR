import { FC } from 'react'
import { Link } from 'react-router-dom'

interface NavItemProps {
  href: string
  iconPath: string
  text: string
  additionalClasses?: string
}

const NavItem: FC<NavItemProps> = ({
  href,
  iconPath,
  text,
  additionalClasses = ''
}) => (
  <Link
    className={`my-2 flex w-full items-center justify-start p-4 font-thin capitalize transition-colors duration-200 ${additionalClasses}`}
    to={href}
    title={text}
  >
    <span className="text-left">
      <svg
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 2048 1792"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={iconPath}></path>
      </svg>
    </span>
    <span className="mx-4 hidden text-sm font-normal md:block">{text}</span>
  </Link>
)

export default NavItem
