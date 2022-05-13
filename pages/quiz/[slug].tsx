import Button from '@/components/Button'
import Footer from '@/components/Footer'
import MainWrapper from '@/components/MainWrapper'
import Modal from '@/components/Modal'
import getImageURL from '@/helpers/getImageURL'
import { getQuizById } from '@/helpers/requests'
import { Quiz } from '@/types/Quizzes'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import { GetServerSideProps, NextPage } from 'next'
import { getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

interface Map {
  [key: string]: string | undefined
}

function hasValue(obj: Map, key: string, value: string) {
  return obj.hasOwnProperty(key) && obj[key] === value
}

const Quiz: NextPage<{ quiz: Quiz }> = ({ quiz }) => {
  const { data: session } = useSession()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [formValues, setFormValues] = useState<{ string: string } | {}>({})
  const router = useRouter()

  const handleSubmit = (values: { string: string } | {}) => {
    setFormValues(values)
    setModalIsOpen(true)
  }

  const callback = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/api/quiz?id=${quiz.id}`,
      {
        formValues,
        access: session?.user?.accessToken,
        userId: session?.user.id,
      }
    )
    if (res.status === 200) {
      router.push(`/quiz/result?id=${quiz.id}`)
    }
  }

  return (
    <>
      <Modal
        callback={() => callback()}
        title="Attention"
        description="Are you sure to submit?"
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <MainWrapper>
        <Head>
          <title>Quiz | Qazaq Study</title>
        </Head>
        <Formik initialValues={{}} onSubmit={handleSubmit}>
          {({ values, setFieldValue }) => (
            <Form className="bg-gray-50">
              <div className="container mx-auto grid grid-cols-12 gap-5 py-5 px-5">
                <div className="top-0 col-span-7 block self-start sm:sticky sm:top-[75px] sm:col-span-4 lg:col-span-3 xl:col-span-2">
                  <h4>{quiz.title}</h4>
                  <div className="mt-2 grid grid-cols-5 items-center justify-center gap-2 rounded-md bg-white px-4 py-3 shadow transition-all duration-300 hover:shadow-lg">
                    {quiz.questions.map(({ questions_id }, index) => (
                      <Link key={questions_id.id} href={`#${questions_id.id}`}>
                        <a
                          className={`flex flex-col items-center justify-center divide-y-2 rounded-sm border`}
                        >
                          <p className="p-2 text-sm">{index + 1}</p>
                          <div
                            className={`h-full w-full p-2 ${
                              Object.keys(values).includes(questions_id.id) &&
                              !hasValue(values, questions_id.id, '') &&
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
                    {quiz.questions.map(({ questions_id }, index) => (
                      <div
                        id={questions_id.id}
                        className="container mx-auto flex flex-col space-y-3 rounded-md bg-white p-6 shadow transition-all duration-300 hover:shadow-lg md:p-10"
                        key={questions_id.id}
                      >
                        <h4>Question {index + 1}</h4>
                        <p>{questions_id.text}</p>
                        {questions_id.image && (
                          <img
                            src={getImageURL(
                              questions_id.image.id,
                              'fit=cover'
                            )}
                            alt={questions_id.image.id}
                            className="aspect-video w-1/2 rounded object-contain"
                          />
                        )}
                        {questions_id.options.map((option) => (
                          <div key={option.id}>
                            <label className="flex flex-row space-x-2">
                              <Field
                                name={questions_id.id}
                                value={option.id}
                                className=" mt-0 bg-gray-100 md:mt-1"
                                type="radio"
                              />
                              <p className="">{option.text}</p>
                            </label>
                          </div>
                        ))}
                        <a
                          onClick={() => setFieldValue(questions_id.id, '')}
                          className="cursor-pointer text-dark-blue underline"
                        >
                          Clear my choice
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <Footer />
      </MainWrapper>
    </>
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
  const quiz = await getQuizById(
    { id: parseInt(id as string) },
    session?.user?.accessToken
  )
  return { props: { quiz } }
}

// @ts-ignore
Quiz.auth = {
  role: 'USER',
}

export default Quiz
