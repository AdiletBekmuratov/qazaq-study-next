import React from 'react'
import { ImBooks } from 'react-icons/im'
import { BsArrowLeftRight, BsCheckCircleFill } from 'react-icons/bs'
import { AiFillSound } from 'react-icons/ai'

const Tools = () => {
	return (
		<>
			<section className='w-full z-10 relative'>
				<div className='text-center'>
					<h2 className='font-semibold text-lg px-2 md:text-xl lg:text-2xl xl:text-4xl'>Learn Kazakh with a variety of tools. Effective, interesting and free!</h2>
				</div>
				<div className='container px-10 mx-auto py-24 grid grid-cols-1 gap-y-20 md:grid-cols-2 justify-center justify-items-center xl:grid-cols-3 md:gap-4'>
					<div className='flex flex-wrap flex-col w-full space-y-20 justify-start'>
						<div className="flex space-x-6 items-start">

							<ImBooks className="w-16 h-16 text-blue-600" />

							<div>
								<h3 className='font-semibold text-dark-blue mb-3'> Dictionary Cards</h3>
								<p className='text-lg'> Use special word cards to explore and learn new words and their meaning.</p>
							</div>

						</div>
						<div className="flex space-x-6">

							<BsArrowLeftRight className="w-16 h-16 text-red-500" />
							<div>
								<h3 className='font-semibold text-dark-blue mb-3'> Translator</h3>
								<p className='text-lg'> Get ranscription of words using translator from Cyrillic to Latinian alphabet and vice versa. </p>
							</div>

						</div>
					</div>
					<div className='items-center mt-16 hidden xl:block'>
						<img src="/images/books.png" />
					</div>
					<div className='flex flex-wrap w-full space-y-20'>
						<div className="flex space-x-6">
							<BsCheckCircleFill className="w-16 h-16 text-green-600" />
							<div>
								<h3 className='font-semibold text-dark-blue mb-3'> Quizzes</h3>
								<p className='text-lg'> You can not only learn words, but also go through interesting mini-quizes, thereby improving your knowledge.</p>
							</div>

						</div>
						<div className="flex space-x-6">

							<AiFillSound className="w-12 h-12 text-purplen-600" />

							<div>
								<h3 className='font-semibold text-dark-blue mb-3'> TTS</h3>
								<p className='text-lg'> Try special text-to-speach tool and improve your Kazakh pronunciation. </p>
							</div>

						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Tools