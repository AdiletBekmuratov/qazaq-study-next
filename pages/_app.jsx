import Auth from '@/components/Auth'
import RefreshTokenHandler from '@/components/RefreshTokenHandler'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import dynamic from 'next/dynamic'
import 'react-phone-input-2/lib/style.css'
import '../styles/globals.css'
const {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
} = require('framer-motion')

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
})

const animation = {
  variants: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  transition: { duration: 0.4 },
}

function MyApp({ Component, pageProps: { session, ...pageProps }, router }) {
  const [interval, setInterval] = useState(0)
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session} refetchInterval={interval}>
        <AnimatedCursor color="255, 209, 26" outerSize={30} outerScale={2} />
        <Toaster position="top-right" />
        <LazyMotion features={domAnimation}>
          <AnimatePresence exitBeforeEnter initial={false}>
            <m.div
              key={router.route}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={animation.variants}
              transition={animation.transition}
            >
              {Component.auth ? (
                <Auth role={Component.auth?.role}>
                  <Component {...pageProps} />
                </Auth>
              ) : (
                <Component {...pageProps} />
              )}
            </m.div>
          </AnimatePresence>
        </LazyMotion>
        <RefreshTokenHandler setInterval={setInterval} />
      </SessionProvider>
    </>
  )
}

export default MyApp
