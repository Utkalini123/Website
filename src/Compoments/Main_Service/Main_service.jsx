import React from 'react'
import Main_part1 from './Main_part1'
import Main_part2 from './Main_part2'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Main_service = () => {
  return (
    <div>
        <Navbar/>
        <Main_part1/>
        <Main_part2/>
        <Footer/>
    </div>
  )
}

export default Main_service