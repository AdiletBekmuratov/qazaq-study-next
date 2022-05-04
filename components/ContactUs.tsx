import React from 'react'
import Link from 'next/link'
import Button from './Button'

const ContactUs = () => {
  return (
    <>
      <section className="w-full">
        <div className="container mx-auto flex flex-wrap justify-center justify-items-center px-5 py-24 ">
          <div className="flex w-full justify-center justify-items-center xl:w-3/12">
            <div className="flex items-center">
              <div className="mb-7 w-64 text-center sm:w-96">
                <p className="mb-5 text-2xl font-semibold lg:text-3xl">
                  If you have any problems, questions or suggestions, please,
                  fill the form.
                </p>
                <p className="text-xl">
                  We’ll try to respond you as fast as we can.
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full xl:w-7/12">
            <img
              className="mt-20 hidden w-36 sm:block"
              src="/images/anel_contact_us.svg"
            />

            <form className="border-1 flex w-full flex-col rounded-lg border border-gray-200 bg-white px-8 py-8 shadow-xl sm:px-16">
              <h1 className="mb-6 text-2xl font-semibold">Contact Us</h1>

              <input
                type="text"
                name="fullname"
                placeholder="Name"
                className="border-1 mb-3 rounded-lg border border-gray-200 py-3 px-4 shadow"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border-1 mb-3 rounded-lg border border-gray-200 py-3 px-4  shadow"
              />

              <textarea
                name="message"
                placeholder="Message"
                className="border-1 mb-4 h-36 resize-none rounded-lg border border-gray-200 py-3 px-4 shadow"
              ></textarea>
              <div className="flex flex-row items-center justify-start">
                <Button type='button'>Send</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
