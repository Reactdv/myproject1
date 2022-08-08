import React from 'react'
import './home.css'
import { Navbar,FeaturedMovie } from '../../components'

const Home = () => {
  return (
    <div className='home__container'>
       <Navbar/>
       <FeaturedMovie/>
       
    </div>
  )
}

export default Home