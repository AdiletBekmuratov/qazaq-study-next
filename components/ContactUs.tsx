import React from 'react'
import Link from 'next/link'

const ContactUs = () => {
	return (
		<>
			<section className='w-full'>
				<div className='container px-5 mx-auto py-24 flex flex-wrap justify-center justify-items-center '>
					<div className='flex justify-items-center justify-center w-full xl:w-3/12'>
						<div className='flex items-center'>
							<div className='text-center w-64 sm:w-96 mb-7'>
								<p className='text-2xl lg:text-3xl font-semibold mb-5'>
									If you have any problems, questions or suggestions, please, fill the form.
								</p>
								<p className='text-xl'>
									We’ll try to respond you as fast as we can.
								</p>
							</div>
						</div>

					</div>

					<div className='flex w-full xl:w-7/12'>
						<img className='w-36 mt-20 hidden sm:block' src="/images/anel_contact_us.svg" />

						<form className="shadow-xl flex flex-col px-8 sm:px-16 py-8 w-full bg-white border border-1 border-gray-200 rounded-lg">
							<h1 className="text-2xl font-semibold mb-6">Contact Us</h1>

							<input type="text" name="fullname" placeholder='Name' className="border rounded-lg border-1 border-gray-200 py-3 px-4 mb-3 shadow" />

							<input type="email" name="email" placeholder='Email' className="border rounded-lg border-1 border-gray-200 py-3 px-4 mb-3  shadow" />

							<textarea name="message" placeholder='Message' className="border rounded-lg border-1 border-gray-200 py-3 px-4 shadow h-36 mb-4"></textarea>
							<div className="flex flex-row items-center justify-start">
								<Link href={""}>
									<a className='font-semibold text-2xl w-full text-center border rounded-lg bg-dark-blue text-white py-4'>
										SEND
									</a>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	)
}

export default ContactUs