import { Questions } from '@/types/User'
import { Formik, Field, Form } from 'formik'
import React from 'react'

interface QuestionsProps {
	questions: Questions[]
}


const QuizCard = ({ questions }: QuestionsProps) => {


	return (
		<>
			<div className='flex flex-col space-y-4'>
				<Formik
					enableReinitialize
					initialValues={{
						
					}}
					onSubmit={async (values) => {
						console.log(JSON.stringify(values, null, 3));
					}}
				>
					{({ values, setFieldValue }) => (

						<Form className='flex flex-col space-y-4'>
							{questions.map(question => (
								<div id={question.id.toString()} className='container mx-auto p-6 md:p-10 flex flex-col space-y-3 bg-white shadow hover:shadow-lg transition-all duration-300 rounded-md' key={question.id}>
									<h4>Question {question.id.toString()}</h4>
									<p>{question.question}</p>
									{question.answers.map(answer => (
										<div key={answer.id}>
											<label className='flex flex-row space-x-2'>
												<Field name={question.id.toString()} value={answer.id.toString()} className=' bg-gray-100 mt-0 md:mt-1' type="radio" />
												<p className='' >{answer.answer}</p>
											</label>
										</div>
									))
									}
									<a onClick={() => setFieldValue(question.id.toString(), '')} className='underline cursor-pointer text-dark-blue'>Clear my choice</a>
								</div>
							))
							}
							<button type='submit'> submit </button>
						</Form>
					)}
				</Formik>
			</div >
		</>
	)
}

export default QuizCard
