import React, { FC } from 'react'

interface AchievmentCardProps {
  image?: string
  title?: string
  description?: string
  created_date?: string
}

const AchievmentCard: FC<AchievmentCardProps> = ({
  image,
  title,
  description,
  created_date,
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-1 rounded bg-white p-3 text-center shadow transition-all duration-300 hover:shadow-md">
      <img
        src="https://i.pinimg.com/originals/c7/80/5e/c7805ee9aa1a16baaa33a7b1be2f220e.png"
        alt="achive"
        className="aspect-square w-full object-cover"
      />
      <h4>Title</h4>
      <p className="text-sm">Пройти первый тест</p>
      <small>{new Date().toLocaleString('kk-KK')}</small>
    </div>
  )
}

export default AchievmentCard
