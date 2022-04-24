import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { NextPage } from 'next'
import React from 'react'
import { VscArrowSwap } from 'react-icons/vsc'
import { IoMdClose } from 'react-icons/io'
import { AiFillSound } from 'react-icons/ai'

const translator: NextPage = () => {
	return (
		<>
			<Navbar />
			<section className='w-full px-8 md:px-20 lg:px-40 shadow-2xl py-10'>
				<p className='text-3xl font-semibold py-8'>Cirillyc - Latin Translator</p>
				<div className='border rounded-lg border-gray-300 '>
					<div className='flex flex-wrap'>
						<div className='w-2/5 px-7 py-3'>
							<p className='text-2xl'>Cirillyc</p>
						</div>
						<div className='w-1/5 flex justify-center items-center'>
							<VscArrowSwap className='w-8 h-8' />
						</div>
						<div className='w-2/5 py-3'>
							<p className='text-2xl'>Latin</p>
						</div>
						<div className='w-full bg-gray-300 h-px'></div>
					</div>
					<div className='flex flex-col md:flex-row '>
						<div className=' h-60 w-full md:w-1/2 rounded-bl-lg relative'>
							<IoMdClose className='w-8 h-8 absolute right-3 top-3' />
							<textarea className='w-full h-60 px-6 py-6 resize-none text-xl border-none rounded-bl-lg'></textarea>
							<img className='w-7 h-7 absolute bottom-5 left-5' src="/images/sound.png"/>
						</div>
						<div className='w-full md:w-1/2 relative ml-px bg-gray-area h-60 rounded-br-lg border-none'>
							<IoMdClose className='w-8 h-8 absolute right-3 top-3' />
							<p className='border-none'>
							</p>
							<img className='w-7 h-7 absolute bottom-5 left-5' src="/images/sound.png"/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default translator