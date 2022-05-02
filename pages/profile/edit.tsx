import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const ProfileEdit: NextPage = () => {
  return (
    <>
      <Navbar />
      <section className="w-full">
        <div className="container mx-auto grid grid-cols-1 items-center gap-y-10 px-12 py-16 md:px-20 lg:grid-cols-2">
          <div className="flex flex-col items-center space-x-12 space-y-4 md:flex-row ">
            <img className="aspect-square w-36 rounded-full" src={'/images/profileAnel.png'} />
            <div className="">
              <h3>Anel Amanbekova</h3>
              <h3 className="text-light-blue">Advanced</h3>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-6 md:justify-end">
            <Link href={'/profile'}>
              <a className="rounded-lg border hover:text-white bg-white px-6 py-2.5 ripple text-black md:px-10 ">
                CANCEL
              </a>
            </Link>
            <Link href={'/profile'}>
              <a className="rounded-lg border bg-dark-blue px-8 py-2.5 ripple text-white  md:px-14">
                SAVE
              </a>
            </Link>
          </div>
        </div>
        <div className="container mx-auto px-10 md:px-20 lg:px-40">
          <form action="#" method="POST">
            <div className="">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-lg font-bold text-black"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-lg font-bold text-black"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md border-gray-300 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 h-px bg-gray-300 "></div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email-address"
                      className="block text-lg font-bold text-black"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md border-gray-300 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 h-px bg-gray-300 "></div>

                  <div className="col-span-6">
                    <div className="rounded-lg bg-gray-50 py-2 shadow-xl lg:w-2/3">
                      <div className="m-4">
                        <div className="flex w-full items-center justify-center">
                          <label className="flex h-24 w-full flex-col border-4 border-dashed hover:border-gray-300 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-4">
                              <p className="text-center text-xl tracking-wider text-gray-400 group-hover:text-gray-600">
                                <span className="text-black">
                                  {' '}
                                  Click to upload
                                </span>{' '}
                                new <br />
                                profile photo
                              </p>
                            </div>
                            <input type="file" className="opacity-0" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 h-px bg-gray-300"></div>
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="phone-number"
                      className="block text-lg font-bold text-black"
                    >
                      Phone number
                    </label>
                    <input
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="number"
                      className="mt-1 block w-full rounded-md border-gray-300 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="Address"
                      className="block text-lg font-bold text-black"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="Address"
                      id="Address"
                      autoComplete="Address"
                      className="mt-1 block w-full rounded-md border-gray-300 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 h-px bg-gray-300 "></div>

                  <h2 className="col-span-6 text-dark-blue">Update Password</h2>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="current-password"
                      className="block text-lg font-bold text-black"
                    >
                      Current Password
                    </label>
                    <input
                      type="text"
                      name="current-password"
                      id="current-password"
                      autoComplete="Current Password"
                      className="mt-1 block w-full rounded-md border-gray-300 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="new-password"
                      className="block text-lg font-bold text-black"
                    >
                      New Password
                    </label>
                    <input
                      type="text"
                      name="new-password"
                      id="new-password"
                      autoComplete="New Password"
                      className="mt-1 block w-full rounded-md border-gray-300 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="confirm-new-password"
                      className="block text-lg font-bold text-black"
                    >
                      Confirm New Password
                    </label>
                    <input
                      type="text"
                      name="confirm-new-password"
                      id="confirm-new-password"
                      autoComplete="Confirm New Password"
                      className="mt-1 block w-full rounded-md border-gray-300 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5 px-4 py-3 text-left sm:px-6">
                <Link href={''}>
                  <a className="rounded-lg border bg-dark-blue px-8 py-2 ripple text-white md:px-14 md:py-3">
                    UPDATE PASSWORD
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ProfileEdit
