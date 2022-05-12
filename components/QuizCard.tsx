import Link from 'next/link'
import React from 'react'

interface CardContent {
	id: number
	title: string
	imageUrl: string
	description: string
	total: number
	score?: number
}

const QuizCard = ({ id, title, imageUrl, description, total, score }: CardContent) => {
	return (
		<Link href={`/quiz/ ${id}`}>
			<div className='flex flex-col justify-center cursor-pointer bg-white shadow transition-all duration-300 hover:shadow-lg rounded-lg justify-items-center p-3 space-y-5'>
				<img className='w-full object-cover' src={imageUrl} />
				<h3>{title}</h3>
				<p>{description}</p>
				<h4 className='font-semibold'>Amount of questons: {total}</h4>
				<h4 className='font-semibold'>Maximum Score: {score}</h4>
			</div>
		</Link>
	)
}

export default QuizCard