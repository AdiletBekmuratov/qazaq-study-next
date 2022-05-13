import Button from '@/components/Button'
import Footer from '@/components/Footer'
import MainWrapper from '@/components/MainWrapper'
import { toIsoString } from '@/helpers/getFormatDate'
import { getScoresByQuizId } from '@/helpers/requests'
import { Quiz } from '@/types/Quizzes'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import React from 'react'

const QuizResult: NextPage<{
  scores: {
    id: string
    date_created: string
    score: number
    quiz: Quiz
  }[]
}> = ({ scores }) => {
  return (
    <MainWrapper>
      <section className="w-full bg-gray-50 py-12 px-2">
        <div className="container mx-auto">
          <h2 className="pb-14 text-gray-700">Quiz Title</h2>
          <h3 className="pb-4 font-semibold text-gray-700">
            Summary of your previous attempts
          </h3>
          <div className="flex flex-col justify-center justify-items-center rounded-sm border bg-white shadow transition-all duration-300 hover:shadow-lg ">
            <div className="flex flex-row space-x-2 py-3 px-4 md:px-12">
              <div className="w-full md:w-1/2 lg:w-3/5">
                <h4 className="text-xs font-semibold text-gray-700 md:text-sm lg:text-xl">
                  State
                </h4>
              </div>
              <div className="w-full text-center md:w-1/4 lg:w-1/5">
                <h4 className="text-xs font-semibold text-gray-700 md:text-sm lg:text-xl">
                  Marks/{scores[0].quiz?.questions.length}
                </h4>
              </div>
              <div className="w-full text-center md:w-1/4 lg:w-1/5">
                <h4 className="text-xs font-semibold text-gray-700 md:text-sm lg:text-xl">
                  Percentage/100.00
                </h4>
              </div>
            </div>
            <div className="h-0.5 w-full bg-gray-200" />
            {scores.map((score) => (
              <div className="flex flex-row items-center space-x-2 bg-gray-100 py-3 px-4 md:px-12">
                <div className="w-full md:w-1/2 lg:w-3/5">
                  <h4 className="text-xs font-semibold text-gray-700 md:text-sm lg:text-xl">
                    Finished
                    <br /> Submitted {toIsoString(new Date(score.date_created))}
                  </h4>
                </div>
                <div className="w-full text-center md:w-1/4  lg:w-1/5">
                  <h4 className="text-xs font-semibold text-gray-700 md:text-sm lg:text-xl">
                    {score.score.toFixed(2)}
                  </h4>
                </div>
                <div className="w-full text-center md:w-1/4  lg:w-1/5">
                  <h4 className="text-xs font-semibold text-gray-700 md:text-sm lg:text-xl">
                    {((score.score / score.quiz?.questions.length) * 100).toFixed(2)}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center space-y-10 pt-10 text-center">
            <h3 className="font-semibold text-gray-700 ">
              Your maximum grade for this quiz is{' '}
              {Math.max(...scores.map((o) => o.score))}/
              {scores[0].quiz?.questions.length}
            </h3>
            <Button className="max-w-xs" link="/quiz">
              Back to the quizzes page
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </MainWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.query
  if (!id) {
    return {
      redirect: {
        permanent: false,
        destination: '/quiz',
      },
      props: {},
    }
  }
  const session = await getSession(ctx)
  const scores = await getScoresByQuizId(
    { id: parseFloat(id as string) },
    session?.user?.accessToken
  )
	console.log(scores);
	
  return { props: { scores } }
}

export default QuizResult
