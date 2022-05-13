import getImageURL from '@/helpers/getImageURL'
import { toIsoString } from '@/helpers/getFormatDate'
import React, { FC } from 'react'

interface AchievmentCardProps {
  image?: string
  title?: string
  description?: string
  date_created?: string
}

const AchievmentCard: FC<AchievmentCardProps> = ({
  image,
  title,
  description,
  date_created,
}) => {
	console.log({date_created});
	
  return (
    <div className="flex flex-col items-center justify-center space-y-1 rounded bg-white p-3 text-center shadow transition-all duration-300 hover:shadow-md">
      <img
        src={getImageURL(image, 'fit=cover')}
        alt={image}
        className="aspect-square w-full rounded-full object-cover"
      />
      <h4 className="leading-tight">{title}</h4>
      <p className="text-sm">{description}</p>
      <small>{
			// @ts-ignore
			toIsoString(new Date(date_created))}</small>
    </div>
  )
}

export default AchievmentCard
