import ContactUs from '@/components/ContactUs'
import MobileApp from '@/components/MobileApp'
import Navbar from '@/components/Navbar'
import { NextPage } from 'next'
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

      <section className="gird-cols-1 container mx-auto grid justify-center justify-items-center px-5 py-24 xl:grid-cols-2">
        <div className="md:w-6/8 flex w-4/6 items-center">
          <img
            className="w-full rounded object-cover"
            src="/images/anel.png"
            alt="anel letaet"
          />
        </div>
        <div className="mt-20 w-8/12">
          <div className="">
            <h1 className="text-xl font-semibold sm:text-4xl md:text-4xl">
              Track your progress
            </h1>
            <div className="mt-5 w-10/12">
              <p className="text-base sm:text-xl">
                Learn new meaning every day and track your proggress bar in
                profile.
              </p>
            </div>

            <h1 className="mt-8 text-xl font-semibold sm:text-4xl md:text-4xl">
              Remember
            </h1>
            <div className="mt-5 w-10/12">
              <p className="text-base sm:text-xl">
                Sign up and save your favourite words and check the learned
                ones.
              </p>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="mt-8 flex w-full cursor-pointer justify-center rounded-md bg-dark-blue 
									p-4 font-semibold tracking-wide text-gray-100 transition duration-300 ease-in-out hover:shadow-md"
            >
              REGISTER
            </button>
          </div>
        </div>
      </section>

      <MobileApp />
      <ContactUs />
    </>
  )
}

export default home
