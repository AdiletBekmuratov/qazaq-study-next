import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { NextPage } from 'next'
import MiniCard from '@/components/MiniCard'
import { BsFillSuitHeartFill, BsFillCheckCircleFill } from 'react-icons/bs'

const profile: NextPage = () => {
	return (
		<>
			<Navbar />
			<section className='w-full'>
				<div className='container px-12 md:px-20 mx-auto py-24 flex flex-col xl:flex-row justify-between space-y-4'>
					<div className='flex flex-col md:flex-row items-center md:space-x-16 space-y-2'>
						<img className='rounded-full' src={'/images/profileAnel.png'} />
						<div className='flex flex-col lg:flex-row lg:space-x-16 space-y-2'>
							<div className=''>
								<h3>Anel Amanbekova</h3>
								<h3 className='text-light-blue'>Advanced</h3>
							</div>
							<div className=''>
								<h5>anelnjk@gmail.com</h5>
								<h5>+7 (707) 818 8186</h5>
								<h5>Nur-Sultan, KZ</h5>
							</div>
						</div>
					</div>
					<div className='flex justify-center md:justify-end lg:items-center'>
						<Link href={'/profile_edit'}>
							<a className='border rounded-lg bg-dark-blue px-10 py-3 text-xl text-white '>
								CHANGE
							</a>
						</Link>
					</div>
				</div>
			</section>

			<section className='w-full flex justify-center md:space-x-12'>
				<div className='border-2 w-56 flex flex-col space-y-3 px-12 py-10 items-center border-gray-200 rounded-lg'>
					<div className='flex space-x-3'>
						<BsFillSuitHeartFill className='text-red-600 w-9 h-9' />
						<h3>17</h3>
					</div>
					<h4 className='text-xl'>Favourites</h4>
					<Link href={""}>
						<a className='text-dark-blue text-lg underline'>
							More
						</a>
					</Link>
				</div>
				<div className='border-2 w-56 flex flex-col space-y-3 px-12 py-10 items-center border-gray-200 rounded-lg'>
					<div className='flex space-x-3'>
						<BsFillCheckCircleFill className='text-green-600 w-8 h-8' />
						<h3>125</h3>
					</div>
					<h4 className='text-xl'>Learned</h4>
					<Link href={""}>
						<a className='text-dark-blue text-lg underline'>
							More
						</a>
					</Link>
				</div>
			</section>
			<Footer />
		</>
	)
}


// <section className='w-full'>
// <div className='container px-24 mx-auto py-24 flex justify-between '>
// 	<div className='w-3/4 grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 md:gap-10 '>
// 		<div className=''> 
// 			<img className='rounded-full' width={280} height={280} src={'/images/profileAnel.png'} />
// 		</div>
// 		<div className=''>
// 			<h3>Anel Amanbekova</h3>
// 			<h3>Advanced</h3>
// 		</div>
// 		<div className=''>
// 			<div className=''>
// 				<h5>anelnjk@gmail.com</h5>
// 				<h5>+7 (707) 818 8186</h5>
// 				<h5>Nur-Sultan, KZ</h5>
// 			</div>
// 		</div>
// 	</div>
// 	<div className='w-1/4 flex justify-end items-center'>
// 		<Link href={""}>
// 			<a className='border rounded-lg bg-dark-blue px-10 py-3 text-xl text-white '>
// 				CHANGE
// 			</a>
// 		</Link>
// 	</div>
// </div>
// </section>

export default profile