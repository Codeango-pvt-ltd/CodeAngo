import React from 'react'
import Hero from '../Components/Home/Hero'
import GetInTouch from '../Components/Home/GetInTouch'

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <div className="width flex flex-col w-11/12">
        <Hero />
        <GetInTouch />
        <div className="space h-32">

        </div>
      </div>

    </div>
  )
}
