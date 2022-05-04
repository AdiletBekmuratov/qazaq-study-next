import Footer from '@/components/Footer'
import MainWrapper from '@/components/MainWrapper'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const Profile: NextPage = () => {
  return (
    <MainWrapper>
      <section className="container mx-auto flex flex-col items-center justify-between space-y-4 px-5 py-10 md:flex-row">
        <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-16">
          <img
            className="aspect-square w-36 rounded-full"
            src={'/images/profileAnel.png'}
          />
          <div className="flex flex-col space-y-2 text-center md:text-left lg:flex-row lg:space-x-16">
            <div className="">
              <h3>Anel Amanbekova</h3>
              <h3 className="text-light-blue">Advanced</h3>
            </div>
            <div className="">
              <h5>anelnjk@gmail.com</h5>
              <h5>+7 (707) 818 8186</h5>
              <h5>Nur-Sultan, KZ</h5>
            </div>
          </div>
        </div>
        <div className="">
          <Link href={'/profile/edit'}>
            <a className="ripple rounded-lg border bg-dark-blue px-10 py-2.5 text-white ">
              CHANGE
            </a>
          </Link>
        </div>
      </section>
      <Footer />
    </MainWrapper>
  )
}

export default Profile
