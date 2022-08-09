import React from 'react'
import './home.css'
import { Navbar,FeaturedMovie, MovieCarousels } from '../../components'

const Home = () => {
  return (
    <div className='home__container'>
       <Navbar/>
        <FeaturedMovie/>
        <MovieCarousels/> 
       
    </div>
  )
}

export default Home