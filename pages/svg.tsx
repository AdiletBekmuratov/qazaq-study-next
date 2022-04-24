import BookSvg from '@/components/BookSvg'
import TranslatorSvg from '@/components/TranslatorSvg'
import React from 'react'

const svg = () => {
  return (
	<div>
		<BookSvg />
		<TranslatorSvg className='text-blue-500' size={50} />
	</div>
  )
}

export default svg