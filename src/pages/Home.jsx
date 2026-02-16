import React from 'react'
import Hero from '../components/Hero'
import Body from '../components/Body'

const Home = () => {
  return (
    <main className='w-full h-full flex flex-col'>
        <Hero />
        <Body />
    </main>
  )
}

export default Home