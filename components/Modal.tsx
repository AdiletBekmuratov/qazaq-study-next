import React, { FC } from 'react'
import Button from './Button'
const { motion } = require('framer-motion')

const overlayVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      duration: 0.3,
      delayChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      duration: 0.3,
      delay: 0.4,
    },
  },
}

// @ts-ignore
const Modal: FC<{
  modalIsOpen: boolean
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  description: string
  callback: Function
}> = ({ modalIsOpen, setModalIsOpen, title, description, callback }) => {
  const handleConfirm = () => {
    setModalIsOpen(false)
    callback()
  }

  if (!modalIsOpen) {
    return <div></div>
  }

  if (modalIsOpen) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={overlayVariants}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20"
      >
        <motion.div
          className="w-4/5 max-w-lg rounded bg-white"
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          exit={{ y: '100vh' }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-b border-gray-300">
            <h4 className="p-4">{title}</h4>
          </div>
          <div className="p-4">{description}</div>
          <div className="flex justify-end space-x-4 border-t border-gray-300 p-4">
            <Button
              backgroundColor="bg-gray-400"
              onClick={() => setModalIsOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleConfirm}>Confirm</Button>
          </div>
        </motion.div>
      </motion.div>
    )
  }
}

export default Modal
