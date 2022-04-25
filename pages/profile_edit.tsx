import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const profile_edit: NextPage = () => {
	return (
		<>
			<Navbar />
			<section className='w-full'>
				<div className='container px-12 md:px-20 mx-auto items-center py-16 grid grid-cols-1 lg:grid-cols-2 gap-y-10'>
					<div className='flex flex-col md:flex-row items-center space-x-12 space-y-4 '>
						<img className='rounded-full' src={'/images/profileAnel.png'} />
						<div className=''>
							<h3>Anel Amanbekova</h3>
							<h3 className='text-light-blue'>Advanced</h3>
						</div>
					</div>
					<div className='flex space-x-6 justify-center md:justify-end items-center'>
						<Link href={'/profile'}>
							<a className='border rounded-lg bg-white px-6 md:px-10 py-2 md:py-3 text-xl text-black '>
								CANCEL
							</a>
						</Link>
						<Link href={'/profile'}>
							<a className='border rounded-lg bg-dark-blue px-8 md:px-14 py-2 md:py-3  text-xl text-white '>
								SAVE
							</a>
						</Link>
					</div>
				</div>
				<div className='container px-10 md:px-20 lg:px-40 mx-auto'>
					<form action="#" method="POST">
						<div className="">
							<div className="px-4 py-5 bg-white sm:p-6">
								<div className="grid grid-cols-6 gap-6">
									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="first-name" className="block text-lg font-bold text-black">
											First name
										</label>
										<input
											type="text"
											name="first-name"
											id="first-name"
											autoComplete="given-name"
											className="py-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="last-name" className="block text-lg font-bold text-black">
											Last name
										</label>
										<input
											type="text"
											name="last-name"
											id="last-name"
											autoComplete="family-name"
											className="py-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div className='col-span-6 bg-gray-300 h-px '></div>

									<div className="col-span-6 sm:col-span-4">
										<label htmlFor="email-address" className="block text-lg font-bold text-black">
											Email
										</label>
										<input
											type="text"
											name="email-address"
											id="email-address"
											autoComplete="email"
											className="py-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div className='col-span-6 bg-gray-300 h-px '></div>

									<div className="col-span-6">
										<div className="py-2 rounded-lg shadow-xl bg-gray-50 lg:w-2/3">
											<div className="m-4">
												<div className="flex items-center justify-center w-full">
													<label className="flex flex-col w-full h-24 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
														<div className="flex flex-col items-center justify-center pt-4">

															<p className="text-xl tracking-wider text-center text-gray-400 group-hover:text-gray-600">
																<span className='text-black'> Click to upload</span> new <br />profile photo</p>
														</div>
														<input type="file" className="opacity-0" />
													</label>
												</div>
											</div>

										</div>
									</div>
									<div className='col-span-6 bg-gray-300 h-px'></div>
									<div className="col-span-6 sm:col-span-4">
										<label htmlFor="phone-number" className="block text-lg font-bold text-black">
											Phone number
										</label>
										<input
											type="text"
											name="phone-number"
											id="phone-number"
											autoComplete="number"
											className="py-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>


									<div className="col-span-6 sm:col-span-4">
										<label htmlFor="Address" className="block text-lg font-bold text-black">
											Address
										</label>
										<input
											type="text"
											name="Address"
											id="Address"
											autoComplete="Address"
											className="py-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div className='col-span-6 bg-gray-300 h-px '></div>

									<h2 className='col-span-6 text-dark-blue'>Update Password</h2>


									<div className="col-span-6 sm:col-span-4">
										<label htmlFor="current-password" className="block text-lg font-bold text-black">
											Current Password
										</label>
										<input
											type="text"
											name="current-password"
											id="current-password"
											autoComplete="Current Password"
											className="py-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>


									<div className="col-span-6 sm:col-span-4">
										<label htmlFor="new-password" className="block text-lg font-bold text-black">
											New Password
										</label>
										<input
											type="text"
											name="new-password"
											id="new-password"
											autoComplete="New Password"
											className="py-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>

									<div className="col-span-6 sm:col-span-4">
										<label htmlFor="confirm-new-password" className="block text-lg font-bold text-black">
											Confirm New Password
										</label>
										<input
											type="text"
											name="confirm-new-password"
											id="confirm-new-password"
											autoComplete="Confirm New Password"
											className="py-3 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>


								</div>
							</div>
							<div className="px-4 py-3 mb-5 text-left sm:px-6">
								<Link href={""}>
									<a className='border rounded-lg bg-dark-blue px-8 md:px-14 py-2 md:py-3 text-xl text-white'>
										UPDATE PASSWORD
									</a>
								</Link>
							</div>
						</div>
					</form>
				</div>

			</section >
			<Footer />
		</>
	)
}

export default profile_edit