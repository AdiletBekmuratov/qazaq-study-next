import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

const login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login | Qazaq Study</title>
        <meta name='description' content='Qazaq Study Login Page' />
      </Head>
      <section className="relative flex min-h-screen ">
        <div className="flex min-w-0 flex-auto flex-col items-center bg-white sm:flex-row sm:justify-center md:items-start md:justify-start">
          <div
            className="relative hidden h-full flex-auto items-center justify-center overflow-hidden bg-dark-blue bg-cover bg-no-repeat p-10 text-white sm:w-1/2 md:flex xl:w-3/5"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1589395937772-f67057e233c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)',
            }}
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-dark-blue to-light-blue opacity-100" />
            <div className="z-10  w-full max-w-md">
              <div className="mb-6 font-bold leading-tight sm:text-4xl xl:text-5xl">
                Reference site about Lorem Ipsum..
              </div>
              <div className="xl:text-md font-normal text-gray-200 sm:text-sm">
                What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                printing and typesetting industry Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book it has?
              </div>
            </div>
            {/*-remove custom style*/}
            <ul className="circles">
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
              <li />
            </ul>
          </div>
          <div className="flex h-full w-full items-center justify-center rounded-none bg-white p-5 sm:w-auto sm:rounded-lg md:p-10 lg:p-14 xl:w-2/5">
            <div className="w-full max-w-md space-y-8">
              <div className="text-center">
                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                  Welcome Back!
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Please sign in to your account
                </p>
              </div>
              <form className="mt-8 space-y-6" action="#" method="POST">
                <div className="relative">
                  <label className="ml-3 text-sm font-bold tracking-wide text-gray-700">
                    Email
                  </label>
                  <input
                    className=" w-full rounded-2xl border-b border-gray-300 px-4 py-2 text-base outline-none focus:shadow"
                    type="email"
                    placeholder="mail@example.com"
                  />
                </div>
                <div className="mt-8 content-center">
                  <label className="ml-3 text-sm font-bold tracking-wide text-gray-700">
                    Password
                  </label>
                  <input
                    className="w-full rounded-2xl border-b border-gray-300 px-4 py-2 text-base outline-none focus:shadow"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex items-center justify-end">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="text-dark-blue transition duration-300 ease-in-out hover:text-light-blue"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full cursor-pointer justify-center rounded-md bg-dark-blue p-4 
									font-semibold tracking-wide text-gray-100 transition duration-300 ease-in-out hover:shadow-md"
                  >
                    Sign in
                  </button>
                </div>
                <p className="text-md mt-10 flex flex-col items-center justify-center text-center text-gray-500">
                  <span>Don't have an account?</span>
                  <Link href={'/register'}>
                    <a className="cursor-pointer text-dark-blue no-underline transition duration-300 ease-in-out hover:text-light-blue">
                      Sign up
                    </a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default login