import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { AiFillSound } from 'react-icons/ai'
import { BsArrowLeftRight, BsCheckCircleFill } from 'react-icons/bs'
import { ImBooks } from 'react-icons/im'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Главная | Qazaq Study</title>
      </Head>
      <main>
        <Navbar />
        <section className="relative z-10 w-full">
          <div className="sec-1">
            <div className="container relative mx-auto grid grid-cols-1 items-center justify-center px-5 py-24 md:grid-cols-2">
              <div className="flex items-center">
                <img
                  className="w-full rounded object-cover"
                  src="/images/adilet.png"
                  alt="adilet hero"
                />
              </div>
              <div className="grid grid-cols-1 items-start justify-start gap-5">
                <h1 className="text-xl font-bold sm:text-4xl md:text-6xl">
                  The Way Of <br />
                  Learning Kazakh As <br />
                  Unique As You Are
                </h1>
                <p className="text-base sm:text-2xl">
                  Finally, learning a new language has become <br />
                  accessible, interesting, convenient and memorable!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 w-full">
          <div className="text-center">
            <h2 className="px-2 text-lg font-semibold md:text-xl lg:text-2xl xl:text-4xl">
              Learn Kazakh with a variety of tools. Effective, interesting and
              free!
            </h2>
          </div>
          <div className="container mx-auto grid grid-cols-1 justify-center justify-items-center gap-y-20 px-10 py-16  md:grid-cols-2 md:gap-4 xl:grid-cols-3">
            <div className="flex w-full flex-col flex-wrap justify-start space-y-20">
              <div className="flex items-start space-x-6">
                <ImBooks className="h-16 w-16 text-blue-600" />

                <div>
                  <h3 className="mb-3 font-semibold text-dark-blue">
                    Dictionary Cards
                  </h3>
                  <p className="text-lg">
                    Use special word cards to explore and learn new words and
                    their meaning.
                  </p>
                </div>
              </div>
              <div className="flex space-x-6">
                <BsArrowLeftRight className="h-16 w-16 text-red-500" />
                <div>
                  <h3 className="mb-3 font-semibold text-dark-blue">
                    Translator
                  </h3>
                  <p className="text-lg">
                    Get ranscription of words using translator from Cyrillic to
                    Latinian alphabet and vice versa.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden items-center xl:block">
              <img src="/images/books.png" />
            </div>
            <div className="flex w-full flex-wrap space-y-20">
              <div className="flex space-x-6">
                <BsCheckCircleFill className="h-16 w-16 text-green-600" />
                <div>
                  <h3 className="mb-3 font-semibold text-dark-blue">Quizzes</h3>
                  <p className="text-lg">
                    You can not only learn words, but also go through
                    interesting mini-quizes, thereby improving your knowledge.
                  </p>
                </div>
              </div>
              <div className="flex space-x-6">
                <AiFillSound className="text-purplen-600 h-12 w-12" />

                <div>
                  <h3 className="mb-3 font-semibold text-dark-blue"> TTS</h3>
                  <p className="text-lg">
                    Try special text-to-speach tool and improve your Kazakh
                    pronunciation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 w-full">
          <div className='sec-2'>
            <div className='container mx-auto flex flex-col md:flex-row justify-center items-center justify-items-center space-y-6 md:space-y-0 space-x-0 md:space-x-16 px-10 py-10 md:py-24'>
              <div className='w-full md:w-1/2 flex justify-center'>
                <img className='w-[500px]' src="/images/anel.png" />
              </div>
              <div className='w-full md:w-1/2'>
                <div className='w-full xl:w-2/3 flex flex-col space-y-3'>
                  <h2> Track your progress </h2>
                  <p className='text-xl'>Learn new meaning every day and track your proggress bar in profile. </p>
                  <h2>Remember</h2>
                  <p className='text-xl'>Sign up and save your favourite words and check the learned ones.</p>
                  <Link href={'#'}>
                    <a className="w-full rounded-lg border bg-dark-blue py-2.5 text-center ripple font-semibold text-white">
                      REGISTER
                    </a>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="relative z-10 w-full">
          <div className='sec-3'>
            <div className="container mx-auto grid grid-cols-1 justify-center justify-items-center px-16 md:px-5 py-10 md:py-24 md:grid-cols-3 md:gap-4">
              <div className="hidden md:block">
                <img className="" src={'/images/bills.svg'} />
              </div>
              <div className="flex flex-wrap justify-center justify-items-center space-y-6 pt-9 md:-space-y-12 lg:-space-y-20">
                <p className="text-center text-xl font-semibold lg:text-3xl">
                  Dowload our <span className="text-dark-blue">QazaqStudy</span>{' '}
                  mobile app and improve your knowlege no matter where and when.
                </p>
                <Link href={'#'}>
                  <a>
                    <img className="w-40 lg:w-full" src="/images/google.svg" />
                  </a>
                </Link>
              </div>
              <div className="hidden md:block">
                <img className="w-32 lg:w-44" src="/images/adilet2.png" />
              </div>
            </div>
          </div>
        </section>

        <section className='relative z-10'>
          <ContactUs />
        </section>

        
        <Footer />
      </main>
    </>
  )
}

export default Home
