import {
  addNewScore,
  createUsersAchievement,
  getCurrentUser,
  getQuizByIdOnlyAnswers,
} from '@/helpers/requests'
import { Quiz } from '@/types/Quizzes'
import axios, { AxiosResponse } from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'
import { getSession } from 'next-auth/react'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  switch (method) {
    case 'POST':
      return await getSomething(req, res)
    default:
      return res.status(405).json('Method not allowed')
  }
}
const getSomething = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  const { access, userId } = req.body

  const quizAnswers = (await getQuizByIdOnlyAnswers(
    { id: id as string },
    access
  )) as Quiz

  let correct = 0
  const userChoices = req.body.formValues

  quizAnswers.questions.map(({ questions_id }, index) => {
    questions_id.answers.map((answer) => {
      if (answer.id === userChoices[questions_id.id]) {
        correct = correct + 1
      }
    })
  })

  const payloadScore = {
    quiz: quizAnswers.id,
    user: userId,
    score: correct,
  }
  const result = (await addNewScore(payloadScore, access)) as AxiosResponse<
    any,
    any
  >

  if (quizAnswers.minScore <= correct) {
    if (
      quizAnswers.achievements[0].userAchievments.find(
        (x) => x.user === userId
      ) === undefined
    ) {
      const addAchieveResponse = await createUsersAchievement(
        {
          achievementId: quizAnswers.achievements[0].id,
          userId: userId,
        },
        access
      )
      console.log(addAchieveResponse)
    }
  }

  if (result.statusText === 'OK') {
    res.status(200).send({ message: correct })
  } else {
    res.status(500).send({ message: 'OOPS, server fucked up!' })
  }
}

export default handler
