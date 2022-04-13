import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { NextPage } from 'next'
import React from 'react'
const home: NextPage = () => {
  return (
    <>
      <Navbar />
      <section className="relative z-10 w-full">
        <div className="sec-1">
          <div className="gird-cols-1 container relative mx-auto grid items-center justify-center px-5 py-24 md:grid-cols-2">
            <div className="flex items-center">
              <img
                className="w-full rounded object-cover"
                src="/images/adilet.png"
                alt="adilet hero"
              />
            </div>
            <div className="grid grid-cols-1 items-start justify-start gap-5">
              <h1 className="text-xl font-bold sm:text-4xl md:text-6xl">
                The Way Of <br />
                Learning Kazakh As <br />
                Unique As You Are
              </h1>
              <p className="text-base sm:text-2xl">
                Finally, learning a new language has become <br />
                accessible, interesting, convenient and memorable!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default home
