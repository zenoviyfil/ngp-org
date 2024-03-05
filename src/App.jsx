import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import News from './Components/News/News'
import Upcomings from './Components/Upcomings/Upcomings'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <News />
      <Upcomings/>
      <Footer/>
    </>
  )
}

export default App