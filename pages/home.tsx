import React from 'react'
import { NextPage } from 'next'
//import Image from 'next/image'
import adilet from 'public/images/adilet.png'
const home: NextPage = () => {
	return (
		<>

			<section className='w-full relative'>
				<div className='container px-5 mx-auto py-24 grid gird-cols-1 justify-center justify-items-center xl:grid-cols-2'>
					<div className='flex items-center w-4/6 md:w-5/6'>
						<img className='rounded object-cover w-full' src="/images/adilet.png" alt='adilet hero' />
					</div>
					<div className='w-8/12 mt-20'>
						<div className=''>
							<h1 className="font-bold text-xl sm:text-4xl md:text-6xl">The Way Of Learning Kazakh As Unique As You Are</h1>
							<div className='w-10/12 mt-5'>
								<p className='text-base sm:text-2xl'>Finally, learning a new language has become accessible, interesting, convenient and memorable!</p>
							</div>
						</div>

						<div className='relative'>
							<div className='fixed right-8 top-48 block rounded-full mx-sz:w-56 mx-sz:h-56 bg-light-blue-2'></div>
							<div className='fixed -right-72 bottom-12 block rounded-full mx-sz:w-[570px] mx-sz:h-[570px] bg-yellow-circle '></div>
						</div>
					</div>
				</div>

				<div className='container px-5 mx-auto py-24 grid gird-cols-1 justify-center justify-items-center xl:grid-cols-2'>
					<div className='flex items-center w-4/6 md:w-8/6'>
						<img className='rounded object-cover w-full' src="/images/anel.png" alt='anel letaet' />
					</div>
					<div className='w-8/12 mt-20'>
						<div className=''>
							<h1 className="font-semibold text-xl sm:text-4xl md:text-4xl">Track your progress</h1>
							<div className='w-10/12 mt-5'>
								<p className='text-base sm:text-xl'>Learn new meaning every day and track your proggress bar in profile.</p>
							</div>

							<h1 className="font-semibold text-xl sm:text-4xl md:text-4xl mt-8">Remember</h1>
							<div className='w-10/12 mt-5'>
								<p className='text-base sm:text-xl'>Sign up and save your favourite words and check the learned ones.</p>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="flex w-full cursor-pointer justify-center rounded-md bg-dark-blue p-4 
									font-semibold tracking-wide text-gray-100 transition duration-300 ease-in-out hover:shadow-md mt-8">
								REGISTER
							</button>
						</div>
					</div>
				</div>



			</section>

			{/* block mx-sz:w-[600px] mx-sz:h-[600px] */}
		</>
	)
}

export default home