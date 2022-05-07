import Button from '@/components/Button'
import Footer from '@/components/Footer'
import MainWrapper from '@/components/MainWrapper'
import { Field, Form, Formik } from 'formik'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

interface Map {
	[key: string]: string | undefined
}

const obj = [
	{
		id: 1,
		question:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente natus vel. Doloremque quas rem libero necessitatibus voluptatibus maxime, quidem distinctio laudantium provident deleniti repellat culpa odio ullam, praesentium aperiam?',
		answers: [
			{
				id: 1,
				answer: 'hello1',
			},
			{
				id: 2,
				answer: 'asik1',
			},
			{
				id: 3,
				answer: 'very1',
			},
			{
				id: 4,
				answer: 'good1',
			},
		],
	},
	{
		id: 2,
		question:
			'Second one Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente natus vel. Doloremque quas rem libero necessitatibus voluptatibus maxime, quidem distinctio laudantium provident deleniti repellat culpa odio ullam, praesentium aperiam?',
		answers: [
			{
				id: 1,
				answer: 'hello2',
			},
			{
				id: 2,
				answer: 'asik2',
			},
			{
				id: 3,
				answer: 'very2',
			},
			{
				id: 4,
				answer: 'good2',
			},
		],
	},
	{
		id: 3,
		question:
			'Third one Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente natus vel. Doloremque quas rem libero necessitatibus voluptatibus maxime, quidem distinctio laudantium provident deleniti repellat culpa odio ullam, praesentium aperiam?',
		answers: [
			{
				id: 1,
				answer: 'hello3',
			},
			{
				id: 2,
				answer: 'asik3',
			},
			{
				id: 3,
				answer: 'very3',
			},
			{
				id: 4,
				answer: 'good3',
			},
		],
	},
	{
		id: 4,
		question:
			'Third one Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente natus vel. Doloremque quas rem libero necessitatibus voluptatibus maxime, quidem distinctio laudantium provident deleniti repellat culpa odio ullam, praesentium aperiam?',
		answers: [
			{
				id: 1,
				answer: 'hello3',
			},
			{
				id: 2,
				answer: 'asik3',
			},
			{
				id: 3,
				answer: 'very3',
			},
			{
				id: 4,
				answer: 'good3',
			},
		],
	},
	{
		id: 5,
		question:
			'Third one Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente natus vel. Doloremque quas rem libero necessitatibus voluptatibus maxime, quidem distinctio laudantium provident deleniti repellat culpa odio ullam, praesentium aperiam?',
		answers: [
			{
				id: 1,
				answer: 'hello3',
			},
			{
				id: 2,
				answer: 'asik3',
			},
			{
				id: 3,
				answer: 'very3',
			},
			{
				id: 4,
				answer: 'good3',
			},
		],
	},
]

function hasValue(obj: Map, key: string, value: string) {
	return obj.hasOwnProperty(key) && obj[key] === value
}
const Quiz = () => {
	return (
		<MainWrapper>
			<Formik

				initialValues={{}}
				onSubmit={async (values) => {
					console.log(JSON.stringify(values, null, 3))
				}}
			>

				{({ values, setFieldValue }) => (

					<Form className="bg-gray-50">
						<div className='container mx-auto px-5 py-10 sm:py-5'>
							<h3 className='font-semibold mb-3'>Colors / Quiz 1</h3>
							<div className='border h-1.5 bg-custom-yellow' />
						</div>
						<div className="container mx-auto grid grid-cols-12 gap-5 py-5 px-5">
							<div className="top-0 col-span-7 block self-start sm:sticky sm:top-[75px] sm:col-span-4 lg:col-span-3 xl:col-span-2">
								<div className="grid grid-cols-5 items-center justify-center gap-2 rounded-md bg-white px-4 py-3 shadow transition-all duration-300 hover:shadow-lg ">
									{obj.map((question, index) => (
										<Link
											key={question.id.toString()}
											href={`#${question.id.toString()}`}
										>
											<a
												className={`flex flex-col items-center justify-center divide-y-2 rounded-sm border`}
											>
												<p className="p-2 text-sm">{index + 1}</p>
												<div
													className={`h-full w-full p-2 ${Object.keys(values).includes(
														question.id.toString()
													) &&
														!hasValue(values, question.id.toString(), '') &&
														'bg-gray-300'
														}	`}
												/>
											</a>
										</Link>
									))}
									<Button type="submit" className="col-span-5">
										Submit
									</Button>
								</div>
							</div>
							<div className="col-span-12 sm:col-span-8 lg:col-span-9 xl:col-span-10">
								<div className="flex flex-col space-y-4">
									<div className="flex flex-col space-y-4">
										{obj.map((question) => (
											<div
												id={question.id.toString()}
												className="container mx-auto flex flex-col space-y-3 rounded-md bg-white p-6 shadow transition-all duration-300 hover:shadow-lg md:p-10"
												key={question.id}
											>
												<h4>Question {question.id.toString()}</h4>
												<p>{question.question}</p>
												{question.answers.map((answer) => (
													<div key={answer.id}>
														<label className="flex flex-row space-x-2">
															<Field
																name={question.id.toString()}
																value={answer.id.toString()}
																className=" mt-0 bg-gray-100 md:mt-1"
																type="radio"
															/>
															<p className="">{answer.answer}</p>
														</label>
													</div>
												))}
												<a
													onClick={() =>
														setFieldValue(question.id.toString(), '')
													}
													className="cursor-pointer text-dark-blue underline"
												>
													Clear my choice
												</a>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</Form>
				)}
			</Formik>
			<Footer />
		</MainWrapper>
	)
}

export default Quiz