import React from 'react'
import HOC from '../Layout/HOC'
import Navbar from '../navbar'

const CompleteWebinar = () => {
  return (
    <>
        <Navbar />
    </>
  )
}

export default HOC(CompleteWebinar)