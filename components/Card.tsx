import React from 'react'

interface cardInfo {
	qaz_word: String,
	type: String,
	transcript: String,
	eng_word: String,
	category: String,
	description: String,
	image: JSX.Element,
	example: String[],
	synonyms: String[],
	acronyms: String[]

}

const Card = ({ qaz_word, type, transcript, eng_word, category, description, image, example, synonyms, acronyms }: cardInfo) => {
	return (
		<>


			<section className='px-6 lg:px-40 py-4'>
				<div className='container border-2 rounded-lg px-6 lg:px-14 py-6 space-y-5 border-dark-blue mx-auto flex flex-col'>
					<div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 items-center'>
						<div className='w-full lg:w-1/2 flex flex-col space-y-4'>
							<h3>{qaz_word}</h3>
							<h5 className='text-dark-blue font-bold'>{type}</h5>
							<div className='flex space-x-4'>
								<img className='w-6 h-6' src="/images/sound.png" />
								<h5>{transcript}</h5>
							</div>
							<h3>{eng_word}</h3>
							<h5 className='text-dark-blue font-bold'>{category}</h5>
							<p className='text-md xl:text-xl'>{description}</p>
						</div>
						<div className='w-full h-96 lg:w-1/2 flex justify-center lg:justify-end'>
							{image}
						</div>
					</div>
					<div className='bg-dark-blue h-1 '></div>

					<div className='flex flex-col space-y-8'>
						<div>
							<div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6'>
								<p className='w-full lg:w-1/2 text-md xl:text-xl'>{example[0]}</p>
								<p className='w-full lg:w-1/2 text-md xl:text-xl'>{example[1]}</p>
							</div>
							<div className='bg-gray-300 h-px mt-3'></div>
						</div>
						<div>
							<div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6'>
								<p className='w-full lg:w-1/2 text-md xl:text-xl'>{example[0]}</p>
								<p className='w-full lg:w-1/2 text-md xl:text-xl'>{example[1]}</p>
							</div>
							<div className='bg-gray-300 h-px mt-3'></div>
						</div>
					</div>

					<div className='bg-dark-blue h-1 '></div>

					<div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6'>
						<div className='w-full lg:w-1/2'>
							<h4 className='text-dark-blue text-2xl'>Synonyms</h4>
							<p className='text-md xl:text-xl mt-3'>{synonyms[0]}, {synonyms[1]}</p>
						</div>
						<div className='w-full lg:w-1/2'>
							<h4 className='text-dark-blue text-2xl'>Acronyms</h4>
							<p className='text-md xl:text-xl mt-3'>{acronyms[0]}, {acronyms[1]}</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Card