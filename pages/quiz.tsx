import React from 'react'
import { NextPage } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QuizCard from '@/components/QuizCard'
import { FcCheckmark } from 'react-icons/fc'
import Link from 'next/link'

const obj = [
	{
		id: 1,
		question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente natus vel. Doloremque quas rem libero necessitatibus voluptatibus maxime, quidem distinctio laudantium provident deleniti repellat culpa odio ullam, praesentium aperiam?",
		answers: [
			{
				id: 1,
				answer: "hello1",
			},
			{
				id: 2,
				answer: "asik1",
			},
			{
				id: 3,
				answer: "very1",
			},
			{
				id: 4,
				answer: "good1",
			},
		]
	},
	{
		id: 2,
		question: "Second one Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente natus vel. Doloremque quas rem libero necessitatibus voluptatibus maxime, quidem distinctio laudantium provident deleniti repellat culpa odio ullam, praesentium aperiam?",
		answers: [
			{
				id: 1,
				answer: "hello2",
			},
			{
				id: 2,
				answer: "asik2",
			},
			{
				id: 3,
				answer: "very2",
			},
			{
				id: 4,
				answer: "good2",
			},
		]
	},
	{
		id: 3,
		question: "Third one Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente natus vel. Doloremque quas rem libero necessitatibus voluptatibus maxime, quidem distinctio laudantium provident deleniti repellat culpa odio ullam, praesentium aperiam?",
		answers: [
			{
				id: 1,
				answer: "hello3",
			},
			{
				id: 2,
				answer: "asik3",
			},
			{
				id: 3,
				answer: "very3",
			},
			{
				id: 4,
				answer: "good3",
			},
		]
	},
	{
		id: 4,
		question: "Third one Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente natus vel. Doloremque quas rem libero necessitatibus voluptatibus maxime, quidem distinctio laudantium provident deleniti repellat culpa odio ullam, praesentium aperiam?",
		answers: [
			{
				id: 1,
				answer: "hello3",
			},
			{
				id: 2,
				answer: "asik3",
			},
			{
				id: 3,
				answer: "very3",
			},
			{
				id: 4,
				answer: "good3",
			},
		]
	},
	{
		id: 5,
		question: "Third one Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente natus vel. Doloremque quas rem libero necessitatibus voluptatibus maxime, quidem distinctio laudantium provident deleniti repellat culpa odio ullam, praesentium aperiam?",
		answers: [
			{
				id: 1,
				answer: "hello3",
			},
			{
				id: 2,
				answer: "asik3",
			},
			{
				id: 3,
				answer: "very3",
			},
			{
				id: 4,
				answer: "good3",
			},
		]
	},

]

const quiz: NextPage = () => {

	return (
		<>
			<Navbar />
			<section className='bg-gray-50'>
				<div className='container grid grid-cols-12 gap-5 mx-auto py-5'>
					<div className='col-span-7 sm:col-span-4 lg:col-span-3 xl:col-span-2'>
						<div className='grid grid-cols-5 items-center bg-white hover:shadow-lg transition-all duration-300 justify-center gap-2 shadow rounded-md px-4 py-3 '>
							{obj.map((question, index) => (
								<Link href={`#${question.id.toString()}`} >
									<a className='flex flex-col border rounded-sm items-center justify-center p-2 divide-y-2'>
										<p> {index + 1} </p>
										<FcCheckmark className='w-4 h-4' />
									</a>
								</Link>
							))
							}
						</div>
					</div>
					<div className='col-span-12 sm:col-span-8 lg:col-span-9 xl:col-span-10'>
						<QuizCard questions={obj} />
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default quiz