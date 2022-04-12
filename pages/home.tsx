import React from 'react'
import { NextPage } from 'next'
import MobileApp from '@/components/MobileApp'
import ContactUs from '@/components/ContactUs'
const home: NextPage = () => {
	return (
		<>

		<MobileApp />
		<ContactUs />

		</>
	)
}

export default home