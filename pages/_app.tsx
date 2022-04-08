import 'react-phone-input-2/lib/style.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
const {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
} = require('framer-motion')

const animation = {
  variants: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  transition: { duration: 0.4 },
}

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
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
          <Component {...pageProps} />
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  )
}

export default MyApp
