import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=" bg-dark-blue py-5 px-5 text-white shadow">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            QStudy
          </span>
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
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
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li>
              <Link href="/translator">
                <a
                  className="block rounded py-2 pr-4 pl-3 text-white hover:opacity-80 md:p-0"
                  aria-current="page"
                >
                  Translator
                </a>
              </Link>
            </li>
            <li>
              <Link href="/vocabulary">
                <a className="block py-2 pr-4 pl-3 text-white hover:opacity-80 md:p-0">
                  Vocabulary Cards
                </a>
              </Link>
            </li>
            <li>
              <Link href="/quiz">
                <a className="block py-2 pr-4 pl-3 text-white hover:opacity-80 md:p-0">
                  Quiz
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="block py-2 pr-4 pl-3 text-white hover:opacity-80 md:p-0">
                  Support
                </a>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <a className="block py-2 pr-4 pl-3 text-white hover:opacity-80 md:p-0">
                  Profile
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
