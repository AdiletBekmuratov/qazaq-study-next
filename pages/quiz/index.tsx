import Button from '@/components/Button'
import Footer from '@/components/Footer'
import MainWrapper from '@/components/MainWrapper'
import QuizCard from '@/components/QuizCard'
import { Field, Form, Formik } from 'formik'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'


const Quizzes: NextPage = () => {
	return (
		<MainWrapper>
			<section className='bg-gray-50 py-5'>
				<div className='container mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
					<QuizCard id={151} title={"Hard Quiz"} imageUrl={"/images/books.png"} description={"yeah, good quiz, chill quiz, fine quiz, lets try bro, it will be perfect"} total={30} score={10} />
					<QuizCard id={151} title={"Hard Quiz"} imageUrl={"/images/books.png"} description={"yeah, good quiz, chill quiz, fine quiz, lets try bro, it will be perfect"} total={30} score={10} />
					<QuizCard id={151} title={"Hard Quiz"} imageUrl={"/images/books.png"} description={"yeah, good quiz, chill quiz, fine quiz, lets try bro, it will be perfect"} total={30} score={10} />
					<QuizCard id={151} title={"Hard Quiz"} imageUrl={"/images/books.png"} description={"yeah, good quiz, chill quiz, fine quiz, lets try bro, it will be perfect"} total={30} score={10} />
					<QuizCard id={151} title={"Hard Quiz"} imageUrl={"/images/books.png"} description={"yeah, good quiz, chill quiz, fine quiz, lets try bro, it will be perfect"} total={30} score={10} />

				</div>
			</section>

			<Footer />
		</MainWrapper>
	)
}

export default Quizzes
