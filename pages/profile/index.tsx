import AchievmentCard from '@/components/AchievmentCard'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import MainWrapper from '@/components/MainWrapper'
import getImageURL from '@/helpers/getImageURL'
import { getCurrentUser } from '@/helpers/requests'
import { User } from '@/types/User'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

interface ProfileProps {
  currentUser: User
}

const Profile: NextPage<ProfileProps> = ({ currentUser }) => {
  return (
    <MainWrapper>
      <section className="container mx-auto flex flex-col items-center justify-between space-y-4 py-10">
        <div className="flex w-full flex-col items-center justify-between space-y-4 md:flex-row">
          <div className="flex w-full flex-col items-center justify-start space-y-2 md:flex-row md:space-x-16">
            <img
              className="aspect-square w-36 rounded-full"
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
            <div className="flex flex-col space-y-2 text-center md:text-left lg:flex-row lg:space-x-16">
              <div>
                <h3>
                  {currentUser.first_name} {currentUser.last_name}
                </h3>
                <h3 className="text-light-blue">Beginner</h3>
              </div>
              <div>
                <h5>{currentUser.email}</h5>
                <h5>Nur-Sultan, KZ</h5>
              </div>
            </div>
          </div>
          <div>
            <Button link="/profile/edit">CHANGE</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8">
          <AchievmentCard />
          <AchievmentCard />
          <AchievmentCard />
          <AchievmentCard />
          <AchievmentCard />
          <AchievmentCard />
          <AchievmentCard />
          <AchievmentCard />
          <AchievmentCard />
          <AchievmentCard />
          <AchievmentCard />
          <AchievmentCard />
          <AchievmentCard />
          <AchievmentCard />
        </div>
      </section>
      <Footer />
    </MainWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx)
  const currentUser = (await getCurrentUser(session?.user?.accessToken)) as User
  return { props: { currentUser } }
}

export default Profile
