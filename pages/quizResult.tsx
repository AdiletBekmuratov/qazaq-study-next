import Button from '@/components/Button'
import Footer from '@/components/Footer'
import MainWrapper from '@/components/MainWrapper'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const quizResult: NextPage = () => {
	return (

		<MainWrapper>

			<section className='w-full bg-gray-50 py-12 px-2'>
				<div className='container mx-auto'>
					<h2 className='pb-14 text-gray-700'>Quiz Title</h2>
					<h3 className='font-semibold text-gray-700 pb-4'>Summary of your previous attempts</h3>
					<div className='flex flex-col justify-center justify-items-center border rounded-sm bg-white shadow transition-all duration-300 hover:shadow-lg '>
						<div className='flex flex-row py-3 px-4 md:px-12 space-x-2'>
							<div className='w-full md:w-1/2 lg:w-3/5'>
								<h4 className='font-semibold text-xs md:text-sm lg:text-xl text-gray-700'>State</h4>
							</div>
							<div className='w-full md:w-1/4 lg:w-1/5 text-center'>
								<h4 className='font-semibold text-xs md:text-sm lg:text-xl text-gray-700'>Marks/10.00</h4>
							</div>
							<div className='w-full md:w-1/4 lg:w-1/5 text-center'>
								<h4 className='font-semibold text-xs md:text-sm lg:text-xl text-gray-700'>Percentage/100.00</h4>
							</div>
						</div>
						<div className='w-full h-0.5 bg-gray-200' />
						<div className='flex flex-row py-3 px-4 md:px-12 space-x-2 bg-gray-100 items-center'>
							<div className='w-full md:w-1/2 lg:w-3/5'>
								<h4 className='font-semibold text-xs md:text-sm lg:text-xl text-gray-700'>Finished<br /> Submitted Wendesday, 11 May 2022, 1:36 PM</h4>
							</div>
							<div className='w-full md:w-1/4 lg:w-1/5  text-center'>
								<h4 className='font-semibold text-xs md:text-sm lg:text-xl text-gray-700'>9.00</h4>
							</div>
							<div className='w-full md:w-1/4 lg:w-1/5  text-center'>
								<h4 className='font-semibold text-xs md:text-sm lg:text-xl text-gray-700'>90.00</h4>
							</div>
						</div>
					</div>
					<div className='flex flex-col pt-10 space-y-10 text-center items-center justify-center'>
						<h3 className='font-semibold text-gray-700 '>Your maximum grade for this quiz is 9.00/10.00</h3>
						<Button className='max-w-xs' link="/profile/edit">Back to the quizzes page</Button>
					</div>
				</div>

			</section>
			<Footer />
		</MainWrapper>
	)
}

export default quizResult