import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="body-font">
      <div className='hidden sm:block bg-custom-yellow text-white'>
        <div className="container mx-auto flex flex-row space-x-12 px-5 py-16">
          <div className="w-full lg:w-1/2">
            <Link href={"#"}>
              <a className='text-3xl font-semibold'>
                Qazaq Study
              </a>
            </Link>
            
            <p className="text-md w-full xl:w-1/2 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt saepe nostrum excepturi tempora impedit neque nam blanditiis ipsa officiis ad, error id voluptas optio aliquam necessitatibus praesentium tempore eos.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-end justify-items-center space-x-12 lg:space-x-36">
            <div className="">
              <h2 className="text-2xl font-medium">
                Sitemap
              </h2>
              <nav className="list-none mt-2">
                <li>
                  <a className="hover:text-gray-800 text-md md:text-lg">About Us</a>
                </li>
                <li>
                  <a className="hover:text-gray-800 text-md md:text-lg">Cards</a>
                </li>
                <li>
                  <a className="hover:text-gray-800 text-md md:text-lg">Quiz</a>
                </li>
                <li>
                  <a className="hover:text-gray-800 text-md md:text-lg">Translator</a>
                </li>
              </nav>
            </div>
            <div className="">
              <h2 className="text-2xl font-medium">
                Contact Us
              </h2>
              <nav className="list-none mt-2">
                <li>
                  <a className="hover:text-gray-800 text-md md:text-lg">QStudy@ex.com
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-800 text-md md:text-lg">+7 777 777 7777
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-800 text-md md:text-lg">+7 707 777 7777
                  </a>
                </li>
                <li>
                  <a className="hover:text-gray-800 text-md md:text-lg">Nur-Sultan</a>
                </li>
              </nav>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-dark-blue text-white">
        <div className="container mx-auto flex flex-col flex-wrap py-4 px-5 sm:flex-row">
          <p className="text-center text-sm  sm:text-left">
            © {new Date().getFullYear()} Anel Inc. —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="ml-1"
              target="_blank"
            >
              @se_2011_
            </a>
          </p>
          <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 ">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 ">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 ">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
