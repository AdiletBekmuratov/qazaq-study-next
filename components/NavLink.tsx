import Link from 'next/link'
import React, { FC } from 'react'

interface NavLinkProps {
  href?: string
  title: string
  condition: boolean
  onClick?: (() => Promise<undefined>) | undefined
}

const NavLink: FC<NavLinkProps> = ({ href, title, condition, onClick }) => {
  if (!condition) {
    return null
  }

  if (onClick) {
    return (
      <li>
        <button
          onClick={onClick}
          className="block rounded py-2 pr-4 pl-3 text-white hover:opacity-80 md:p-0"
        >
          {title}
        </button>
      </li>
    )
  }

  return (
    <li>
      <Link href={href!}>
        <a className="block rounded py-2 pr-4 pl-3 text-white hover:opacity-80 md:p-0">
          {title}
        </a>
      </Link>
    </li>
  )
}

export default NavLink
