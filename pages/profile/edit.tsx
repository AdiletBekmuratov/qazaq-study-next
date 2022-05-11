import Button from '@/components/Button'
import Footer from '@/components/Footer'
import MainWrapper from '@/components/MainWrapper'
import getImageURL from '@/helpers/getImageURL'
import { getCurrentUser, updateGeneralInfo } from '@/helpers/requests'
import { User } from '@/types/User'
import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { GetServerSideProps, NextPage } from 'next'
import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { BsUpload } from 'react-icons/bs'
import { MdDone } from 'react-icons/md'
import Head from 'next/head'

interface ProfileProps {
  currentUser: User
}

type GeneralInfo = Pick<User, 'first_name' | 'last_name'>

const ProfileEdit: NextPage<ProfileProps> = ({ currentUser }) => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [file, setFile] = useState(null)
  const imagePrevRef = useRef(null)

  const handleSubmit = async (values: GeneralInfo) => {
    console.log(values)
    const res = await toast.promise(
      updateGeneralInfo(values, session!.user.accessToken),
      {
        success: 'Профиль обновлён!',
        loading: 'Загрузка',
        error: (err) => `Произошла ошибка: ${err.toString()}`,
      }
    )
    router.reload()
  }

  const updatePhoto = async () => {
    if (file) {
      let data = new FormData()
      // @ts-ignore
      data.append('file', file, file.name)
      const response = await toast.promise(
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/files`, data, {
          headers: {
            Authorization: `Bearer ${session!.user.accessToken}`,
          },
        }),
        {
          success: 'Фото профиля загружена!',
          loading: 'Загрузка',
          error: (err) => `Произошла ошибка: ${err.toString()}`,
        }
      )

      const uploadedImage = response.data

      const data2 = {
        avatar: uploadedImage.data.id,
      }

      const resAx = await toast.promise(
        updateGeneralInfo(data2, session!.user.accessToken),
        {
          success: 'Фото профиля обновлена!',
          loading: 'Загрузка',
          error: (err) => `Произошла ошибка: ${err.toString()}`,
        }
      )

      setFile(null)
    }
  }

  const handleImageChange = (file: any) => {
    setFile(file.target.files[0])
    // @ts-ignore
    imagePrevRef.current.src = URL.createObjectURL(file.target.files[0])
  }

  return (
    <>
      <Head>
        <title>Profile Update | Qazaq Study</title>
        <meta name="description" content="Qazaq Study - Profile Update Page" />
      </Head>
      <MainWrapper>
        <section className="w-full">
          <div className="container mx-auto flex flex-col items-center space-y-4 px-5 py-16">
            <div className="flex w-full flex-1 flex-col items-center justify-center space-y-4 md:flex-row">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative aspect-square w-36 rounded-full">
                  <img
                    className="aspect-square w-36 rounded-full"
                    ref={imagePrevRef}
                    src={
                      getImageURL(
                        currentUser?.avatar,
                        'fit=cover&width=150&height=150'
                      ) ??
                      getImageURL(
                        'f7333f36-69bb-4249-b0e2-e82f12c77144',
                        'fit=cover&width=150&height=150'
                      )
                    }
                  />
                  <input
                    onChange={handleImageChange}
                    multiple={false}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="filePicker"
                  />
                  <label
                    htmlFor="filePicker"
                    className="absolute right-0 top-0 rounded-full bg-dark-blue p-3 text-xl font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <BsUpload />
                  </label>
                  {file && (
                    <button
                      onClick={updatePhoto}
                      className="absolute -right-5 top-12 rounded-full bg-green-500 p-3 text-xl font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <MdDone />
                    </button>
                  )}
                </div>

                <div className="flex flex-col justify-center text-center lg:flex-row">
                  <h3>
                    {currentUser.first_name} {currentUser.last_name}
                  </h3>
                </div>
              </div>
            </div>
            <Formik
              initialValues={
                {
                  first_name: currentUser.first_name,
                  last_name: currentUser.last_name,
                } as GeneralInfo
              }
              onSubmit={handleSubmit}
            >
              {(props) => (
                <Form className="flex w-full flex-col space-y-6">
                  <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="relative w-full">
                      <label className="ml-3 text-sm font-bold tracking-wide text-gray-700">
                        First Name
                      </label>
                      <Field
                        name="first_name"
                        className=" w-full rounded-2xl border-b border-gray-300 px-4 py-2 text-base outline-none focus:shadow"
                        type="text"
                        placeholder="Жәңгірбай"
                      />
                      <ErrorMessage
                        name="first_name"
                        component={'div'}
                        className="mt-1 ml-3 text-sm text-red-400"
                      />
                    </div>
                    <div className="relative w-full">
                      <label className="ml-3 text-sm font-bold tracking-wide text-gray-700">
                        Last Name
                      </label>
                      <Field
                        name="last_name"
                        className=" w-full rounded-2xl border-b border-gray-300 px-4 py-2 text-base outline-none focus:shadow"
                        type="text"
                        placeholder="Әмірханов"
                      />
                      <ErrorMessage
                        name="last_name"
                        component={'div'}
                        className="mt-1 ml-3 text-sm text-red-400"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button type="submit" className="w-full sm:max-w-xs">
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </section>
        <Footer />
      </MainWrapper>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx)
  const currentUser = (await getCurrentUser(session?.user?.accessToken)) as User
  return { props: { currentUser } }
}

// @ts-ignore
ProfileEdit.auth = {
  role: 'USER',
}

export default ProfileEdit
