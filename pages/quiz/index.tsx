import Footer from '@/components/Footer'
import MainWrapper from '@/components/MainWrapper'
import Modal from '@/components/Modal'
import QuizCard from '@/components/QuizCard'
import getImageURL from '@/helpers/getImageURL'
import { getAllQuizzes } from '@/helpers/requests'
import { Quiz } from '@/types/Quizzes'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Quizzes: NextPage<{ quizzes: Quiz[] }> = ({ quizzes }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [clickedQuiz, setClickedQuiz] = useState<
    { slug?: string; id?: string } | undefined
  >()
  const router = useRouter()

  const callback = () => {
    router.push(`/quiz/${clickedQuiz?.slug}?id=${clickedQuiz?.id}`)
  }

  return (
    <>
      <Modal
        callback={() => clickedQuiz && callback()}
        title="Attention"
        description="Are you sure to continue?"
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <MainWrapper>
        <Head>
          <title>Quiz | Qazaq Study</title>
        </Head>

        <section className="bg-gray-50">
          <div className="container mx-auto px-5 py-16">
            <div className="grid grid-cols-1 items-start justify-start gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {quizzes.map((quiz) => (
                <QuizCard
                  key={quiz.id}
                  id={quiz.id}
                  slug={quiz.slug}
                  title={quiz.title}
                  imageUrl={getImageURL(quiz.image?.id, 'fit=cover')}
                  description={quiz.description}
                  total={quiz.questions.length}
                  score={quiz?.scores[0]?.score}
                  minScore={quiz.minScore}
                  setModalIsOpen={setModalIsOpen}
                  setClickedQuiz={setClickedQuiz}
                />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </MainWrapper>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx)
  const quizzes = await getAllQuizzes(session?.user?.accessToken)
  return { props: { quizzes } }
}

// @ts-ignore
Quizzes.auth = {
  role: 'USER',
}

export default Quizzes
