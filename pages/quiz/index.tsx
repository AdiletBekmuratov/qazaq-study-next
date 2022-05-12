import Footer from '@/components/Footer'
import MainWrapper from '@/components/MainWrapper'
import QuizCard from '@/components/QuizCard'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Quizzes: NextPage = () => {
  return (
    <MainWrapper>
      <Head>
        <title>Quiz | Qazaq Study</title>
      </Head>
      <section className="bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 gap-4 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-16">
          <QuizCard
            id={151}
            title={'Hard Quiz'}
            imageUrl={'/images/books.png'}
            description={
              'yeah, good quiz, chill quiz, fine quiz, lets try bro, it will be perfect'
            }
            total={30}
            score={10}
          />
          <QuizCard
            id={151}
            title={'Hard Quiz'}
            imageUrl={'/images/books.png'}
            description={
              'yeah, good quiz, chill quiz, fine quiz, lets try bro, it will be perfect'
            }
            total={30}
            score={10}
          />
          <QuizCard
            id={151}
            title={'Hard Quiz'}
            imageUrl={'/images/books.png'}
            description={
              'yeah, good quiz, chill quiz, fine quiz, lets try bro, it will be perfect'
            }
            total={30}
            score={10}
          />
          <QuizCard
            id={151}
            title={'Hard Quiz'}
            imageUrl={'/images/books.png'}
            description={
              'yeah, good quiz, chill quiz, fine quiz, lets try bro, it will be perfect'
            }
            total={30}
            score={10}
          />
          <QuizCard
            id={151}
            title={'Hard Quiz'}
            imageUrl={'/images/books.png'}
            description={
              'yeah, good quiz, chill quiz, fine quiz, lets try bro, it will be perfect'
            }
            total={30}
            score={10}
          />
        </div>
      </section>
      <Footer />
    </MainWrapper>
  )
}

// @ts-ignore
Quizzes.auth = {
  role: 'USER',
}

export default Quizzes
