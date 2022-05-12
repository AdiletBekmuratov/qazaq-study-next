import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Button from './Button'
import Modal from './Modal'

interface CardContent {
  id: number
  title: string
  imageUrl?: string
  description: string
  total: number
  score?: number
  slug: string
  minScore: number
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setClickedQuiz: React.Dispatch<
    React.SetStateAction<
      | {
          slug?: string | undefined
          id?: number | undefined
        }
      | undefined
    >
  >
}

const QuizCard = ({
  id,
  title,
  imageUrl,
  description,
  total,
  score,
  slug,
  minScore,
  setModalIsOpen,
  setClickedQuiz,
}: CardContent) => {
  const handleOpen = () => {
    setClickedQuiz({ id: id, slug: slug })
    setModalIsOpen(true)
  }
  return (
    <>
      <div className="flex flex-col justify-center space-y-5 rounded-lg bg-white p-3 shadow transition-all duration-300 hover:shadow-md">
        {imageUrl && (
          <img className="h-52 w-full rounded object-cover" src={imageUrl} />
        )}
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <h4 className="font-semibold">Amount of questions: {total}</h4>
          <h4 className="font-semibold">Minimum score to pass: {minScore}</h4>
          <h4 className="font-semibold">
            Your Maximum Score: {score ? score : '0'}
          </h4>
        </div>
        <Button onClick={handleOpen}>Перейти</Button>
      </div>
    </>
  )
}

export default QuizCard
