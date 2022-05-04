import React from 'react'
import Navbar from './Navbar'

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="mt-[68px]">{children}</div>
    </>
  )
}

export default MainWrapper
