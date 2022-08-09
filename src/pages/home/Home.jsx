import React from 'react'
import './home.css'
import { Navbar,FeaturedMovie,PopularMovie } from '../../components'

const Home = () => {
  return (
    <div className='home__container'>
       <Navbar/>
       <FeaturedMovie/>
       <PopularMovie/>
       
    </div>
  )
}

export default Home