import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { NextPage } from 'next'
import PhoneInput from 'react-phone-input-2'

const Support: NextPage = () => {
    return (
        <>
            <Navbar />
            <section className="relative flex min-h-screen ">
                <div className="flex min-w-0 flex-auto flex-col items-center bg-white sm:flex-row sm:justify-center md:items-start md:justify-start">
                    <div className="flex h-full w-full md:w-1/2  items-center justify-center rounded-none bg-white p-5 sm:w-auto sm:rounded-lg md:p-10 ">
                        <div className="w-full space-y-8">
                            <div className="text-center">
                                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                                    Contact Us!
                                </h2>
                            </div>
                            <form className="w-full max-w-lg">
                                <div className="relative">
                                    <label className="ml-3 text-sm font-bold tracking-wide text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        name="email"
                                        className="w-full rounded-2xl border-b border-gray-300 px-4 py-2 text-base outline-none focus:shadow"
                                        type="email"
                                        placeholder="mail@example.com"
                                    />
                                </div>
                                <div className="mt-8 content-center">
                                    <label className="ml-3 text-sm font-bold tracking-wide text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        name="name"
                                        className="w-full rounded-2xl border-b border-gray-300 px-4 py-2 text-base outline-none focus:shadow"
                                        type="text"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="mt-8 content-center">
                                    <label className="ml-3 text-sm font-bold tracking-wide text-gray-700">
                                        Phone
                                    </label>
                                    <PhoneInput
                                        inputClass="focus:shadow"
                                        placeholder="Enter your phone number"
                                        preferredCountries={['us', 'ru', 'kz']}
                                        country={'kz'}
                                        disableCountryGuess={true}
                                    />
                                </div>


                                <div className="mt-8 content-center">
                                    <label className="ml-3 text-sm font-bold tracking-wide text-gray-700 ">
                                        Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        name="name"
                                        className="w-full rounded-2xl border-b border-gray-300 px-4 py-2 text-base outline-none focus:shadow resize-none"
                                        placeholder="Enter your message"></textarea>
                                </div>
                                <div className="md:flex md:items-center">
                                    <div className="md:w-2/6"></div>
                                    <div className="md:w-4/6 ">
                                        <button className=" bg-dark-blue ripple  text-white font-bold py-2 px-14 rounded mt-5" type="button">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div
                        className="relative h-full w-full md:w-1/2 flex-auto items-center justify-center overflow-hidden bg-dark-blue bg-cover bg-no-repeat p-10 text-white md:flex"
                        style={{
                            backgroundImage:
                                'url(https://images.unsplash.com/photo-1589395937772-f67057e233c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)',
                        }}
                    >
                        <div className="absolute inset-0 z-0 bg-gradient-to-b from-dark-blue to-light-blue opacity-100" />
                        <div className="z-10  w-full max-w-md">
                            <div className="mb-6 font-bold leading-tight sm:text-4xl xl:text-5xl">
                                Buiyrtsa Anel osy zherge kuwti soz oilap tabady
                            </div>
                            <div className="xl:text-md font-normal text-gray-200 sm:text-sm">
                                Al myna zherge odanda kuwti, uzak, ademi soz oilap tauyp, zhazyp koiady ozi
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
                </div>
            </section>

        </>
    )
}

export default Support