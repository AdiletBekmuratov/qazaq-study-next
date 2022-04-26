import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { NextPage } from 'next'
import { BsFillSuitHeartFill, BsFillCheckCircleFill } from 'react-icons/bs'

const Profile: NextPage = () => {
  return (
    <>
      <Navbar />
      <section className="container mx-auto flex flex-col justify-between space-y-4 px-5 py-10 xl:flex-row">
        <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-16">
          <img
            className="aspect-square w-36 rounded-full"
            src={'/images/profileAnel.png'}
          />
          <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-16">
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
        <div className="flex justify-center md:justify-end lg:items-center">
          <Link href={'/profile_edit'}>
            <a className="rounded-lg border bg-dark-blue px-10 py-3 text-xl text-white ">
              CHANGE
            </a>
          </Link>
        </div>
      </section>

      {/* <section className="flex w-full justify-center md:space-x-12">
        <div className="flex w-56 flex-col items-center space-y-3 rounded-lg border-2 border-gray-200 px-12 py-10">
          <div className="flex space-x-3">
            <BsFillSuitHeartFill className="h-9 w-9 text-red-600" />
            <h3>17</h3>
          </div>
          <h4 className="text-xl">Favourites</h4>
          <Link href={''}>
            <a className="text-lg text-dark-blue underline">More</a>
          </Link>
        </div>
        <div className="flex w-56 flex-col items-center space-y-3 rounded-lg border-2 border-gray-200 px-12 py-10">
          <div className="flex space-x-3">
            <BsFillCheckCircleFill className="h-8 w-8 text-green-600" />
            <h3>125</h3>
          </div>
          <h4 className="text-xl">Learned</h4>
          <Link href={''}>
            <a className="text-lg text-dark-blue underline">More</a>
          </Link>
        </div>
      </section> */}
      <Footer />
    </>
  )
}

export default Profile
