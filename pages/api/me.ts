import { getCurrentUser } from '@/helpers/requests'
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'
import { getSession } from 'next-auth/react'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  switch (method) {
    case 'GET':
      return await getSomething(req, res)
    default:
      return res.status(405).json('Method not allowed')
  }
}
const getSomething = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })
  const token = await getToken({ req })
  console.log({ token })
  if (session) {
    const data = await getCurrentUser(session.user.accessToken)
    res.send({
      content: data,
    })
  } else {
    res.status(401).send({
      err: 'You need to be signed in.',
    })
  }
}

export default handler
