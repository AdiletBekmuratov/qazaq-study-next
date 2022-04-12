import Link from 'next/link'

const MobileApp = () => {
	return (
		<>
			<section className='w-full'>
				<div className='container px-5 mx-auto py-24 grid grid-cols-1 justify-center justify-items-center md:grid-cols-3 md:gap-4'>
					<div className='hidden md:block'>
						<img className='' src={"/images/bills.svg"} />
					</div>
					<div className='flex flex-wrap justify-center justify-items-center space-y-6 md:-space-y-12 lg:-space-y-20 pt-9'>
						<p className='text-xl lg:text-3xl font-semibold text-center'>
							Dowload our <span className='text-dark-blue'>QazaqStudy</span> mobile app and improve your knowlege no matter where and when.
						</p>
						<Link href={""}>
							<a>
								<img className='w-40 lg:w-full' src="/images/google.svg" />
							</a>
						</Link>
					</div>
					<div className='md: mt-8'>
						<img className='w-80' src="/images/adilet2.png" />
					</div>
				</div>
			</section>
		</>
	)
}

export default MobileApp