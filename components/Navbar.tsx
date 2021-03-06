import useAuth from '@/hooks/useAuth'
import { signOut, useSession } from 'next-auth/react'
import React, { useState } from 'react'
import NavLink from './NavLink'

const Navbar = () => {
  const { data: session } = useSession()
  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = () => {
    setOpen((prev) => !prev)
  }
  return (
    <nav className="fixed top-0 z-40 w-full bg-dark-blue text-white shadow">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-5">
        <a href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            QStudy
          </span>
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          onClick={handleOpen}
          type="button"
          className={`ml-3 inline-flex items-center rounded-lg active:scale-95 ${
            !open ? 'border-2 border-white' : 'bg-gray-100'
          } p-2 text-sm focus:outline-none md:hidden ${
            open ? 'text-dark-blue' : 'text-white'
          }`}
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            className="hidden h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`${open ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="mobile-menu"
        >
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <NavLink title="Translator" href="/translator" condition={true} />
            <NavLink
              title="Vocabulary Cards"
              href="/vocabulary"
              condition={!!session?.user && !session?.error}
            />
            <NavLink
              title="Quiz"
              href="/quiz"
              condition={!!session?.user && !session?.error}
            />
            <NavLink title="Support" href="/support" condition={true} />
            <NavLink
              title="Profile"
              href="/profile"
              condition={!!session?.user}
            />

            <NavLink
              condition={!!session?.user}
              title="Quit"
              onClick={() => signOut({ callbackUrl: '/login' })}
            />
            <NavLink
              condition={!session?.user && !session?.error}
              title="Login"
              href="/login"
            />
            <NavLink
              condition={!session?.user && !session?.error}
              title="Register"
              href="/register"
            />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
